import cn from "classnames";
import styles from "./filterItem.module.scss";

function FilterItem({ active, text }) {
  return <span className={cn(styles["filter-item"], active ? styles["filter-item--active"] : "")}>{text}</span>;
}
export default FilterItem;
