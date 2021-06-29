import {observer} from "mobx-react-lite"
import React, {useContext} from 'react'
import { Context } from ".."
import {Row} from "react-bootstrap"
import ProductItems from "./ProductItem"

const ProductList = observer(() => {
    const {device} = useContext(Context)
    return (
    <Row className="d-flex">
        {device.devices.map(i => 
            <ProductItems key={i.id} device={i}></ProductItems>
        )}
    </Row>
    )
})

export default ProductList
