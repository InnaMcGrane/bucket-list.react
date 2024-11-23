import cn from "classnames";
import styles from "./task.module.scss"

function Task({ title, desc }) {
  return (
    <article className={cn(styles["task"])}>
      <h3 className={cn(styles["task__title"])}>{title}</h3>
      <p className={cn(styles["task__desc"])}>{desc}</p>
    </article>
  );
}
export default Task;
