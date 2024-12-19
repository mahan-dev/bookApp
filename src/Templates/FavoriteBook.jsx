import React from "react";
import image from "../assets/1.png";

const FavoriteBook = ({ data }) => {
  const { title, author, image } = data;
  return (
      <div className="favoriteBook">
        <img src={image} alt="" width={100} />
        <p>{title}</p>
      </div>
  );
};

export default FavoriteBook;
