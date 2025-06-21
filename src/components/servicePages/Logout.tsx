import Button from "@mui/material/Button";
import { useAppDispatch } from "../../redux/hooks";
import { logoutAction } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import React from "react";

const Logout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutAction());
        navigate("/");
    };

    return (
        <Button variant="contained" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default Logout;