//libs
import { useState } from "react";
//components

//styles
import "./task.css";

const Task = () => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler")

  const handleNavToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

      toggleIcon === "nav_toggler" ? setToggleIcon("nav_toggler toggle") : setToggleIcon("nav_toggler")
  };

  return (
    <nav className="nav">
      <a href="#" className="link-task">
        Tasks
      </a>
      <ul className={active}>
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
      <div onClick={handleNavToggle} className={toggleIcon}>
     <div className="container-lineal">
     <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
     </div>
      </div>
    </nav>
  );
};

export default Task;
