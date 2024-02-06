  import React from "react";
  import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBModalHeader,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";  
  import { useState } from "react";
  import { Button, Modal } from "react-bootstrap";

  export default function Button1({
    cart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  }) {
 
    const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };



    return cart.length > 0 ? (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ marginRight: "0px" }}
        >
          <div className="container-fluid">
            <div className="col d-flex justify-content-center">
              <a className="navbar-brand" href="#" style={{ marginLeft: "0px" }}>
                ShopKaro.in
              </a>
            </div>
          </div>
        </nav>
        <section className="h-100" style={{ backgroundColor: "#fff" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBTypography
                    tag="h1"
                    className="mb-0 text-black"
                    style={{ fontWeight: "500" }}
                  >
                    My Cart
                  </MDBTypography>
                </div>

                {cart.map((PRODUCT, index) => (
                  <MDBCard className="rounded-3 mb-4">
                    <MDBCardBody className="p-4">
                      <MDBRow className="justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="3">
                          <MDBCardImage
                            className="rounded-3"
                            fluid
                            src={PRODUCT.url}
                            alt="Cotton T-shirt"
                          />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <p
                            className="lead mb-2"
                            style={{ fontWeight: "500", fontSize: "30px" }}
                          >
                            {PRODUCT.productName}
                          </p>
                          <p>
                            <span
                              className="lead"
                              style={{
                                fontWeight: "500",
                                color: "#212529",
                                fontSize: "20px",
                              }}
                            >
                              Size:{" "}
                            </span>
                            <span
                              className="lead"
                              style={{
                                fontWeight: "500",
                                color: "#212529",
                                fontSize: "20px",
                              }}
                            >
                              7{" "}
                            </span>
                            <span
                              className="lead"
                              style={{
                                fontWeight: "500",
                                color: "#212529",
                                fontSize: "20px",
                              }}
                            >
                              Type:{" "}
                            </span>
                            <span
                              className="lead"
                              style={{
                                fontWeight: "500",
                                color: "#212529",
                                fontSize: "20px",
                              }}
                            >
                              UK
                            </span>
                          </p>
                        </MDBCol>

                        <div className="col-xl-2">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <button
                                class="btn btn-outline-primary"
                                type="button"
                                onClick={() => decreaseQuantity(PRODUCT)}
                                style={{position:"relative",width:"36px",left:"-8px",background:"black",border:"1px solid black",color:"white",borderRadius:"5px",}}
                              >
                                {/* <FontAwesomeIcon icon="fa-thin fa-minus" style={{position:"relative",width:"36px",left:"-8px",background:"black",border:"1px solid black",color:"white",borderRadius:"5px",}} onClick={() => decreaseQuantity(PRODUCT)}/> */}
                               -
                              </button>
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              value={PRODUCT.quantity}
                            
                              style={{border:"1px solid grey",margin:"0 20px 0 0",borderRadius:"4px",textAlign:"center",}}
                            /> 
                            <div class="input-group-prepend">
                              <button
                                class="btn btn-outline-primary"
                                type="button"
                                onClick={() => increaseQuantity(PRODUCT)}
                                style={{position:"relative",left:"-12px",background:"black",border:"1px solid black",color:"white"}}
                              >+
                              </button>
                            </div>
                          </div>
                        </div>



                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                          <MDBTypography
                            tag="h5"
                            className="mb-0"
                            style={{
                              marginRight: "10px",
                              marginLeft: "-59px",
                              width: "69px",
                            }}
                          >
                            ₹{PRODUCT.price}
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <button
                            type="button"
                            class="btn btn-dark"
                            style={{ marginLeft: "-200px", width: "150px" }}
                            onClick={() => {
                              removeFromCart(PRODUCT);
                            }}
                          >
                            Remove
                          </button>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                ))}
                <MDBCard style={{ border: "none" }}>
                  <MDBCardBody>
                    <button
                      type="button"
                      class="btn btn-dark btn-lg btn-block"
                      style={{ width: "1040px" }}
                      onClick={handleShow}
                    >
                      Proceed To Pay
                    </button>
                    <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{position:"absolute",marginLeft:"115px"}}>Purchase Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <i className="fas fa-check fa-4x mb-3 animated rotateIn" />
            <p>
              Congratulations On Your Purchase !! 
            </p>
            Hope You had a wonderful experience shopping with ShopKaro !!
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close<i className="far fa-gem ml-1 white-text" style={{position:"relative",marginLeft:"8px"}}/>
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Central Modal Medium Success */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>





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
    ) : (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ marginRight: "0px" }}
        >
          <div className="container-fluid">
            <div className="col d-flex justify-content-center">
              <a className="navbar-brand" href="#" style={{ marginLeft: "0px" }}>
                ShopKaro.in
              </a>
            </div>
          </div>
        </nav>

        <h1
          style={{
            display: "flex",
            height: "450px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Products Exist in the Cart
        </h1>

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
  }
