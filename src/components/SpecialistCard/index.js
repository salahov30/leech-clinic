import React from "react";
import { Link } from "react-router-dom";

import Image from "../Image";
import Button from "../Button";

import "./specialistCard.css";

const SpecialistCard = props => {
  const {
    image,
    name,
    speciality,
    textBtn,
    onClick,
    textLink,
    linkUrl
  } = props;
  return (
    <>
      <div className="specialist-card">
        <div className="selected-specialist__img">
          <Image
            width={270}
            height={390}
            src={image}
            alt="Фотография специалиста"
          />
        </div>
        <div className="selected-specialist__content">
          <h3>{name}</h3>
          <span>{speciality}</span>
          <div className="card-btn">
            {textBtn ? (
              <Button className="secondary-btn" onClick={onClick}>
                {textBtn}
              </Button>
            ) : (
              <Link className="secondary-btn" to={`${linkUrl}`}>
                {textLink}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

SpecialistCard.defaultProps = {
  name: "ФИО",
  speciality: "Специльность"
};

export default SpecialistCard;
