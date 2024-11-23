import FilterItem from "../FilterItem/FilterItem";
import cn from "classnames";
import styles from "./filter.module.scss";

function Filter({categories}) {
  return (
    <div className={cn(styles["filter"])}>
     {
        categories.map((category, i) => {
            return <FilterItem text={category} key={i}/>
        })
     }
    </div>
  );
}
export default Filter;
