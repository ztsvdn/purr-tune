import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter, createRoutesFromElements, Navigate, Route,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loading from "./components/loading/Loading";
import Main from "./components/main/Main";
import Generating from "./components/generating/Generating";
import Results from "./components/results/Results";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<App/>}
        >
            <Route index element={<Navigate to="/loading" replace/>}/>
            <Route
                path="loading"
                element={<Loading/>}
            />
            <Route
                path="main"
                element={<Main/>}
            />
            <Route
                path="generating"
                element={<Generating/>}
            />
            <Route
                path="results"
                element={<Results/>}
            />
        </Route>
    ), {basename: "/purr-tune"}
);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
