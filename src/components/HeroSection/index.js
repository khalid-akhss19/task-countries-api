import React from "react";
import "./style.css";
import { useState } from "react";

import { makeStyles } from "@material-ui/core";
import WrappperMargin from "../WrappperMargin";

import { setInput } from "../../features/productSlice/index";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productSlice/index";

const HeroSection = (e) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [inputField, setInputField] = useState(undefined);
  const [search, setSearch] = useState(undefined);
  const [filtra, setFilter] = useState("All");
  // const { data } = useFetch("https://restcountries.com/v2/all");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputField);
  };

  const handleSelect = (e) => {
    setFilter(e.target.value);
    setSearch(undefined);
    setInputField("");
  };
  const getCountryName = (code) => {
    let countryName;
    // const country = data.filter((element) => {
    //   return element.alpha3Code === code;
    // });
    // countryName = country[0].name;
    // return countryName;
  };
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <WrappperMargin>
        <div className="container">
          <form>
            <div>
              <i className="fas fa-search"></i>
              <input
                type="search"
                placeholder="Search for a country..."
                // value={inputField}
                // onChange={(e) => {
                //   setInputField(e.target.value);
                //   setSearch(e.target.value);
                // }}

                onChange={(e) => {
                  console.log(e.target.value);
                  if (e.target.value.gg === "") {
                    dispatch(fetchProducts());
                  } else {
                    dispatch(setInput(e.target.value));
                  }
                }}
                style={{
                  border: "1 solid black",
                  height: "27px",
                }}
              />
            </div>
            <select
              id="region"
              name="region"
              onChange={handleSelect}
              className="filter_all"
            >
              <option value="filter by" defaultValue>
                Filter by all
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
        </div>
      </WrappperMargin>
    </>
  );
};

export default HeroSection;

const useStyles = makeStyles((theme) => ({}));
