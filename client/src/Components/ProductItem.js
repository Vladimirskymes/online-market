import React from 'react'
import {Col, Card, Image} from "react-bootstrap"
import { useHistory } from 'react-router'
import Star from "../Assets/Vector.png"
import { DEVICE_ROUTE } from '../utils/constants'


function ProductItem({device}) {
    const History = useHistory()
    return (
        <Col className="pt-4" md={3} onClick ={() => History.push(DEVICE_ROUTE + "/" + device.id)} >
            <Card style={{width: "150px", cursor: "pointer"}} border={"light"}>
                <Image width = {150}  src={process.env.REACT_APP_API_URL +device.img} height = {150}/>
                <div className="text-black-50 d-flex mt-1 justify-content-between align-item-center">
                    <div> от {device.price + " грн"}</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width="15px" height="15px" src={Star}/>
                    </div>
                    
                </div>
                <div>
                        {device.name}
                </div>
            </Card>
        </Col>
    )
}

export default ProductItem
