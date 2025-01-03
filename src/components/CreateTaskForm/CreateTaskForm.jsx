import Button from "../Button/Button";
import styles from "./createTaskForm.module.scss";
import cn from "classnames";
import shortid from "shortid";

function CreateTaskForm({handler}) {

  const submitHandler = (event) => {
    event.preventDefault();
    const formObj = new FormData(event.target);

    const arrPairs = Array.from(formObj);
    //      0          1               0                1
    // [['title', 'any title'], ['description', 'any description'], ...]

    // {
    //   title: 'any title',
    //   description: 'any description'
    // }

    const taskData = arrPairs.reduce((acc, pair) => {
      acc[pair[0]] = pair[1];
      return acc;
    }, {id: shortid.generate() });

    event.target.reset()

    // отправили данные в backetList
    handler(taskData)
  };

  /* 
  
  форма
  1.  жмем на кнопку Add Task
  2. onSubmit
  3. submitHandler
  4. event
  5. создаем объект от класса FormData чтобы поучить все данные разом (в FormData передаем ссылку на форму)
  6. данные у нас formObj
  
  */

  return (
    <form className={cn(styles["create-task-form"])} method="post" action="#" onSubmit={submitHandler}>
      <input className={cn(styles["create-task-form__input"])} placeholder="title" name="title"></input>
      <input className={cn(styles["create-task-form__input"])} placeholder="description" name="desc"></input>
      <input className={cn(styles["create-task-form__input"])} placeholder="category" name="category"></input>
      <Button text="Add Task" type="primary" handler={() => {}} />
    </form>
  );
}

export default CreateTaskForm;
