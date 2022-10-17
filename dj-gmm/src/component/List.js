import React from "react";
import "./Style/List.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import History from "./History";
import{Navbar} from "react-bootstrap";

function List (){
    return(
    <div>
        <img
          alt=""
          src="/img/1.PNG"
          width="220"
          height="310"
          className="d-inline-block align-top"
        />
        
        <Navbar.Brand href={<History/>}>
        <body className="Name" >สายทิพย์ มนตรีกุล ณ อยุธยา(พี่ฉอด)</body><br />
        </Navbar.Brand>
    </div>)
};

export default List;