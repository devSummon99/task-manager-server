//libs
import { useState } from "react";
//components
import ForgetPassword from "./ForgetPassword";
import OTPvalue from "./OTPvalue";
//styles
import "./password-recovery.css";


function PasswordRecovery() {
  const [modifyClassName, setModifyClassName] = useState("");

  return (
    <div className={`container` + ` ${modifyClassName}`}>
      <ForgetPassword setModifyClassName={setModifyClassName} />
      <OTPvalue />
    </div>
  );
}

export default PasswordRecovery;
