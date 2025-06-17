import {Paths, type RouteType} from "../utils/shop-types.ts";


export const navItems: RouteType[] = [
    {path:Paths.HOME, title:'Home'},
    {path:Paths.ORDERS, title:'Orders'},
    {path: Paths.CART, title:'Shopping Cart'},
    {path: Paths.CUSTOMERS, title:'Customers'},
    {path: Paths.PRODUCTS, title:'Products'},
    {path: Paths.ERROR, title:'Error'},

]

export const productItems: RouteType[] = [
    {path:Paths.BREAD, title:'Bread'},
    {path:Paths.DAIRY, title:'Dairy'},
]