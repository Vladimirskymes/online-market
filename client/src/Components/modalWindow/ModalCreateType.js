import React, {useState} from 'react'
import {Modal, Form, Button} from "react-bootstrap";
import { createType } from '../../https/DeviceAPI';

function ModalCreateType({show, onHide}) {
    const [value, setValue] = useState("")
    const addType = () => {
        createType({name: value}).then(data => setValue("")) 
        onHide()
    }
    return (
        <Modal
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить тип
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
            <Form.Control value = {value} onChange = {(e) => setValue(e.target.value)} placeholder="Название типа"/>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant = "outline-danger" onClick={onHide}>Закрыть окно</Button>
          <Button variant = "outline-success"  onClick={addType}>Добавить тип</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalCreateType
