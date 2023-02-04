import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CarritoContext";
import ItemCount from "../itemCount/ItemCount";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./itemDetail.scss";

export const ItemDetail = ({ id, nombre, stock, categoria, img, descripcion, precio }) => {

    console.log(img);

    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };

    const { agregarAlCarrito, isInCart } = useCartContext();

    const [cantidad, setCantidad] = useState(1);

    const handleAgregar = () => {
        const item = {
            id,
            nombre,
            stock,
            categoria,
            img,
            descripcion,
            precio,
            cantidad,
        };

        agregarAlCarrito(item);
    };

    return (
        <Container className="item-detail">
            <Row>
                <Col md={5}>
                    <Image src={img} alt={nombre} fluid />
                </Col>
                <Col md={7}>
                    <h2>{nombre}</h2>
                    <small className="text-muted">Categoría: {categoria}</small>
                    <p>{descripcion}</p>
                    <p>Precio: ${precio}</p>

                    {stock <= 20 && (
                        <h5 className="text-danger">Últimas unidades disponibles!</h5>
                    )}

                    {!isInCart(id) ? (
                        <ItemCount
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            max={stock}
                            onAdd={handleAgregar}
                        />
                    ) : (
                        <Link to="/carrito">
                            <Button variant="success">Terminar mi compra</Button>
                        </Link>
                    )}

                    <hr />

                    <Button variant="primary" onClick={handleVolver}>
                        Volver
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemDetail;