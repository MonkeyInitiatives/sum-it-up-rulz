import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
// imports bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/sidebar.css'

ReactDOM.render(<App />, document.getElementById("root"));