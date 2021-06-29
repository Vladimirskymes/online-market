import { observer } from "mobx-react-lite";
import React, {useContext, useState, useEffect} from "react"
import {BrowserRouter} from "react-router-dom"
import {Context} from "./index"
import {check} from "./https/userApi"
import AppRouter from "./Components/AppRouter";
import Navigation from "./Components/Navigation";
import {Spinner} from "react-bootstrap"
const App = observer(() => {
  const {user} = useContext(Context)
    const [load, setLoad] = useState(true)

    useEffect(() => {
      setTimeout(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
    }).finally(setLoad(false))}, 1000)
}
    , [])
  
    if(load){
      return <Spinner animation={"grow"}/>
    }
  return (
    <BrowserRouter>
      <Navigation/>
      <AppRouter >
      </AppRouter>
    </BrowserRouter>
  );
})

export default App;
