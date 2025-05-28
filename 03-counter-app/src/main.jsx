import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import './style.css'
import { Contenido } from "./CounterApp";
import { FirstApp2 } from "./FirstApp2";
import { CounterApp2 } from "./CounterApp2";


  ReactDOM.createRoot( document.getElementById('root')).render(
        <React.StrictMode>
            {/* <Contenido  value={10}/> */
            
            < CounterApp2 value={20} />}
        </React.StrictMode>
    )


