import Button from "../Button/Button";
import styles from "./createTaskForm.module.scss";
import cn from "classnames";

function CreateTaskForm() {
  return (
    <form className={cn(styles["create-task-form"])}>
      <input className={cn(styles["create-task-form__input"])} placeholder="title"></input>
      <input className={cn(styles["create-task-form__input"])} placeholder="description"></input>
      <input className={cn(styles["create-task-form__input"])} placeholder="category"></input>
      <Button text="Add Task" type="primary" handler={() => {}} />
    </form>
  );
}

export default CreateTaskForm;
