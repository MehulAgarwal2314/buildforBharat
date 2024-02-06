import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
// import "../Productapp.css";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Product(props) {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/button");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
                <>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  NIKE <br />
                </h5>
                <h6 className="card-text text-center mb-3">
                  Revolution 6NN Running Shoes <br />
                  ₹4,099 <br />
                </h6>
                <div className="mt-2 ">
                  <a
                    className="btn btn-sm btn-primary d-flex justify-content-center py-1 mb-1"
                    onClick={navigateToCart}
                  >Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                style={{ width: "286.4px", height: "190px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  RED TAPE <br />
                </h5>
                <h6 className="card-text text-center mb-3">
                  Low-Top Lace-Up Walking Shoes <br />
                  ₹8,999 <br />
                </h6>
                <div className="mt-2 ">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary d-flex justify-content-center py-1 mb-1"
                    onClick={navigateToCart}
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80"
                style={{ width: "286.4px", height: "190px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Puma <br />
                </h5>
                <h6 className="card-text text-center mb-3">
                  Kosmo Rider Lace-Up Sneakers <br />
                  ₹2,099 <br />
                </h6>
                <div className="mt-2 ">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary d-flex justify-content-center py-1 mb-1"
                    onClick={navigateToCart}
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                style={{ width: "286.4px", height: "190px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Adidas <br />
                </h5>
                <h6 className="card-text text-center mb-3">
                  Clear Factor Running Shoes <br />
                  ₹5,299 <br />
                </h6>
                <div className="mt-2 ">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary d-flex justify-content-center py-1 mb-1"
                    onClick={navigateToCart}
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                style={{ width: "286.4px", height: "190px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center ">
                  Reebok <br />
                </h5>
                <h6 className="card-text text-center mb-3">
                  Austin 2.0 Lace-Up Running Shoes
                  <br />
                  ₹10,649 <br />
                </h6>
                <div className="mt-2 ">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary d-flex justify-content-center py-1 mb-1"
                    onClick={navigateToCart}
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                style={{ width: "286.4px", height: "190px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  U.S. Polo Assn.
                  <br />
                </h5>
                <h6 className="card-text text-center mb-3">
                  Lebron 2.0 Lace-Up Sneakers
                  <br />
                  ₹1,029 <br />
                </h6>
                <div className="mt-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary d-flex justify-content-center py-1 mb-1"
                    onClick={navigateToCart}
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      </div>
    
  {/* ) */}

      <footer
        className="nay text-center text-lg-start text-muted mt-3"
        style={{ textDecoration: "none" }}
      >
        {/* Section: Links  */}
        <section className style={{ textDecoration: "none" }}>
          <div
            className="container text-center text-md-start pt-4 pb-4"
            style={{ textDecoration: "none" }}
          >
            {/* Grid row */}
            <div className="row mt-3" style={{ textDecoration: "none" }}>
              {/* Grid column */}
              <div
                className="col-12 col-lg-3 col-sm-12 mb-2"
                style={{ textDecoration: "none" }}
              >
                {/* Content */}
                <a
                  href="https://mdbootstrap.com/"
                  target="_blank"
                  className="text-white h2"
                  style={{ textDecoration: "none" }}
                >
                  ShopKaro
                </a>
                <p className="mt-1 text-white">© 2023 Copyright: ShopKaro.in</p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div
                className="col-6 col-sm-4 col-lg-2"
                style={{ textDecoration: "none" }}
              >
                {/* Links */}
                <h6
                  className="text-uppercase text-white fw-bold mb-2"
                  style={{ textDecoration: "none" }}
                >
                  Store
                </h6>
                <ul
                  className="list-unstyled mb-4"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Find store
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-6 col-sm-4 col-lg-2">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Information
                </h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Help center
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Money refund
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Shipping info
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Refunds
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-6 col-sm-4 col-lg-2">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Support
                </h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Help center
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Documents
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Account restore
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-50"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      My orders
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-12 col-sm-12 col-lg-3">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Newsletter
                </h6>
                <p className="text-white">
                  Stay in touch with latest updates about our products and
                  offers
                </p>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control border"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-light border shadow-0"
                    type="button"
                    id="button-addon2"
                    data-mdb-ripple-color="dark"
                  >
                    Join
                  </button>
                </div>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        <div className>
          <div className="container">
            <div className="d-flex justify-content-between py-4 border-top"></div>
          </div>
        </div>
      </footer>
      {/* Footer */}
    </>
  );
}

export default Product;
