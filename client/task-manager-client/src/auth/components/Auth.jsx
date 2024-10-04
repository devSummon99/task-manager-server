//libs
//import { useState } from "react";
//components
import "boxicons";
//import Register from "./Register";
//import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import ChangePassword from "./ChangePassword";
//styles
import "./auth.css";



function Auth() {
 
//const [classNameUsed, setclassNameUsed] = useState('');


  return (
 <>
  <ForgetPassword />
  <ChangePassword />
 </>
  
    
  );
}
/*
    <div className={`container`+ ` ${classNameUsed}`}>
      <Register classNameUsed = {classNameUsed} setclassNameUsed = {setclassNameUsed}/>
      <Login  classNameUsed = {classNameUsed} setclassNameUsed = {setclassNameUsed}/>
    </div>
*/
export default Auth;
