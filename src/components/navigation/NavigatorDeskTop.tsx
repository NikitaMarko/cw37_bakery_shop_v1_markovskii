import type {RouteType} from "../../utils/shop-types.ts";
import {type FC, useEffect, useState} from "react";
import {AppBar, Box, Tab, Tabs, Toolbar} from "@mui/material";
import * as React from "react";
import {Link, Outlet, useLocation} from "react-router-dom";
import Button from "@mui/material/Button";
import {useAppSelector} from "../../redux/hooks.ts";

type Props = {
    items: RouteType[],
    sub?: string
}
const NavigatorDeskTop: FC<Props> = ({items}) => {
    const [value, setValue] = useState(0);
    const {pathname} = useLocation();
    const {authUser} = useAppSelector(state => state.auth)
    console.log(pathname)
    useEffect(() => {
        const activePageIndex = items.findIndex(item => item.path === pathname)
        if(activePageIndex < items.length)
            setValue(Math.max(activePageIndex, 0))
        else setValue(0)
    }, [pathname]);

    const handleOnChange =
        (_e: React.SyntheticEvent, newValue: number) => {
            setValue(newValue)
        }
    return (
        <Box sx={{mt: '50px'}}>
            <AppBar sx={{backgroundColor: 'lightgrey'}}>
                <Toolbar>
                    <Tabs value={value} onChange={handleOnChange} sx={{flexGrow: 1}}>
                        {
                            items.map(item =>
                                <Tab key={item.path} component={Link} to={item.path} label={item.title}/>
                            )
                        }
                    </Tabs>
                    <Button variant={"text"}>{authUser?.displayName || authUser?.email}</Button>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavigatorDeskTop;