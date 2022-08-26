import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const getCartData = useSelector((state) => state.cartReducer.carts);

  return (
    <>
      <div className="headerContainer">
        <div className="back"></div>
        <h2>Shopping Cart</h2>
        <nav>
          <ul>
            <li>
              <button>
                <Link to="/cart">
                  <i className="fa-solid  fa-cart-shopping"></i>
                </Link>
                <sup>
                  {getCartData && (
                    <span className="item_count">{getCartData.length}</span>
                  )}
                </sup>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
