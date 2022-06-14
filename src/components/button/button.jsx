import "./button.scss";

export const Button = ({ children, colorClass, onClick }) => {
  return (
    <button onClick={onClick} className={"button " + colorClass}>
      {children}
    </button>
  );
};
