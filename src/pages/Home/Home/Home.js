import React from 'react';
import './Home.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {

    return (
        <Container className='mb-20 mt-20' style={{ height: '30rem' }}>
            <Row>
                <Col lg="6" className='shadow-lg p-3 rounded'>
                    <h1>
                        Launch Your Web Development Career With Education Master!
                    </h1><br />
                    <p>Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the front-end by learning HTML, CSS, and JavaScript. Then, master the back-end and APIs to round out your full-stack skills</p>
                </Col>

                <Col lg="6">
                    <Card.Img className="shadow-lg p-3 rounded ms-10" style={{ height: '25rem' }} src="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all" alt="Card image" />
                </Col>
            </Row>
            <MapContainer className='shadow-lg p-3 rounded' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

            <Footer></Footer>
        </Container>

    );
};

export default Home;