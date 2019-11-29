import React from "react";
import Card from "./Card/Card";
import { robots } from "../../robots";

// function randomNum(limit) {
//   return Math.floor(Math.random() * limit) + 1;
// }

const Cards = props => (
  <div>
    {robots.map(({ email, name, id }) => {
      return <Card id={id} key={id} name={name} email={email} />;
    })}
  </div>
);

export default Cards;
