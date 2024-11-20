function Task({title, desc}){
    return (
        <article className="task">
          <h3 className="task__title">{title}</h3>
          <p className="task__desc">{desc}</p>
        </article>
    );
}
export default Task;