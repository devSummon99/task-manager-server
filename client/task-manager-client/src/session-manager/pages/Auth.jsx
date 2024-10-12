//libs
import { useState } from "react";
//components
import "boxicons";
import Register from "../auth/components/Register";
import Login from "../auth/components/Login";
//styles
import "./auth.css";

function Auth() {
  const [classNameUsed, setclassNameUsed] = useState("");

  return (
    <div className={`containerauth` + ` ${classNameUsed}`}>
      <Register
        classNameUsed={classNameUsed}
        setclassNameUsed={setclassNameUsed}
      />
      <Login
        classNameUsed={classNameUsed}
        setclassNameUsed={setclassNameUsed}
      />
    </div>
  );
}
/*

*/
export default Auth;
