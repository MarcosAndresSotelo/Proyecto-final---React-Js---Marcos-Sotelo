
import { Link } from 'react-router-dom';
import "./inicio.scss"

const Inicio = () => {
    return (
        <main className="mainIndex border row">
            <section className="imagenIndex">
                <div className="textoIndex text-light">
                    <div data-aos="zoom-in" data-aos-duration="3000">
                        <h1 className="d-flex justify-content-center textoIndex">BLANQUERÍA PARA EL HOGAR</h1>
                        <h3 className="d-flex justify-content-center textoIndexProd">productos personalizados</h3>
                        <div className="botonIndex">
                            <Link to="/acercaDe">
                                <button type="button" className="btn btn-light fs-1">Conócenos un poco más</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Inicio;