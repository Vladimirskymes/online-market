import React, { useContext } from 'react'
import { Context } from '..'
import {Button, Nav, Navbar, Container} from "react-bootstrap"
import { NavLink, useHistory } from 'react-router-dom'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants'
import {observer} from "mobx-react-lite"


 const Navigation = observer(()  =>{
    const {user} = useContext(Context)
    const HISTORY = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color: "white"}} to={SHOP_ROUTE}> Online Store </NavLink>
                {user.isAuth ?
                <Nav className="ml-auto" style={{color: "white"}}>
                    <Button variant={"outline-light"} onClick={() => HISTORY.push(ADMIN_ROUTE)}>Админ панель</Button>
                    <div onClick = {() => HISTORY.push(BASKET_ROUTE)} className="ml-4">
                    <svg style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                    </svg>
                    </div>
                    <Button variant={"outline-light"} onClick={() => logOut()} className="ml-4"> Выйти </Button>
                </Nav>
                :
                <Nav style={{color: "white"}} className="ml-auto" >
                    <Button onClick = {() => HISTORY.push(LOGIN_ROUTE)} variant={"outline-light"}>Авторизация</Button>
                </Nav>
                }
                </Container>
        </Navbar>

    )
})

export default Navigation
