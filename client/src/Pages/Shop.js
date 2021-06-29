import React, {useContext, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BarForType from "../Components/BarForType"
import BarForBrand from "../Components/BarForBrand"
import { observer } from 'mobx-react-lite'
import ProductList from "../Components/ProductList"
import { Context } from '..'
import { getTypes, getBrands, getDevices} from '../https/DeviceAPI'
import Paginations from "../Components/Pagination"
const Shop = observer(() =>  {
    const {device} = useContext(Context)

    useEffect(() => {
        getTypes().then(data => device.setTypes(data))
        getBrands().then(data => device.setBrands(data))
        getDevices(null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        getDevices(device.choiseType.id, device.choiseBrand.id, device.page, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.choiseType, device.choiseBrand,])

    return (
        <Container >
            <Row className = "mt-3">
                <Col md={3}>
                    <BarForType></BarForType>
                </Col>
                <Col md={9} >
                    <BarForBrand></BarForBrand>
                    <ProductList></ProductList>
                    <Paginations></Paginations>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop
