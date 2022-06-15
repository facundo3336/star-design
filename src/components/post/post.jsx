import "./post.scss";

export const Post = ({ title, imageUrl }) => {
  return (
    <div
      className="postContainer"
      style={{
        backgroundImage: "url(" + imageUrl + ")",
      }}
    >
      <div className="postContent">
        <h6>{title}</h6>
        <div className="postVioletLine"></div>
      </div>
    </div>
  );
};
