import logo from "../../assets/logo_violet.svg";
import loader from "../../assets/loading.gif";
import React, {useEffect} from "react";
import './Loading.css';
import {useNavigate} from "react-router-dom";

// Do we really need this page?
function Loading() {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/main');
        }, Math.random() * 1000 + 1000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="Content-wrapper-loading">
            <img src={logo} className="App-logo" alt="logo"/>
            <img src={loader} className="App-spinner" alt="loader"/>
        </div>
    );
}


export default Loading;
