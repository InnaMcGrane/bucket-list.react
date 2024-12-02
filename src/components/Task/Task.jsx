import cn from "classnames";
import styles from "./task.module.scss"
import Button from "../Button/Button";

function Task({ title, desc }) {
  return (
    <article className={cn(styles["task"])}>
      <h3 className={cn(styles["task__title"])}>{title}</h3>
      <p className={cn(styles["task__desc"])}>{desc}</p>
      <div className={cn(styles["task__control"])}>
        <Button text="Remove" type="remove" handler={() => console.log("remove")} />
        <Button text="Favorite" type="favorite" handler={() => console.log("favorite")} />
        <Button text="Done" type="done" handler={() => console.log("done")} />
      </div>
    </article>
  );
}
export default Task;
