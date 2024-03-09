import React, { useContext, useState } from "react";
import UserContext from "../context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const FirstPage = () => {
  const products = useContext(UserContext);
  const [items, setItems] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState([]);

  function handleClick(id,index) {
    setItems((previousState) => previousState + 1);
    setDisabledButtons((prevDisabledButtons) => {
      const updatedButtons = [...prevDisabledButtons];
      updatedButtons[index] = true;
      return updatedButtons;
    });
  }

  return (
    <>
      <div className="container first-img" >
        <div className="row">
          <h2
            style={{
              margin: "1px",
              fontFamily: "cursive",
              backgroundColor: "lightgrey",
              width: "100%",
              textAlign: "center",
            }}
            className="mobile"
          >
            MOBILES SHOPPING
          </h2>

          <p className="cart">Cart Items: {items} </p>
          <h1>
            <FontAwesomeIcon icon={faShoppingCart} className="cart1" />
          </h1>

          {products.map((pro,index) => (
            <div
              key={pro.id}
              className="col-lg-4 col-md-4 col-sm-6 mb-4 mt-4"
            >
              <div
                className="card"
                style={{
                  width: "22rem",
                  height: "100%",
                  backgroundColor: "lightblue",
                  marginLeft:"30px"
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">{pro.title}</h5>
                  <p className="card-text">{pro.description}</p>
                  <div className="same">
                    <button
                      className="btn"
                      onClick={() => handleClick(pro.id,index)}
                      disabled={disabledButtons[index]}
                      style={{
                        marginTop: "50px",
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    >
                      Add to Cart
                    </button>
                    <Link to={`/product/${pro.id}`} className="btn btn-success buy">
                      BUY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FirstPage;
