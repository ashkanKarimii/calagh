import classes from "./taskForm.module.scss";

import { useRef, useContext } from "react";

import ActivitiesContext from "../../../context/activitiesContext";
import uId from "../../../helpers/uId";

export default function TaskForm() {
  const ctx = useContext(ActivitiesContext);

  const allActivities = ctx.allActivities;

  if (!allActivities) {
    ctx.updateActivities(("allActivities", [])); //SET DEFAULT VALUE TO STORAGE IF STORAGE IS EMPTY
  }

  const titleInputRef = useRef();
  const projectInputRef = useRef();
  const descriptionInputRef = useRef();

  //CREAT NEW TASK HANDLER
  function createTask(e) {
    e.preventDefault();

    var date = new Date();

    var minutes = date.getMinutes();
    var hour = date.getHours();

    let task = {};
    const enteredTitle = titleInputRef.current.value;
    const enteredProject = projectInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    task.id = uId(); //GENERATE UNIQUE ID
    task.created = `${hour}:${minutes}`;
    task.title = enteredTitle;
    task.project = enteredProject;
    task.description = enteredDescription;

    allActivities.push(task);

    ctx.updateActivities(allActivities); //SEND NEW TASKS TO STIRAGE
  }

  //CLEARS LOCAL STORAGE
  function clearStorage(e) {
    e.preventDefault();
    ctx.clearStorage();
  }

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <input type="text" placeholder="Title" ref={titleInputRef}></input>
        <input type="text" placeholder="Project" ref={projectInputRef}></input>
        <input
          type="text"
          placeholder="Description"
          ref={descriptionInputRef}
        ></input>

        <button onClick={createTask}>Create</button>
        <p onClick={clearStorage} className={classes.form__clearStoarge}>
          Empty Storage
        </p>
      </form>
    </div>
  );
}
