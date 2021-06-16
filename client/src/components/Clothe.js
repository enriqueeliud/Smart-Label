import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addToCart} from "../actions/cartActions"
import { Modal } from "react-bootstrap";

export default function Clothe({ clothe }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  function addtocart(){
   dispatch (addToCart(clothe, quantity, varient))
  }

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{clothe.name}</h1>
        <img
          src={clothe.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
          alt="clothe"
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {clothe.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option Value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price: {clothe.prices[0][varient] * quantity} Ksh/-
          </h1>
        </div>

        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>ADD TO CART</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{clothe.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={clothe.image}
            className="img-fluid"
            style={{ height: "400px" }}
            alt="clothe"
          />
          <p>{clothe.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={addtocart}>ADD TO CART</button>
          <button className="btn" onClick={handleClose}>
            close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
