import TaskCard from "../../components/card/taskCard/taskCard";

import { useContext } from "react";

import classes from "./taskList.module.scss";

import ActivitiesContext from "../../context/activitiesContext";

export default function TaskList() {
  const ctx = useContext(ActivitiesContext);

  if (!ctx.allActivities?.length) {
    return (
      <div className={classes.taskList}>
        <p className={classes.taskList__empty}>No any task added yet !</p>
      </div>
    );
  }

  return (
    <div className={classes.taskList}>
      <div className={classes.taskList__header}>
        <p>Title</p>
        <p>Project</p>
        <p>Time</p>
        <p>Description</p>
      </div>
      {ctx.allActivities &&
        ctx.allActivities.map((task) => {
          return (
            <TaskCard
              key={task.id}
              title={task.title}
              project={task.project}
              created={task.created}
              description={task.description}
            />
          );
        })}
    </div>
  );
}
