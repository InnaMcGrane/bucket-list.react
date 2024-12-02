import Filter from "../Filter/Filter";
import cn from "classnames";
import styles from "./bucketList.module.scss";
import data from "../../data.js";
import Task from "../Task/Task.jsx";
import { useEffect, useState, useMemo } from "react";

function BucketList() {
  const [tasks, setTasks] = useState([]);
  const [curruntFilterCategory, setCurruntFilterCategory] = useState("All");

  // продолжить посылать handler в filter
  const curruntFilterCategoryHandler = (newCategory) => {
    setCurruntFilterCategory(newCategory);
  }

  // 00^00^14

  // useMemo(() => {return 1 + 1}, []);
  // useMemo(() => {return 2 + 1}, [curruntFilterCategory]);
  // useMemo(() => {return 2 + 2}, [tasks]);
  // useMemo(() => {return 2 + 3}, [curruntFilterCategory, tasks]);
  // useMemo(() => {return 5}, [timer]);

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
    if (curruntFilterCategory === "All") {
      return tasks.map((el) => <Task title={el.title} desc={el.desc} key={el.id} />);
    }

    return tasks.filter((task) => task.category === curruntFilterCategory).map((el) => <Task title={el.title} desc={el.desc} key={el.id} />);
  };
  
  const memoTasks = useMemo(() => generateTasks(), [curruntFilterCategory, tasks]);

  return (
    <div className={cn(styles["bucket-list"])}>
      <main className={cn(styles["bucket-list__main"])}>
        <div className={cn(styles["bucket-list__filter"])}>
          <Filter categories={memoCategories} curruntFilterCategory={curruntFilterCategory} handler={curruntFilterCategoryHandler} />
        </div>
        <div className={cn(styles["bucket-list__content"])}>{memoTasks}</div>
      </main>
    </div>
  );
}

export default BucketList;
