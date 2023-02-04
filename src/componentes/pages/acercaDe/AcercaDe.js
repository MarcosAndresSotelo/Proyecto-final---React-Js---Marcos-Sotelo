import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./acercaDe.scss"
import acercade from "../acercaDe/acercaDeImg/acercade.jpg"
import acercadedos from "../acercaDe/acercaDeImg/acercadedos.jpg"
import acercadetres from "../acercaDe/acercaDeImg/acercadetres.jpg"

const AcercaDe = () => {
    return (
        <div>
            <main className="row">
                <h1 className="d-flex justify-content-center mt-5 mb-5 col-12 col-lg-12">
                    Conócenos un poco más
                </h1>
                <div className="acerMain" style={{ maxWidth: "900px" }}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={acercade}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={acercadedos}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={acercadetres}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className="text-center mt-5 p-3">
                        <p className="fw-bold">
                            Maria es un emprendimiento que comenzó en la ciudad de Balcarce con el objetivo de embellecer los
                            hogares, dedicada a la fabricación de cortinados a medida, cortinas pre-listas para colgar, artículos de
                            blanco, fundas de sillón, cualquier tipo de producto personalizado y mucho más!
                        </p>
                        <p>Diseño, confort y pasión por la calidad son los valores que impulsan nuestra empresa.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AcercaDe;