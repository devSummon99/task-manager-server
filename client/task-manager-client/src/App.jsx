//libs
//import { useState } from "react";
import { BrowserRouter as Router,  } from "react-router-dom";
//components
import TaskManagerRoute from "./task-manager/routes/TaskManagerRoute";
//styles
import "./App.css";
//

function App() {
  return (

    <Router>
      <TaskManagerRoute />
    </Router>

  );
}
export default App;
/**
 * 
    import AuthRoutes from "./session-manager/routes/AuthRoutes";
import ChangeForgottenPassword from "./session-manager/pages/ChangeForgottenPassword";
import RecoverForgottenPassword from "./session-manager/pages/RecoverForgottenPassword";
import Auth from "./session-manager/pages/Auth";

import CompletedTasks from "./task-manager/pages/CompletedTasks";
import DeletedTasks from "./task-manager/pages/DeletedTasks";
import PendingTasks from "./task-manager/pages/PendingTasks";
import AllTasks from "./task-manager/pages/AllTasks";

 */
