import Filter from "../Filter/Filter";
import cn from "classnames";
import styles from "./bucketList.module.scss";
import data from "../../data.js";
import Task from "../Task/Task.jsx";
import { useEffect, useState, useMemo } from "react";

function BucketList() {
  const [tasks, setTasks] = useState([]);
  const [currentFilterCategory, setcurrentFilterCategory] = useState("All");

  // продолжить посылать handler в filter
  const currentFilterCategoryHandler = (newCategory) => {
    setcurrentFilterCategory(newCategory);
  };

  useEffect(() => {
    setTasks([...data]);
  }, []);

  const getCategories = () => {
    console.log("call getCategories func");
    const arr = tasks.reduce(
      (acc, el) => {
        return [...acc, el.category];
      },
      ["All"]
    );
    return Array.from(new Set(arr));
  };

  const memoCategories = useMemo(() => getCategories(), [tasks]);

  const generateTasks = () => {
    if (currentFilterCategory === "All") {
      return tasks.map((el) => <Task title={el.title} desc={el.desc} key={el.id} />);
    }

    return tasks.filter((task) => task.category === currentFilterCategory).map((el) => <Task title={el.title} desc={el.desc} key={el.id} />);
  };

  const memoTasks = useMemo(() => generateTasks(), [currentFilterCategory, tasks]);

  return (
    <div className={cn(styles["bucket-list"])}>
      <main className={cn(styles["bucket-list__main"])}>
        <div className={cn(styles["bucket-list__filter"])}>
          <Filter categories={memoCategories} currentFilterCategory={currentFilterCategory} handler={currentFilterCategoryHandler} />
        </div>
        <div className={cn(styles["bucket-list__content"])}>{memoTasks}</div>
      </main>
    </div>
  );
}

export default BucketList;
