import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import ProductComponent from "./ProductComponent";

export default function App() {
  return (
    <Router>
      <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product/1">Product 1</Link>
            </li>
            <li>
              <Link to="/product/2">Product 2</Link>
            </li>
          </ul>
        <Routes>
          <Route path="/product/1" element={<ProductComponent id="1"/>}/>
          <Route path="/product/2"  element={<ProductComponent id="2"/>}/>
          <Route path="/" exact element={<HomeComponent />}/>
        </Routes>
      </div>
    </Router>
  );
}