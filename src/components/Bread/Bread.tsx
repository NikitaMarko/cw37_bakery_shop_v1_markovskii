import React from "react";
import {useAppSelector} from "../../redux/hooks";
import BreadProductsAdmin from "./BreadProductsAdmin";
import BreadProductsUser from "./BreadProductsUser";


const Bread = () => {
    const {authUser} = useAppSelector(state => state.auth);
    if(authUser && authUser.email.includes('admin')){
        return <BreadProductsAdmin/>
    }
    return <BreadProductsUser/>
};

export default Bread;