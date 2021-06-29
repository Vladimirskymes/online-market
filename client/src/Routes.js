import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION, SHOP_ROUTE} from "./utils/constants"
import AdminPanel from "./Pages/AdminPanel"
import Shop from "./Pages/Shop"
import Basket from "./Pages/Basket"
import DevicePage from "./Pages/DevicePage"
import Authorization from "./Pages/Authorization"

export const authorizationRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: REGISTRATION,
        Component: Authorization 
    },
    {
        path: LOGIN_ROUTE,
        Component: Authorization 
    },
    {
        path: DEVICE_ROUTE + "/:id",
        Component: DevicePage 
    }
]