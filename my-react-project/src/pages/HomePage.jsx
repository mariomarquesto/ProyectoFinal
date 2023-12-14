import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const MyCarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-25"
                    src="../src/img/DataCole.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6} md={6} sm={12} xs={12} className="align-left">
                                <div className="slider-content">
                                    <h2>SISTEMA INTEGRAL DE GESTIÓN EDUCATIVA</h2>
                                    <p>
                                        DataCole es una plataforma educativa orientada a mejorar los procesos de las instituciones, que integra al personal administrativo, docentes, padres de familia y alumnos.
                                    </p>
                                    <div className="universal-btn-wrapper" style={{ float: 'right' }}>
                                        <a href="precios" className="btn btn-outline-orange btn-lg">
                                            VER PLANES
                                        </a>
                                        <a href="contacto" className="btn btn-dark btn-lg">
                                            CONTÁCTENOS
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className="mb-4 mb-lg-0">
                                {/* Puedes agregar el estilo necesario para la imagen aquí */}
                                <img
                                    className="d-block w-50"
                                    src="../src/img/system.svg"
                                    alt="Thumbnail"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Agrega más Carousel.Item según sea necesario */}
        </Carousel>
    );
};

export default MyCarouselComponent;
