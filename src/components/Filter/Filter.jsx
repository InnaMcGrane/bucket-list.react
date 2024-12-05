import FilterItem from "../FilterItem/FilterItem";
import cn from "classnames";
import styles from "./filter.module.scss";

function Filter({ categories, currentFilterCategory, handler }) {
  return (
    <div className={cn(styles["filter"])}>
      {categories.map((category, i) => {
        return <FilterItem text={category} key={i} active={currentFilterCategory === category ? true : false} handler={handler} />;
      })}
    </div>
  );
}
export default Filter;
