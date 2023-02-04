import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CarritoContext"
import { db } from "../firebase/config"
import { collection, writeBatch, documentId, getDocs, query, where, addDoc } from "firebase/firestore"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import "../checkout/checkout.scss"
import Swal from "sweetalert2"

const schema = Yup.object().shape({
    nombre: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    apellido: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    telefono: Yup.string().required('Este campo es requerido'),
    correo: Yup.string().email('El email no es válido').required('Este campo es obligatorio'),
    repetirCorreo: Yup.string().when("correo", {
        is: val => !!(val && val.length > 0),
        then: Yup.string().oneOf([Yup.ref("correo"), null], "Los correos electrónicos no coinciden").required("Este campo es obligatorio")
    })
})

export const Checkout = () => {
    const { cart, totalCart, emptycart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const createOrder = async (values) => {

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')
        const productosDorBanRef = collection(db, 'productosDormitorioBano')

        const outOfStock = []

        const itemsRef = query(productosRef, productosDorBanRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        const productos = await getDocs(itemsRef)

        productos.docs.forEach(doc => {
            const item = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            emptycart()
                        })
                        .catch((error) => console.log(error))
                })
        } else {
            Swal.fire('Any fool can use a computer')
        }

    }


    if (orderId) {
        return (
            <div className="container my-5 text-center">
                <h2 className="fs-2 fw-bolde">Tu compra ha sido exitosa</h2>
                <Link to="/inicio" className="btn btn-secondary mt-5">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2>Terminar mi compra</h2>
            <hr />

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={(values) => {
                    createOrder(values)
                }}
                validationSchema={schema}
            >
                {(
                    { values, handleChange, handleSubmit }
                ) => (
                    <Form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <Field type="text" onChange={handleChange} value={values.nombre} name="nombre" placeholder="Nombre" className="form-control" />
                            <ErrorMessage name="nombre" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <Field type="text" onChange={handleChange} value={values.apellido} name="apellido" placeholder="Apellido" className="form-control" />
                            <ErrorMessage name="apellido" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <Field type="text" onChange={handleChange} value={values.telefono} name="telefono" placeholder="Teléfono" className="form-control" />
                            <ErrorMessage name="telefono" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <Field type="email" onChange={handleChange} value={values.correo} name="correo" placeholder="Correo" className="form-control" />
                            <ErrorMessage name="correo" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <Field type="email" onChange={handleChange} value={values.repetirCorreo} name="repetirCorreo" placeholder="Repetir correo" className="form-control" />
                            <ErrorMessage name="repetirCorreo" component="div" className="text-danger" />
                        </div>
                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>



        </div>
    )
}

export default Checkout