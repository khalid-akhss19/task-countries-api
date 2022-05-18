import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // if (term === "") return alert("Please enter search term!");
  // dispatch(fetchProducts(term));

  // setTerm("");
  // console.log(term);
  // };
  return (
    <>
      <div className="headerContainer">
        <div className="headerLeft">
          <h1>Where in the world?</h1>
        </div>
        {/* <h3> search start here </h3> */}
        {/* <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={term}
              placeholder="Search Movies or Shows"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div> */}
        {/* 
        <h3>search end herer</h3> */}
        <div className="linksHead">
          <div className="headerLinks">
            <Link id="link" className="navlink" to="/">
              <h4>Home</h4>
            </Link>

            <Link id="link" className="navlink" to="favourite">
              <h4>Favourite</h4>
            </Link>
            <Link id="link" className="navlink" to="faq">
              <h4> Faq</h4>
            </Link>
          </div>
        </div>

        <div className="headerRight">
          <button className="haderModebtn">
            {/* <FontAwesomeIcon icon="fa-solid fa-moon" /> */}
            <i class="fa-solid fa-moon"></i> <span>Dark Mode</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
