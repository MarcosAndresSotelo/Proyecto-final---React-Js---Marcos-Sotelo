import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CartContext } from "../../context/CarritoContext";
import CarritoDeCompras from "../carrito/CarritoDeCompras";
import * as Yup from "yup";
import "./checkout.scss"

const Checkout = () => {
    const { cart, totalCart } = useContext(CartContext);

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required("El nombre es requerido"),
        apellido: Yup.string().required("El apellido es requerido"),
        telefono: Yup.number().required("El teléfono es requerido"),
        correo: Yup.string().required("El correo es requerido"),
        repetirCorreo: Yup.string().when("correo", {
            is: (val) => !!(val && val.length > 0),
            then: Yup.string().oneOf([Yup.ref("correo")], "Los correos deben coincidir"),
        }),
    });




    
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log("Form values", values);
        } catch (err) {
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container my-5 text-center">
            <h2>Finalizar compra</h2>
            <hr />
            <h4>Total: ${totalCart()}</h4>
            <ul className="list-unstyled">
                {cart.map(item => (
                    <li key={item.id}>
                        Nombre: {item.nombre} | Cantidad: {item.cantidad} | Precio: ${item.precio * item.cantidad}
                    </li>
                ))}
            </ul>
            <Formik
                initialValues={{
                    nombre: "",
                    apellido: "",
                    telefono: "",
                    correo: "",
                    repetirCorreo: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="form">
                        <div className="form-group">
                            <Field type="text" name="nombre" placeholder="Nombre" className="form-control" />
                            <ErrorMessage name="nombre" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <Field type="text" name="apellido" placeholder="Apellido" className="form-control" />
                            <ErrorMessage name="apellido" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <Field type="text" name="telefono" placeholder="Teléfono" className="form-control" />
                            <ErrorMessage name="telefono" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <Field type="email" name="correo" placeholder="Correo" className="form-control" />
                            <ErrorMessage name="correo" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <Field type="email" name="repetirCorreo" placeholder="Repetir correo" className="form-control" />
                            <ErrorMessage name="repetirCorreo" component="div" className="text-danger" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn btn-secondary mt-2 ">Comprar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Checkout;