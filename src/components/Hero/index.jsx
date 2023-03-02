import React from "react";

import './style.scss';

import Cover from "../../assets/images/woman-cover.png";

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2>Aneesu Shop</h2>
        <p>Style & Self Confidence.</p>
        <button>Shop Now</button>
      </div>
      <div className="cover">
        <img src={Cover} />
      </div>
    </div>
  );
};
