import {useAppSelector} from "../../redux/hooks.ts";
import BreadProductsAdmin from "./BreadProductsAdmin.tsx";
import BreadProductsUser from "./BreadProductsUser.tsx";


const Bread = () => {
    const {authUser} = useAppSelector(state => state.auth);
    if(authUser && authUser.email.includes('admin')){
        return <BreadProductsAdmin/>
    }
    return <BreadProductsUser/>
};

export default Bread;