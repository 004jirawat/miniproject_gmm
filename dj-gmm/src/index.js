import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "./component/Head";
import List from "./component/List";
import reportWebVitals from "./reportWebVitals";
import History from "./component/History";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Link to="/List">List</Link>
      <Routes>
      <Route path="/List" element={<List/>} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <Routing />
    {/* <History /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
