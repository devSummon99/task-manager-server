//libs
import { useState } from "react";
//components
import ForgetPassword from "../components/ForgetPassword";
import OTPvalue from "../components/OTPvalue";
//styles
import "./password-recovery.css";


function RecoverForgottenPassword() {
  const [modifyClassName, setModifyClassName] = useState("");

  return (
    <div className={`container` + ` ${modifyClassName}`}>
      <ForgetPassword setModifyClassName={setModifyClassName} />
      <OTPvalue />
    </div>
  );
}

export default RecoverForgottenPassword;
