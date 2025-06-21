import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../utils/paths.ts";


const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${Paths.ERROR}`)
        console.log('Done')
    }, []);
    return (
        <h2>
            OOOPS! Something went wrong!!! 404 not found!!!
        </h2>
    );
};

export default ErrorPage;