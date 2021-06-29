import React, {useState} from 'react'
import {Button, Container} from "react-bootstrap"
import ModalCreateBrand from "../Components/modalWindow/ModalCreateBrand"
import ModalCreateType from "../Components/modalWindow/ModalCreateType"
import ModalCreateDevice from "../Components/modalWindow/ModalCreateDevice"
function AdminPanel() {
    const [typeModal, setTypeModal] = useState(false);
    const [brandModal, setBrandModal] = useState(false);
    const [deviceModal, setDeviceModal] = useState(false);

    return (
        <Container className="d-flex flex-column" >
            <Button onClick={() => setTypeModal(true)} variant={"outline-dark"} className={"mt-3 p-3"}>
                Добавить тип
            </Button>
            <Button onClick={() => setBrandModal(true)} variant={"outline-dark"} className={"mt-3 p-3"}>
                Добавить бренд
            </Button>
            <Button onClick={() => setDeviceModal(true)} variant={"outline-dark"} className={"mt-3 p-3"}>
                Добавить устройство
            </Button>
            <Button onClick={() => setDeviceModal(true)} variant={"outline-dark"} className={"mt-3 p-3"}>
                Удалить Тип
            </Button>
            <Button onClick={() => setDeviceModal(true)} variant={"outline-dark"} className={"mt-3 p-3"}>
                Удалить Бренд
            </Button>
            <Button onClick={() => setDeviceModal(true)} variant={"outline-dark"} className={"mt-3 p-3"}>
                Удалить устройство
            </Button>
            <ModalCreateBrand show={brandModal} onHide={() => setBrandModal(false)}/>
            <ModalCreateType show={typeModal} onHide={() => setTypeModal(false)}/>
            <ModalCreateDevice show={deviceModal} onHide={() => setDeviceModal(false)}/>
        </Container>
    )
}

export default AdminPanel
