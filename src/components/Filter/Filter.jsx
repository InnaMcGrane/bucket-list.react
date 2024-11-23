import FilterItem from "../FilterItem/FilterItem";
import cn from "classnames";
import styles from "./filter.module.scss";

function Filter() {
  return (
    <div className={cn(styles["filter"])}>
      <FilterItem active text="All" />
      <FilterItem text="home" />
    </div>
  );
}
export default Filter;
