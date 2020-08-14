import React from "react";
import { Link } from "react-router-dom";
import mCityLogo from "../../Assets/images/logos/manchester_city_logo.png";

const CityLogo = ({width, height, link, linkTo}) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: width,
        height: height,
        background: `url(${mCityLogo}) no-repeat`,
      }}
    ></div>
  );

  if (link) {
    return (
      <Link to={linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};

export default CityLogo;
