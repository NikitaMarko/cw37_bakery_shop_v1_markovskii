import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Paths} from "../utils/shop-types.ts";

const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${Paths.ERROR}`);
        console.log("Done")
        }, []);

    return <h3>Error page</h3>;
};

export default ErrorPage;

