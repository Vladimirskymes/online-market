import { observer } from 'mobx-react-lite';
import React, {useContext, useState} from 'react'
import {Card, Container, Form, Button, Row} from "react-bootstrap"
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { Context } from '..';
import { login, registration } from '../https/userApi';
import { LOGIN_ROUTE, REGISTRATION, SHOP_ROUTE } from '../utils/constants'

const Authorization = observer(() => {
    const {user} = useContext(Context)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const location = useLocation();
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE;
    const click = async() => {
        try{
            let data;
            if(isLogin){
                data = await login(email, password)
                console.log(data)
            }
            else{
                const data = await registration(email, password)
                console.log(data)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
    
        }  catch(e){
            alert(e.response.data.message)
        }
    };
    return (
        <Container className=" align-items-center justify-content-center d-flex"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: "620px"}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column"> 
                    <Form.Control value={email} onChange = {e => setEmail(e.target.value)} className="mt-4" placeholder="Email"/>
                    <Form.Control type="password" value={password} onChange= {e=> setPassword(e.target.value)} className="mt-4" placeholder="Password"/>

                    <Row className="d-flex justify-content-between pl-3 pr-3 ">
                    <div className="mt-4">{isLogin ? "Нет аккаунта?": "Есть аккаунт?"}
                    <NavLink to={isLogin ? REGISTRATION : LOGIN_ROUTE}> {isLogin ? "Регистрация" : "Авторизация"}</NavLink>
                     </div>
                    <Button  onClick = {click} className="mt-4" variant={"outline-success"}> {isLogin ? "Войти" : "Зарегистрироваться"} </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
})

export default Authorization
