function FilterItem({active, text}){
    return <span className="filter-item">{text}</span>;
    // active === true ? "filter-item--active" : ""
}
export default FilterItem;