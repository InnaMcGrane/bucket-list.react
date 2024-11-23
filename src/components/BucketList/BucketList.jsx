import Filter from "../Filter/Filter";
import cn from "classnames";
import styles from "./bucketList.module.scss";
import data from '../../data.js';
import Task from "../Task/Task.jsx";
import { useEffect, useState } from "react";

function BucketList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([...data])
  }, [])
  
  return (
    <div className={cn(styles["bucket-list"])}>
      <main className={cn(styles["bucket-list__main"])}>
        <div className={cn(styles["bucket-list__filter"])}>
          <Filter />
        </div>
        <div className={cn(styles["bucket-list__content"])}>
          {
            data.map((el) => {
            return <Task title={el.title} desc={el.desc} key={el.id}/>
            })
          }
        </div>
      </main>
    </div>
  );
}

export default BucketList;
