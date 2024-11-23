import Filter from "../Filter/Filter";
import cn from "classnames";
import styles from "./bucketList.module.scss";
import data from '../../data.js';
import Task from "../Task/Task.jsx";
import { useEffect, useState } from "react";

function BucketList() {
  const [tasks, setTasks] = useState([]);
  const [curruntFilterCategory, setCurruntFilterCategory] = useState('All')

  useEffect(() => {
    setTasks([...data])
  }, [])
  
    const getCategories = () => {
    const arr = tasks.reduce(
      (acc, el) => {
        return [...acc, el.category];
      },
      ["All"]
    );
    return Array.from(new Set(arr));
  }

  return (
    <div className={cn(styles["bucket-list"])}>
      <main className={cn(styles["bucket-list__main"])}>
        <div className={cn(styles["bucket-list__filter"])}>
          <Filter categories={getCategories()}/>
        </div>
        <div className={cn(styles["bucket-list__content"])}>
          {
            tasks.map((el) => {
            return <Task title={el.title} desc={el.desc} key={el.id}/>
            })
          }
        </div>
      </main>
    </div>
  );
}

export default BucketList;
