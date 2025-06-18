import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Paths} from "../utils/shop-types";
import React from "react";

const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${Paths.ERROR}`);
        console.log("Done")
        }, []);

    return <h3>Error page</h3>;
};

export default ErrorPage;

