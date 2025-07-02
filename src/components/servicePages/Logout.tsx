import Button from "@mui/material/Button";
import {useAppDispatch} from "../../redux/hooks.ts";
import {logoutAction} from "../../redux/slices/authSlice.ts";
import {useNavigate} from "react-router-dom";
import {exit} from "../../firebase/firebaseAuthService.ts";


const Logout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <Button variant={'contained'}
            onClick={async () => {
                alert("Are you sure?")
                dispatch(logoutAction());
                await exit();
                navigate('/')
            }}
            >Logout</Button>
        </div>
    );
};

export default Logout;