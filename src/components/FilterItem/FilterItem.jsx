import cn from "classnames";
import styles from "./filterItem.module.scss";

function FilterItem({ active, text, handler }) {
  return <span className={cn(styles["filter-item"], active ? styles["filter-item--active"] : "")} onClick={() => handler(text)}>{text}</span>;
}
export default FilterItem;
