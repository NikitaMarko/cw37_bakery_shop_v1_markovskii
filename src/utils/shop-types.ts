
export enum Paths {
    HOME = '/',
    ORDERS = 'orders',
    PRODUCTS = 'products',
    CART = 'cart',
    CUSTOMERS = 'customers',
    BREAD = 'bread',
    DAIRY = 'dairy',
    ERROR = 'error',
    BACK = 'back',
    SIGN_IN = 'sign_in',
}

export type RouteType = {
    path: Paths,
    title: string,
}