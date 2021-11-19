import classes from "./taskCard.module.scss";

export default function TaskCard(props) {
  const { title, project, created, description } = props;

  return (
    <div className={classes.taskCard}>
      <div className={classes.taskCard__title}>{title ? title : "-"}</div>
      <div className={classes.taskCard__project}>{project ? project : "-"}</div>
      <div className={classes.taskCard__time}>
        <div className={classes.taskCard__time_created}>
          Created : {created}
        </div>
        <div className={classes.taskCard__time_started}>Started : </div>
        <div className={classes.taskCard__time_finished}>Finished : </div>
      </div>
      <div className={classes.taskCard__description}>
        {description ? description : "-"}
      </div>
    </div>
  );
}
