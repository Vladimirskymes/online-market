import React, {useState} from 'react'
import {Modal, Form, Button} from "react-bootstrap";
import { createBrand } from '../../https/DeviceAPI';
function ModalCreateBrand({show, onHide}) {
    const [value, setValue] = useState("")
    const addBrand = () => {
        createBrand({name: value}).then(data => setValue("")) 
        onHide()

    }
    return    (
    <Modal
    show={show}
    onHide={onHide}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Добавить бренд
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Form>
        <Form.Control value = {value} onChange = {(e) => setValue(e.target.value)} placeholder="Название типа"/>
     </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant = "outline-danger" onClick={onHide}>Закрыть окно</Button>
      <Button variant = "outline-success"  onClick={addBrand}>Добавить бренд</Button>
    </Modal.Footer>
  </Modal>
);
  }
  

export default ModalCreateBrand
