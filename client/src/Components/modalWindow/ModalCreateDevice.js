import React, { useContext, useState, useEffect } from 'react'
import {Modal, Form, Button, Dropdown, Col, Row} from "react-bootstrap";
import {createDevice, getTypes, getBrands, getDevices} from "../../https/DeviceAPI"
import {Context} from "../../index";
import {observer} from "mobx-react-lite"

const ModalCreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState([])
    useEffect(() => {
        getTypes().then(data => device.setTypes(data))
        getBrands().then(data => device.setBrands(data))
    }, [])
    
 

    const addNewDescription = () => {
        setDescription([...description, {title: "", description: "", number: Date.now()}])
    }

    const removeDescription = (id) => {
         setDescription(description.filter((i) => i.number !== id ))
    }

    const changeInfo = (key, value, number) => {
        setDescription(description.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const addDevice = () => {
        const data = new FormData()
        data.append("name", name);
        data.append("price", `${price}`);
        data.append("img", file);
        data.append("brandId", device.choiseBrand.id);
        data.append("typeId", device.choiseType.id);
        data.append("info", JSON.stringify(description))
        createDevice(data).then(i => onHide())
    }
    return    (
        <Modal
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить девайс
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
            <Dropdown>
                <Dropdown.Toggle>
                {device.choiseType.name || "Выберите тип"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map((i) => 
                    <Dropdown.Item onClick={() => device.setChoiseType(i)} key={i.id}>
                        {i.name}
                    </Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3">
                <Dropdown.Toggle>
                    {device.choiseBrand.name || "Выберите бренд"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.brands.map((i) => 
                    <Dropdown.Item onClick={() => device.setChoiseBrand(i)} key={i.id}>
                        {i.name}
                    </Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control className="mt-3" value={name} onChange = {e => setName(e.target.value)} placeholder="Введите название"/>
            <Form.Control type="number" value={price} onChange = {e => setPrice(Number(e.target.value))} className="mt-3" placeholder="Введите цену"/>
            <Form.Control type="file" onChange={selectFile} className="mt-3"/>
            <hr/>
            <Button variant={"outline-dark"} onClick={addNewDescription} >Добавить характеристику</Button>
            {
                description.map(i => 
                <Row className = "mt-2" key={i.number}>
                    <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                    <Col md={4}>
                        <Button onClick = {() => removeDescription(i.number)} variant={"outline-danger"}>
                            Удалить
                        </Button>
                    </Col>
                </Row>)
            }
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant = "outline-danger" onClick={onHide}>Закрыть окно</Button>
          <Button variant = "outline-success"  onClick={addDevice}>Добавить девайс</Button>
        </Modal.Footer>
      </Modal>
    );
})

export default ModalCreateDevice
