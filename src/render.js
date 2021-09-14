import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}