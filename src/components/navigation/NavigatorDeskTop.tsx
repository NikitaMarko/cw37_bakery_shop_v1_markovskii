import type {RouteType} from "../../utils/shop-types.ts";
import {type FC, useEffect, useState} from "react";
import {AppBar, Box, Tab, Tabs, Avatar, Typography } from "@mui/material";
import * as React from "react";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import { auth } from "../../configurations/firebase-config";
import {onAuthStateChanged} from "firebase/auth";
import Button from "@mui/material/Button";
import {exit} from "../../firebase/firebaseAuthService";
import {useAppDispatch} from "../../redux/hooks";
import {logoutAction} from "../../redux/slices/authSlice";

type Props = {
    items: RouteType[],
    sub?: string
}
const NavigatorDeskTop: FC<Props> = ({items}) => {
    const[user, setUser] = useState<{displayName: string | null, email: string | null, photoURL: string | null} | null>(null);
    const [value, setValue] = useState(0);
    const {pathname} = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    console.log(pathname)
    useEffect(() => {
        const index = items.findIndex(item => item.path === pathname.substring(1) )
        if(value !== index)
            setValue(Math.max(index,0));
    }, [pathname]);

    useEffect(() => {
        const unsubscribeUser = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth changed", currentUser);
            if (currentUser) {
                setUser({
                    displayName: currentUser.displayName,
                    email: currentUser.email,
                    photoURL: currentUser.photoURL,
                });
            } else {
                setUser(null);
            }
        });

        return () => unsubscribeUser();
    }, []);

    const handleOnChange =
        (_e: React.SyntheticEvent, newValue: number) => {
            setValue(newValue)
        }
    return (
        <Box sx={{mt: '50px'}}>
            <AppBar sx={{ backgroundColor: 'lightgrey', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
                <Tabs value={value} onChange={handleOnChange}>
                    {items.map(item =>
                        <Tab key={item.path} component={Link} to={item.path} label={item.title}/>
                    )}
                </Tabs>

                {user && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body1">{user.email || user.displayName}</Typography>
                        <Avatar src={user.photoURL || undefined}>{(user.email || 'U')[0]}</Avatar>
                        <Button
                            onClick={async () => {
                                await exit();
                                setUser(null);
                                dispatch(logoutAction());
                                navigate('/login');
                            }}
                            variant="outlined"
                            color="inherit"
                            size="small"
                        >
                            Logout
                        </Button>

                    </Box>
                )}
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavigatorDeskTop;