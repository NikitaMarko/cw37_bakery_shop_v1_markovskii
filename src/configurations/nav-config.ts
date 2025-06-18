import {Paths, type RouteType} from "../utils/shop-types.ts";


export const navItems: RouteType[] = [
    {path:Paths.HOME, title:'Home'},
    {path:Paths.ORDERS, title:'Orders'},
    {path: Paths.CART, title:'Shopping Cart'},
    {path: Paths.CUSTOMERS, title:'Customers'},
    {path: Paths.PRODUCTS, title:'Products'},
    {path: Paths.SIGN_IN, title:'Sign_In'},


]

export const productItems: RouteType[] = [
    {path:Paths.BREAD, title:'Bread'},
    {path:Paths.DAIRY, title:'Dairy'},
    {path:Paths.BACK, title:'BAck to menu'},
]