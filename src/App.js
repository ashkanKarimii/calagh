import classes from "./App.module.scss";

import TaskList from "./layout/taskList/taskList";
import TaskForm from "./components/form/taskForm/taskForm";

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <TaskForm />
      </div>
      <div className={classes.taskList}>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
