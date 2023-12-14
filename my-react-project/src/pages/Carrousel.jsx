import Carousel from 'react-bootstrap/Carousel';
import dataColeImage from '../Img/DataCole.png';
import system from '../Img/system.svg';
import elFuturo from '../Img/elFuturo.svg';
import campus from '../Img/campus.svg';

function DarkVariantExample() {
    const carouselItemStyle = {
        backgroundColor: '#fd7e14', 
        padding: '20px', 
        height: '100vh',
    };
    const carouselItem2 = {
        backgroundColor: '#611276', 
        padding: '20px',
        height: '100vh', 
    };

    const carouselItem3 = {
        backgroundColor: '#3b2fba', 
        padding: '20px',
        height: '100vh', 
    };


    return (
        <Carousel data-bs-theme="dark" className="w-100 mx-auto" >
            <Carousel.Item style={carouselItemStyle}>
                <img
                    className="d-block mx-auto img-fluid "
                    src={dataColeImage}
                    alt="DataCole"
                />
                <img
                    className="d-block mx-auto img-fluid"
                    src={system}
                    alt="System"
                />
                <Carousel.Caption>
                    <div className="slider-content">
                        <h2 className="d-md-block">SISTEMA INTEGRAL DE GESTIÓN EDUCATIVA</h2>
                        <p className="d-md-block">
                            DataCole es una plataforma educativa orientada a mejorar los procesos de las instituciones, que integra al personal administrativo, docentes, padres de familia y alumnos.
                        </p>
                        <div className="universal-btn-wrapper d-md-block" style={{ float: 'right' }}>
                            <a href="contacto" className="btn btn-dark btn-lg">
                                CONTÁCTENOS
                            </a>

                            <a href="precios" className="btn btn-outline-orange btn-lg">
                                VER PLANES
                            </a>

                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselItem2}>
            <img
                    className="d-block mx-auto img-fluid"
                    src={dataColeImage}
                    alt="DataCole"
                />
            <img
                    className="d-block mx-auto img-fluid"
                    src={elFuturo}
                    alt="elFuturo"
                />
               
                <Carousel.Caption>
                    <div className="slider-content">
                        <h2 className="d-md-block">El futuro de la organización académica</h2>
                        <p className="d-md-block">
                        Toda la gestión académica bajo control, simplifica el funcionamiento de tu centro, las tareas de secretaría y centraliza las labores de administración. Ahorra horas de trabajo en organización y controla todo en cualquier momento.
                        </p>
                        <div className="universal-btn-wrapper d-md-block" style={{ float: 'right' }}>
                            <a href="contacto" className="btn btn-dark btn-lg">
                                LEER MAS...
                            </a>

                            <a href="precios" className="btn btn-outline-orange btn-lg">
                                CONTACTANOS
                            </a>

                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselItem3}>
            <img
                    className="d-block mx-auto img-fluid"
                    src={dataColeImage}
                    alt="DataCole"
                />
            <img
                    className="d-block mx-auto img-fluid"
                    src={campus}
                    alt="campus"
                />
               
                <Carousel.Caption>
                    <div className="slider-content">
                        <h2 className="d-md-block">Educar mejor gracias a un entorno en forma de red social</h2>
                        <p className="d-md-block">
                        DataCole redefine la experiencia de Campus Virtual para profesores y alumnos para acercarla más a las nuevas generaciones. Un interfaz limpio y amigable que esconde a un auténtico gigante de la gestión educativa.
                        </p>
                        <div className="universal-btn-wrapper d-md-block" style={{ float: 'right' }}>
                            <a href="contacto" className="btn btn-dark btn-lg">
                                LEER MAS...
                            </a>

                            <a href="precios" className="btn btn-outline-orange btn-lg">
                                CONTACTANOS
                            </a>

                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;
