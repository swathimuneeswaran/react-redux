import React, { useContext } from "react";
import UserContext from "../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./quantitySlice";

const Products = () => {
  // const products = useContext(UserContext);
  let { id } = useParams();
  const products = useContext(UserContext);
  const pro = products[parseInt(id) - 1];
  const quantity = useSelector((state) => state.quantity.quantity);
  // console.log(quantity)
  const dispatch = useDispatch();
  const navigate=useNavigate();

  function handleAlert() {
  //   setTimeout(
  //     () => (
  //       <div class="alert alert-info" role="alert">
  //         A simple info alert—check it out!
  //       </div>
  // ),
  //     1000
  //   );

    alert("Thanks for buying our product");
    navigate("/");

  }

  return (
    <>
    <div className="container con" >
      <div className="card" style={{ width: "35rem", height: "50%",marginLeft:"350px",marginTop:"80px"}}>
        {pro.id == 1 && (
          <img
            className="card-img-top"
            src="https://www.cnet.com/a/img/resize/5e939bc3ea6b58595213e9dfaebcb985b2fd5a7e/hub/2017/09/18/1fd793ba-7a62-4312-b8bd-28311999c912/iphone-8-03.jpg?auto=webp&width=1200"
            alt="Card image cap"
          />
        )}
        {pro.id == 2 && (
          <img
            className="card-img-top"
            src="https://www.cnet.com/a/img/resize/f92053644df2e2e92cae98f4841f1315fe731d21/hub/2018/07/27/d03f6003-0f7b-4f87-a8e9-2543cea5ec93/iphone-8-iphone-x-5872.jpg?auto=webp&fit=crop&height=1200&width=1200"
            alt="Card image cap"
          />
        )}
        {pro.id == 3 && (
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDre0Rv9DM4sdU2-37yyFqGeomkCWq7cIObA&usqp=CAU"
            alt="Card image cap"
          />
        )}
        {pro.id == 4 && (
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh95K9wHqXriEwJNvvZBqOT_R1Ii06V34wCg&usqp=CAU"
            alt="Card image cap"
          />
        )}
        {pro.id == 5 && (
          <img
            className="card-img-top"
            src="data:image/jpeg;base64,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"
            alt="Card image cap"
          />
        )}
        {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
        <div className="card-body" style={{backgroundColor:"lightgray"}}>
          <h5 className="card-title">{pro.title}</h5>
          <p style={{ fontSize: "20px" }}>
            <i>
              <b>
                Rating:
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "yellow", fontSize: "20px" }}
                />
                {pro.rating}
                <strong style={{ float: "right"}}>
                  <label htmlFor="quantity">Quantity: </label>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    name="quantity"
                    min="1"
                    max={pro.stock}
                    readOnly
                    className="quan"
                  ></input>
                  <button onClick={() => dispatch(increment())} className="inc">+</button>
                  <button onClick={() => dispatch(decrement())} className="dec">-</button>
                </strong>
              </b>
            </i>
          </p>
          <p>
            <i style={{ textDecoration: "underline", color: "brown" }}>
              <b>Price: ₹{pro.price}</b>
            </i>
          </p>
          <p className="card-text">{pro.description}</p>

          <h2>Total:{pro.price * quantity}</h2>
          <button className="btn btn-primary" onClick={handleAlert}>
            Buy
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Products;
