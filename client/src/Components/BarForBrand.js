import {observer} from "mobx-react-lite"
import React, {useContext} from 'react'
import { Context } from ".."
import {Card, Row} from "react-bootstrap"

const BarForBrand = observer(() => {
    const {device} = useContext(Context)
    return (
    <Row  className = "d=flex">
        {device.brands.map(i => 
            <Card className="p-2"
            border={i.id === device.choiseBrand.id ? "success" : "light"} style={{cursor: "pointer"}}
            
            onClick = {() => device.setChoiseBrand(i)}
            key={i.id}>
                {i.name}
            </Card>
        )}
    </Row>
    )
})

export default BarForBrand
