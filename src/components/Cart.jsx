import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteItem } from "../redux/actions/index";
import "../style/Cart.scss";

const Cart = () => {
  const state = useSelector((state) => state.addItems);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(deleteItem(item));
  };

  const cartItems = (cartItems) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItems.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItems)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center cartInfo">
            <div className="col-md-4">
              <img
                src={cartItems.img}
                alt={cartItems.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItems.title}</h3>
              <p className="lead fw-bold">${cartItems.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-5 my-5 bg-light rounded-3">
        <div className="container py-4">
            <div className="row">
                <h3 className="fst-italic p-5">Your Cart is Empty</h3>
            </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return(
        <div className="container">
            <div className="row">
                <NavLink to='/checkout' className='btn btn-outline-primary mb-5 w-50 m-auto'>Procced To checkout</NavLink>
            </div>
        </div>
    )
  }

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}

    </>
  );
};

export default Cart;
