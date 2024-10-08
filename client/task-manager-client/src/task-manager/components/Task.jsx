//libs
//import { useEffect } from 'react';
//components

//styles
import "./task.css";

const Task = () => {
  return (
    <nav className="nav">
      <a href="#" className="task">
        Tasks
      </a>
      <ul className="nav_menu">
        <li className="mav_item">
          <a href="#" className="nav_link">
            All Tasks
          </a>
        </li>
        <li className="mav_item">
          <a href="#" className="nav_link">
            Pending Tasks
          </a>
        </li>
        <li className="mav_item">
          <a href="#" className="nav_link">
            Complete
          </a>
        </li>
        <li className="mav_item">
          <a href="#" className="nav_link">
            Descriptions
          </a>
        </li>
        <li className="mav_item">
          <a href="#" className="nav_link">
            Deleted
          </a>
        </li>
      </ul>
      <div className="nav_toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Task;
