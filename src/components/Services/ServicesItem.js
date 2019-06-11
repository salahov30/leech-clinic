import React from "react";

import Image from "../Image";

const ServicesItem = props => {
  return (
    <>
      <h3>{props.name}</h3>
      <span>
        {props.price}
        <Image
          width={25}
          height={25}
          alt="Знак рубля"
          src={process.env.PUBLIC_URL + "/image/ruble.png"}
        />
      </span>
    </>
  );
};

export default ServicesItem;

ServicesItem.defaultProps = {
  price: "Цена",
  name: "Название"
};
