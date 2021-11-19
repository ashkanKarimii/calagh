import React, { useState } from "react";

import getAllActivities from "../helpers/getAllActivities";
import addNewActivity from "../helpers/addNewActivity";

var ls = require("local-storage"); // MODULE FOR STORE DATA IN LOCAL

const ActivitiesContext = React.createContext({
  allActivities: false,
  updateActivities: (activities) => {},
  clearStorage: () => {},
});

export const ActivitiesContextProvider = (props) => {
  const activities = getAllActivities("allActivities");

  const [tasks, setTasks] = useState(activities);

  function onUpdate(activities) {
    addNewActivity("allActivities", activities);
    setTasks(ls.get("allActivities"));
  }

  function onClearStorage() {
    ls.clear();
    setTasks(getAllActivities("allActivities"));
  }

  return (
    <ActivitiesContext.Provider
      value={{
        allActivities: tasks,
        updateActivities: onUpdate,
        clearStorage: onClearStorage,
      }}
    >
      {props.children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesContext;
