
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul className={'nav-list'}>
                    <NavLink to={'/'}><li>Home</li></NavLink>
                    <NavLink to={'/orders'}><li>Oredrs</li></NavLink>
                    <NavLink to={'/customers'}><li>Customers</li></NavLink>
                    <NavLink to={'/cart'}><li>Shopping Cart</li></NavLink>
                    <NavLink to={'/products'}><li>Products</li></NavLink>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Layout;