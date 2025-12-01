import React from "react";
import "./ImageGridBlock.css";

function ImageGridBlock({ image, title, description }) {
  return (
    <div className="image-grid-block">
      <div className="image-wrapper">
        <img src={image} alt={title} className="image-grid-img" />
      </div>

      <div className="image-grid-content">
        <h4 className="image-grid-title">{title}</h4>
        <p className="image-grid-description">{description}</p>
      </div>
    </div>
  );
}

export default ImageGridBlock;
