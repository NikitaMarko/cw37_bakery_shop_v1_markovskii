import type {FC} from "react";
import type {RouteType} from "../../utils/shop-types.ts";
import {NavLink, Outlet} from "react-router-dom";

type Props = {
    items: RouteType[],
    sub?:string
}
const Navigator:FC<Props> = ({items,sub}) => {
    return (
        <div>
            <nav>
                <ul className={`nav-list ${sub}`} >
                    {
                        items.map(item =>
                        <NavLink to={item.path} key={item.path} style={{textDecorationLine:"none"}}><li>{item.title}</li></NavLink>
                        )
                    }
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Navigator;