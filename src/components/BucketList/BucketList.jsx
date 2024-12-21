import Filter from "../Filter/Filter";
import cn from "classnames";
import styles from "./bucketList.module.scss";
import data from "../../data.js";
import Task from "../Task/Task.jsx";
import { useEffect, useState, useMemo } from "react";
import Button from "../Button/Button.jsx";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm.jsx";

function BucketList() {
  const [tasks, setTasks] = useState([]);
  const [currentFilterCategory, setcurrentFilterCategory] = useState("All");
  const [isActiveCreateTaskForm, setIsActiveCreateTaskForm] = useState(false)

  // продолжить посылать handler в filter
  const currentFilterCategoryHandler = (newCategory) => {
    setcurrentFilterCategory(newCategory);
  };

  const addTaskHandler = (object) => {
    setTasks([...tasks, object]);
    setIsActiveCreateTaskForm(false)
  }

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
      <header className="bucket-list__header">
        <span className="bucket-list__total">total tasks: {tasks.length}</span>
      </header>
      <main className={cn(styles["bucket-list__main"])}>
        <div className={cn(styles["bucket-list__filter"])}>
          <Filter categories={memoCategories} currentFilterCategory={currentFilterCategory} handler={currentFilterCategoryHandler} />
        </div>
        <div className={cn(styles["bucket-list__content"])}>{memoTasks.length > 0 ? memoTasks : "Tasks are not found"}</div>
        <footer className={cn(styles["bucket-list__footer"])}>
          <Button text="Create Task" type="primary" handler={() => setIsActiveCreateTaskForm(!isActiveCreateTaskForm)} />

          {isActiveCreateTaskForm === true ? <CreateTaskForm handler={addTaskHandler} /> : null}
        </footer>
      </main>
    </div>
  );
}

export default BucketList;
