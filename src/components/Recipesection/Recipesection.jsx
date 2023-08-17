import React from "react";
import "./Recipesection.scss";

export default function Recipesection() {
  return (
    <section className="recipe_section">
      <div className="recipe">
        <img src="../images/recipe-1.jpeg" width="190px" alt="" />
        <h2>Avocado, and Tomato Salad</h2>
        <p>dona's Kitchen</p>
      </div>

      <div className="recipe">
        <img src="../images/recipe-2.jpeg" width="190px" alt="" />
        <h2>Chickpea & Butternut Squash Salad</h2>
        <p>Tasty Treat</p>
      </div>

      <div className="recipe">
        <img src="../images/recipe-3.jpeg" width="190px" alt="" />
        <h2>Spicy Chicken & Salad</h2>
        <p>Yummy Foods</p>
      </div>

      <div className="recipe">
        <img src="../images/recipe-4.jpeg" width="190px" alt="" />
        <h2>Chips, Avocado Creamy Sauce</h2>
        <p>Ella Olsson</p>
      </div>
    </section>
  );
}
