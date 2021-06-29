import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BarForType from "../Components/BarForType"
import BarForBrand from "../Components/BarForBrand"
import { observer } from 'mobx-react-lite'
import ProductList from "../Components/ProductList"
import { Context } from '..'
import { getTypes, getBrands, getDevices} from '../https/DeviceAPI'
import Paginations from "../Components/Pagination"

function Basket() {
    return (
        
        <Container className="mt-5" style={{backgroundColor: "grey"}}>
            <Row md={2} style={{backgroundColor: "black"}}>
awfwa
            </Row>
            <Row md={4} style={{backgroundColor: "green"} }>
             sa
            </Row>
            <Row md={3} style={{backgroundColor: "yellow"}}>
             de
            </Row>
            <Row  md={3}style={{backgroundColor: "red"}}>
             deasf
            </Row>
        </Container>
    )
}

export default Basket
