import React from "react";
import { Link } from "react-router-dom";

import Image from "../Image";
import Button from "../Button";

import "./specialistCard.css";

const SpecialistCard = props => {
  const { image, name, specialty, textBtn, onClick, textLink, linkUrl } = props;
  return (
    <div>
      <div className="specialist-card">
        <div className="selected-specialist__img">
          <Image src={image} alt="Фотография специалиста" />
        </div>
        <div className="selected-specialist__content">
          <h3>{name}</h3>
          <span>{specialty}</span>
          <div className="card-btn">
            {textBtn ? (
              <Button onClick={onClick}>{textBtn}</Button>
            ) : (
              <Link to={`${linkUrl}`}>{textLink}</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;
