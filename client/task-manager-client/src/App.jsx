import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import TaskManagerRoute from "./task-manager/routes/TaskManagerRoute";
import Header from "./task-manager/components/Header";
//import AuthenticationRoute from "./session-manager/auth/routes/AuthenticationRoute";

function App() {
  return (
    <Router>
     <Header/>
       
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