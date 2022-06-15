import "./info-box.scss";

export const InfoBox = ({ title, paragraph, footer }) => {
  return (
    <div className="infoContainer">
      <h5>{title}</h5>
      <p>{paragraph}</p>
      <span>{footer}</span>
    </div>
  );
};
