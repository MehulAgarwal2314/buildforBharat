import React from "react";
import "../Navbar.css";
import { Badge } from "react-bootstrap";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { GiShoppingBag } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { FunctionComponent } from 'react'

const Navbar = ({countItemsInCart}) => {
// const Navbar = ({itemCount}) => {
  const handleClick = () => navigate('/cart');
  const navigate = useNavigate();
 
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ marginRight: "0px" }}
    >
      <div className="container-fluid">
        <div className="col d-flex justify-content-center">
          <a className="navbar-brand" href="#" style={{ marginLeft: "60px" }}>
            ShopKaro.in
          </a>
        </div>
      <i className="fa badge fa-lg" onClick={handleClick} >&#xf07a;</i>
      <span class="badge badge-dark" style={{marginLeft: "-15px"}}>{countItemsInCart()}</span>
      </div>
    </nav>
  );
};

export { Navbar };
