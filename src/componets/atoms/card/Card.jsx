import React from "react";
import { CardDescription, CardImage, CardTitle } from "./CardStyles";

const Card = ({ image, title, description, alt }) => {
  return (
    <div>
      <CardImage src={image} alt={alt} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </div>
  );
};

export default Card;
