import React from "react";
import { meal } from "../App";
import "./Meals.css";

const Meal = ({
  key,
  name,
  meals,
  onChange,
}: {
  key: string;
  name: string;
  meals: meal[];
  onChange: (newPrice: number) => void;
}) => {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onChange(+e.target.value);
    } else {
      onChange(+e.target.value * -1);
    }
  }; // 100

  return (
    <>
      <div className="expense-item">
        <br></br>
        {name}
        <br></br>
      </div>
      <div className="expense-item__description">
        {meals.map((meal) => {
          return (
            <div>
              <br></br>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="expense-image"
              />
              {meal.strMeal} {meal.price}${" "}
              <input
                type="checkBox"
                value={meal.price}
                onChange={handler}
              ></input>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Meal;
