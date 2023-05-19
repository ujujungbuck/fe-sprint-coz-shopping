import React from "react";

const ExhibitionCard = ({ data }) => {
  return (
    <div>
      ExhibitionCard
      <img
        className="card-image"
        key={data.id}
        src={data.image_url}
        alt={data.title}
        id={data.id}
      />
      <div className="title">{data.title}</div>
      <div>{data.sub_title}</div>
    </div>
  );
};

export default ExhibitionCard;
