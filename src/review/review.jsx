import "./review.scss";

export const Review = ({ user, time, review }) => {
  return (
    <div className="reviewContainer">
      <span className="reviewUser">{user}</span>
      <div className="reviewTimeContainer">
        <div className="starsContainer">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <span>{time + " ago"}</span>
      </div>
      <p>{review}</p>
      <div className="bottomRightVioletSquare"></div>
      <div className="topLeftVioletSquare"></div>
    </div>
  );
};
