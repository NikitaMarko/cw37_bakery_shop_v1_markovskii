import Button from "@mui/material/Button";
import { useAppDispatch } from "../../redux/hooks";
import { logoutAction } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import React from "react";

const Logout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();



    return (
        <div>
        <Button variant="contained" onClick={() => {
            alert('Are you sure?')
            dispatch(logoutAction());
            navigate('/');
        }}>
            Logout
        </Button>
        </div>
    );
};

export default Logout;