import React from "react";
import {useAppSelector} from "../../redux/hooks";
import DairyProductsAdmin from "./DairyProductsAdmin";
import DairyProductsUser from "./DairyProductsUser";



const Dairy = () => {
    const {authUser} = useAppSelector(state => state.auth);
    if(authUser && authUser.email.includes('admin')){
        return <DairyProductsAdmin/>
    }
    return <DairyProductsUser/>
};

export default Dairy;