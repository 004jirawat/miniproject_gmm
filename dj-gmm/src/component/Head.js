import React from "react";
import{Navbar} from "react-bootstrap";
// import List from "./List";

function Head() {
    return (
<div>
    <Navbar classname ="H" bg="primary" variant="dark" expand="lg">
    <Navbar.Brand href="./">
        <img
          alt=""
          src="/img/John.PNG"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      GMM
      </Navbar.Brand>
      
  </Navbar>
</div>
    )}

export default Head;