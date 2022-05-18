import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../features/countrySlice";
import "./style.css";

const Favourite = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.country);

  const handleRemove = (productName) => {
    dispatch(remove(productName));
  };

  return (
    <div>
      <h3 className="favtitle">Your Favourites </h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.name} className="cartCard">
            <img src={product.flag} alt="" />
            <h5>{product.name}</h5>
            <h5>{product.capital}</h5>
            <button className="btn" onClick={() => handleRemove(product.name)}>
              Remove Fav
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
