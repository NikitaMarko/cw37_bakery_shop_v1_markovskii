import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import React from 'react';
import {setProducts} from "./firebase/firebaseDBService";

setProducts().then(() => {
    createRoot(document.getElementById('root')!).render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
})

