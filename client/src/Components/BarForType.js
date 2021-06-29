import {observer} from "mobx-react-lite"
import React, {useContext} from 'react'
import { Context } from ".."
import {ListGroup} from "react-bootstrap"

const BarForType = observer(() => {
    const {device} = useContext(Context)
    return (
    <ListGroup>
        {device.types.map(i => 
            <ListGroup.Item 
            active={i.id === device.choiseType.id} style={{cursor: "pointer"}}
            
            onClick = {() => device.setChoiseType(i)}
            key={i.id}>
                {i.name}
            </ListGroup.Item>
        )}
    </ListGroup>
    )
})

export default BarForType
