import "./service.scss";

export const Service = ({ imageUrl, title, description }) => {
  return (
    <div className="serviceContainer">
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
