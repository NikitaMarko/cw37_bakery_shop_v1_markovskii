import './App.css'
//import Layout from "./components/navigation/Layout.tsx";
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Paths} from "./utils/paths.ts";
import Home from "./components/Home.tsx";
import Customers from "./components/Customers.tsx";
import Orders from "./components/Orders.tsx";
import ShoppingCart from "./components/ShoppingCart.tsx";
//import ProductLayout from "./components/navigation/ProductLayout.tsx";
import Dairy from "./components/Dairy.tsx";
import Bread from "./components/Bread/Bread.tsx";
//import Navigator from "./components/navigation/Navigator.tsx";
import {navItems, productItems} from "./configurations/nav-config.ts";
import ErrorPage from "./components/servicePages/ErrorPage.tsx";
import {useEffect} from "react";
import NavigatorDeskTop from "./components/navigation/NavigatorDeskTop.tsx";
import Login from "./components/servicePages/Login.tsx";
import Logout from "./components/servicePages/Logout.tsx";
import {ProductType, Roles, type RouteType} from "./utils/shop-types.ts";
import {useAppDispatch, useAppSelector} from "./redux/hooks.ts";
import Registration from "./components/servicePages/Registration.tsx";
import {getProducts} from "./firebase/firebaseDBService.ts";
import {prodsUpd} from "./redux/slices/productSlice.ts";

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch  = useAppDispatch();
    const {authUser} = useAppSelector(state => state.auth)
    useEffect(() => {
        if(location.pathname === `/${Paths.ERROR}`)
            navigate('/')
    }, []);
    useEffect(() => {
        const subscrition = getProducts().subscribe({
            next: (prods: ProductType[]) => {dispatch(prodsUpd(prods))}
        })
        return () => {subscrition.unsubscribe()}
    }, []);

    const predicate = (item:RouteType) => {
        return (
            item.role === Roles.ALL ||
                item.role === Roles.USER && authUser||
                item.role === Roles.ADMIN && authUser && authUser.email.includes('admin')||
                item.role === Roles.NO_AUTH && !authUser||
                item.role === Roles.NO_ADMIN && authUser && !authUser.email.includes('admin')
        )
    }

    const getRoutes = () => {
        return navItems.filter(item => predicate(item))
    }
    return (
        <Routes>
            {/*<Route path={Paths.HOME} element={<Layout/>}>*/}
            {/*<Route path={Paths.HOME} element={<Navigator items={navItems}/>}>*/}
            {/*<Route path={Paths.HOME} element={<NavigatorDeskTop items={navItems}/>}>*/}
            <Route path={Paths.HOME} element={<NavigatorDeskTop items={getRoutes()}/>}>
                <Route index element={<Home/>}/>
                <Route path={Paths.CUSTOMERS} element={<Customers/>}/>
                <Route path={Paths.ORDERS} element={<Orders/>}/>
                <Route path={Paths.CART} element={<ShoppingCart/>}/>
                {/*<Route path={Paths.PRODUCTS} element={<Products/>}/>*/}
                {/*<Route path={Paths.PRODUCTS} element={<ProductLayout/>}>*/}
                <Route path={Paths.PRODUCTS} element={<NavigatorDeskTop items={productItems}/>}>
                    <Route path={Paths.BREAD} element={<Bread/>}/>
                    <Route path={Paths.DAIRY} element={<Dairy/>}/>
                    <Route path={Paths.BACK} element={<Navigate to={Paths.HOME}/>}/>
                </Route>
                <Route path={Paths.LOGIN} element={<Login/>}/>
                <Route path={Paths.LOGOUT} element={<Logout/>}/>
            </Route>
            <Route path={Paths.REGISTER} element={<Registration/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
}

export default App
