import cn from "classnames";
function Button({ text, type, disabled, handler }) {
  return (
    <button className="btn" disabled onClick={handler}>
      {text}
    </button>
  );
}
export default Button;
