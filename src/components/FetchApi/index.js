import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../features/countrySlice";
import { fetchProducts } from "../../features/productSlice";
import { STATUSES } from "../../features/productSlice";
import "./style.css";

const FetchApi = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2 className="loadingCenter">Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2 className="loadingCenter ">Something went wrong!</h2>;
  }
  return (
    <>
      <div className="productsWrapper">
        {products.map((product) => (
          <div className="cardOuter" key={product.id}>
            <img src={product.flag} className="imgcard" />
            <div className="info">
              <h2 className="cartTitl">
                {product.name}
                {/* <span className="heart">
                <i class="fa-solid fa-heart"></i>
              </span> */}
              </h2>

              <div>
                population:
                <span className="spnRightCard">{product.population}</span>
              </div>

              <div>
                region: <span className="spnRightCard">{product.region}</span>{" "}
              </div>

              <div>
                capital: <span className="spnRightCard">{product.capital}</span>
              </div>
              <button onClick={() => handleAdd(product)} className="btn">
                Add to Fav
                <span className="heart">
                  <i class="fa-solid fa-heart"></i>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchApi;
