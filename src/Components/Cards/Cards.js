import React from "react";
import Card from "./Card/Card";
import { robots } from "../../robots";

const Cards = props => (
  <div>
    {robots.map(({ email, name, id }) => (
      <Card id={id} key={id} name={name} email={email} />
    ))}
  </div>
);

export default Cards;
