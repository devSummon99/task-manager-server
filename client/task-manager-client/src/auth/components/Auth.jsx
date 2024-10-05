//libs
//import { useState } from "react";
//components
import "boxicons";
//import Register from "./Register";
//import Login from "./Login";
//import ForgetPassword from "./ForgetPassword";
import ChangePassword from "./ChangePassword";
//import OTPvalue from "./OTPvalue";
//styles
//import "./auth.css";




function Auth() {
 
//const [classNameUsed, setclassNameUsed] = useState('');


  return (
 <>
  <ChangePassword />
 </>
  
    
  );
}
/*
    <div className={`container`+ ` ${classNameUsed}`}>
      <Register classNameUsed = {classNameUsed} setclassNameUsed = {setclassNameUsed}/>
      <Login  classNameUsed = {classNameUsed} setclassNameUsed = {setclassNameUsed}/>
    </div>
     

  <OTPvalue/>
   <ForgetPassword />
*/
export default Auth;
