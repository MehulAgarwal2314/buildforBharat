import React from "react";
import "../Buttonapp.css";
import { useNavigate } from "react-router-dom";
import "./Product";
import { Navbar } from "./Navbar";

function Button(props) {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <Navbar/>    
        <section className="naya">
          <div className="container">
            <div className="row">
              {/* cart */}
              <div className="col-lg-9">
                <div className="card border shadow-0">
                  <div className="m-4">
                    <h4 className="card-title mb-4">Your shopping cart</h4>
                 
                    <div className="row gy-3 mb-4">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img
                              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                              className="border rounded me-3"
                              style={{ width: "126px", height: "96px" }}
                            />
                            <div className>
                              <a href="#" className="nav-link">
                                Winter jacket for men and lady
                              </a>
                              <p className="text-muted">Yellow, Jeans</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className>
                          <select
                            style={{ width: "100px" }}
                            className="form-select me-4"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className>
                          <text className="h6">$1156.00</text> <br />
                          <small className="text-muted text-nowrap">
                            {" "}
                            $460.00 / per item{" "}
                          </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <a
                            href="#!"
                            className="btn btn-light border px-2 icon-hover-primary"
                          >
                            {" "}
                            <i
                              class="fa fa-heart fa-lg px-1 text-secondary"
                              style={{ fontSize: "15px" }}
                            ></i>
                          </a>
                          <a
                            href="#"
                            className="new1 btn btn-light border "
                          >
                            Remove
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* )} */}
                    <div className="row gy-3 mb-4">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img
                              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                              className="border rounded me-3"
                              style={{ width: "126px", height: "96px" }}
                            />
                            <div className>
                              <a href="#" className="nav-link">
                                Mens T-shirt Cotton Base
                              </a>
                              <p className="text-muted">Blue, Medium</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className>
                          <select
                            style={{ width: "100px" }}
                            className="form-select me-4"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className>
                          <text className="h6">$44.80</text> <br />
                          <small className="text-muted text-nowrap">
                            {" "}
                            $12.20 / per item{" "}
                          </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <a
                            href="#!"
                            className="btn btn-light border px-2 icon-hover-primary"
                          >
                            {" "}
                            <i
                              class="fa fa-heart fa-lg px-1 text-secondary"
                              style={{ fontSize: "15px" }}
                            ></i>
                          </a>
                          <a href="#" className="new1 btn btn-light border ">
                            {" "}
                            Remove
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row gy-3">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img
                              src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80"
                              className="border rounded me-3"
                              style={{ width: "126px", height: "96px" }}
                            />
                            <div className>
                              <a href="#" className="nav-link">
                                Blazer Suit Dress Jacket for Men
                              </a>
                              <p className="text-muted">XL size, Jeans, Blue</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className>
                          <select
                            style={{ width: "100px" }}
                            className="form-select me-4"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className>
                          <text className="h6">$1156.00</text> <br />
                          <small className="text-muted text-nowrap">
                            {" "}
                            $460.00 / per item{" "}
                          </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <a
                            href="#!"
                            className="btn btn-light border px-2 icon-hover-primary "
                          >
                            {" "}
                            <i
                              className="fa fa-heart fa-lg px-1 text-secondary"
                              style={{ fontSize: "15px" }}
                            ></i>
                          </a>
                          <a href="#" className="new1 btn btn-light border ">
                            {" "}
                            Remove
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card shadow-0 border">
                  <div className="card-body" style={{ height: "317px" }}>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total price:</p>
                      <p className="mb-2">$329.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Discount:</p>
                      <p className="mb-2 text-success">-$60.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">TAX:</p>
                      <p className="mb-2">$14.00</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total price:</p>
                      <p className="mb-2 fw-bold">$283.00</p>
                    </div>
                    <div className="mt-3">
                      <a
                        href="#"
                        className="new btn btn-dark w-100 shadow-0 mb-2"
                      >
                        {" "}
                        Make Purchase{" "}
                      </a>
                      <a
                        className="btn btn-light w-100 border mt-2"
                        onClick={navigateToHome}
                      >
                        {" "}
                        Back to shop{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
                                   
              {/* summary */}
            </div>
            
          </div>
        </section>
        {/* cart + summary */}
        <section>
          <div className="container my-5">
            {/* <header className="mb-4">
        <h3>Recommended items</h3>
      </header> */}
            <div className="row"></div>
          </div>
        </section>
        {/* Recommended */}
        {/* Footer */}
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
                  <p className="mt-1 text-white">
                    © 2023 Copyright: ShopKaro.in
                  </p>
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
      </div>
    </>
  );
}

export { Button };


