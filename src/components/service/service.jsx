import "./service.scss";
import "animate.css";
import { useState } from "react";

export const Service = ({ imageUrl, title, description }) => {
  const [animation, setAnimation] = useState("");

  function handleMouseOver() {
    setAnimation("animate__animated animate__headShake");
  }

  function handleMouseOut() {
    setAnimation("");
  }
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={`serviceContainer ` + animation}
    >
      <div
        className="serviceImage"
        style={{
          backgroundImage: "url(" + imageUrl + ")",
        }}
      ></div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};
