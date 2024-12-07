import cn from "classnames";
import styles from "./task.module.scss"
import Button from "../Button/Button";
import { useState } from "react";


function Task({ id, title, desc, removeTaskHandler }) {
  const [done, setDone] = useState(false);
  const [favorite, setFavorite] = useState(false)

  return (
    <article className={cn(styles["task"], done === true ? styles["task--done"] : "", favorite === true ? styles["task--favorite"] : "")}>
      <h3 className={cn(styles["task__title"])}>{title}</h3>
      <p className={cn(styles["task__desc"])}>{desc}</p>
      <div className={cn(styles["task__control"])}>
        <Button text="Remove" type="remove" handler={() => removeTaskHandler(id)} />
        <Button text={favorite === true ? "unfavorite" : "favorite"} type="favorite" handler={() => setFavorite(!favorite)} />
        <Button text={done === true ? "undone" : "done"} type="done" handler={() => setDone(!done)} />
      </div>
    </article>
  );
}
export default Task;
