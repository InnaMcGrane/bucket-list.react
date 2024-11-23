import FilterItem from "../FilterItem/FilterItem";
import cn from "classnames";


function Filter() {
    return (
      <div className="filter">
        <FilterItem active text="All" />
        <FilterItem active text="home" />
      </div>
    );
}
export default Filter;