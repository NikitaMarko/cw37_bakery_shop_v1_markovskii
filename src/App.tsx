import './App.css'
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Paths} from "./utils/shop-types";
import Home from "./components/Home";
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import ShoppingCart from "./components/ShoppingCart";
import Bread from "./components/Bread";
import Dairy from "./components/Dairy";
import {navItems, productItems} from "./configurations/nav-config";
import ErrorPage from "./components/ErrorPage";
import {useEffect} from "react";
import NavigatorDesk from "./components/navigation/NavigatorDesk";
import Login from "./components/Login";
import React from 'react';

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(location.pathname === `/${Paths.ERROR}`)
            navigate('/')
    }, []);

  return (
    <Routes>
      {/*<Route path={Paths.HOME} element={<Layout/>}>*/}
      {/*<Route path={Paths.HOME} element={<Navigator items={navItems}/>}>*/}
      <Route path={Paths.HOME} element={<NavigatorDesk items={navItems}/>}>
      <Route index element={<Home/>}/>
        <Route path={Paths.CUSTOMERS} element={<Customers/>}/>
        <Route path={Paths.ORDERS} element={<Orders/>}/>
        <Route path={Paths.CART} element={<ShoppingCart/>}/>
        {/*<Route path={Paths.PRODUCTS} element={<Products/>}/>*/}
        {/*<Route path={Paths.PRODUCTS} element={<ProductLayout/>}>*/}
        {/*<Route path={Paths.PRODUCTS} element={<Navigator items={productItems} sub={'sub'}/>}>*/}
        <Route path={Paths.PRODUCTS} element={<NavigatorDesk items={productItems}/>}>
        <Route path={Paths.BREAD} element={<Bread/>}/>
        <Route path={Paths.DAIRY} element={<Dairy/>}/>
        <Route path={Paths.BACK} element={<Navigate to={Paths.HOME}/>}/>
        </Route>
      </Route>
        <Route path={Paths.SIGN_IN} element={<Login onLoginClick={(object)=> console.log(JSON.stringify(object))}/>}></Route>
          <Route path={"*"} element={<ErrorPage/>} />


    </Routes>
  )
}

export default App
