import React from "react";
import { PRODUCTS } from "./Asliproducts";
import "./shop.css";
import { Navbar } from "./Navbar";
import { useState } from "react";

export const Shop =({addToCart,cart,countItemsInCart})=>{
  const [isShown, setIsShown] = useState(false);
const [itemCount, setItemCount] = useState(0);
  function handleClick() {
    setIsShown(current => !current);
  };
  
  function increaseCount(){
    setItemCount(function(prev){
      return prev +1
    })
  }

  return (
    <>
    {/* <Navbar itemCount={itemCount} cart={cart}/> */}
    <Navbar  cart={cart} countItemsInCart={countItemsInCart}/>
    <div className="shop">
      <div className="Asliproducts" style={{ marginBottom:"70px"}}>
        {PRODUCTS.map((PRODUCT,index) => (
          <div key={PRODUCT.productName + index}>
          <div className="container mt-5" >
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={PRODUCT.url}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                {PRODUCT.productName}<br/>
                </h5>
                <h6 className="card-text text-center mb-3">
                  {PRODUCT.description}<br />
                  ₹{PRODUCT.price}<br />
                </h6>
                <div className="mt-2 ">
                  <a
                    className="btn btn-sm btn-dark d-flex justify-content-center py-1 mb-1" onClick={()=>{increaseCount();handleClick();addToCart(PRODUCT)}}
                  >Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        ))
        }
      </div>
    </div>
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
              <div
                className="col-6 col-sm-4 col-lg-2"
                style={{ textDecoration: "none" }}
              >
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
  </>
  );
      };
