import cn from "classnames";
import styles from "./button.module.scss";

function Button({ text, type, disabled, handler }) {
  return (
    <button className={cn(styles["btn"], styles[`btn--${type}`])} disabled onClick={handler}>
      {text}
    </button>
  );
}
export default Button;
