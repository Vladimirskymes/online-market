import React, {useState, useEffect} from 'react'
import {Container, Col, Image, Row, Card, Button} from "react-bootstrap"
import BigStar from "../Assets/BigStar.png"
import {useParams} from "react-router-dom"
import { getOneDevice } from '../https/DeviceAPI';
function DevicePage() {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams()
    useEffect(()=> {
        getOneDevice(id).then(data => setDevice(data))
    }, [])
    return (
        <Container className="mt-2">
        <Row>
        <Col md={4}>
                <Image width="302px" height="320px" src={process.env.REACT_APP_API_URL + device.img}/>
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2>{device.name}</h2>
                    <div  style={{background: `url(${BigStar}) no-repeat center center`,
                     width:"240px", height:"240px", backgroundSize: "cover", fontSize: 64}} className="d-flex align-items-center justify-content-center" >
                        {device.rating}
                    </div>

                </Row>
            </Col>
            <Col md={4}>
                <Card style={{width: 300, height: 305, border: "6px solid lightgray", fontSize: "32px"}} className="d-flex flex-column justify-content-around align-items-center">
                    <h3>
                        от {device.price} грн.
                    </h3>
                    <Button variant={"outline-dark"}>
                        Добавить в корзиу
                    </Button>
                </Card>

            </Col>
        </Row>
        <Row className="d-flex flex-column ml-3">
            <h1>Характеристики</h1>
            {device.info.map((i, index) => 
            <Row style={{background: index % 2 === 0 ? "lightgrey" : "white", padding: "10px" }}key={i.id}>{i.title}:{i.description} </Row>
                )}
        </Row>
        
        </Container>
    )
}

export default DevicePage
