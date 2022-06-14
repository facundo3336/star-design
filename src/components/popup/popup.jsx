import "./popup.scss";
import { useEffect } from "react";

export const Popup = ({ children, close }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="popupContainer">
      <div className="popupContent">
        <i onClick={close} className="far fa-times-circle"></i>
        {children}
      </div>
    </div>
  );
};
