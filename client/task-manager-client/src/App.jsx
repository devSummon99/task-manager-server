import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import TaskManagerRoute from "./task-manager/routes/TaskManagerRoute";
import Task from "./task-manager/components/Task";
//import AuthenticationRoute from "./session-manager/auth/routes/AuthenticationRoute";

function App() {
  return (
    <Router>
      <header>
      <Task />
      </header>
       
        <TaskManagerRoute />
      </Router>
  );
}
export default App;
/**
 * 
      <Router>  
        <AuthenticationRoute />
      </Router>
 */