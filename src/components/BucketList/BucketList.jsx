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

  const removeTaskHandler = (id) => {
    const filteredTasks = tasks.filter((el) => el.id !== id);
    setTasks(filteredTasks);
  };

  useEffect(() => {
    setTasks([...data]);
  }, []);

  const getCategories = () => {
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
      return tasks.map((el) => <Task id={el.id}title={el.title} desc={el.desc} key={el.id} removeTaskHandler={removeTaskHandler} />);
    }

    return tasks
      .filter((task) => task.category === currentFilterCategory)
      .map((el) => <Task id={el.id} title={el.title} desc={el.desc} key={el.id} removeTaskHandler={removeTaskHandler} />);
  };

  const memoTasks = useMemo(() => generateTasks(), [currentFilterCategory, tasks]);

  return (
    <div className={cn(styles["bucket-list"])}>
      <main className={cn(styles["bucket-list__main"])}>
        <div className={cn(styles["bucket-list__filter"])}>
          <Filter categories={memoCategories} currentFilterCategory={currentFilterCategory} handler={currentFilterCategoryHandler} />
        </div>
        <div className={cn(styles["bucket-list__content"])}>{memoTasks.length > 0 ? memoTasks : "Tasks are not found"}</div>
      </main>
    </div>
  );
}

export default BucketList;
