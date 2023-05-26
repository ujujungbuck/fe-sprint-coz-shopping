import React from "react";

const CategoryCard = ({ data }) => {
  return (
    <div>
      CategoryCard
      <img
        className="card-image"
        key={data.id}
        src={data.image_url}
        alt={data.title}
        id={data.id}
      />
      <div className="title">#{data.title}</div>
    </div>
  );
};

export default CategoryCard;
