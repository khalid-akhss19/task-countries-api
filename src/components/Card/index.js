import React from "react";
import "./style.css";

const Card = () => {
  return (
    <>
      <div className="cardOuter">
        <img src="https://flagcdn.com/ax.svg" className="imgcard" />
        <div className="info">
          <h2 className="cartTitl">
            Albania{" "}
            <span className="heart">
              <i class="fa-solid fa-heart"></i>
            </span>
          </h2>

          <div>
            <h2>
              population: <span className="spnRightCard">2,837,743</span>{" "}
            </h2>
          </div>

          <div>
            <h3>
              region: <span className="spnRightCard">Europe</span>{" "}
            </h3>
          </div>

          <div>
            <h3>
              capital: <span className="spnRightCard">Tirana</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
