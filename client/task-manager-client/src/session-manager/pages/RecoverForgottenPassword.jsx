//libs
import { useState } from "react";
//components
import ForgetPassword from "../password-recovery/components/ForgetPassword";
import OTPvalue from "../password-recovery/components/OTPvalue";
//styles
import "./password-recovery.css";


function RecoverForgottenPassword() {
  const [modifyClassName, setModifyClassName] = useState(" ");

  return (
    <div className={`containerpass` + ` ${modifyClassName}`}>
      <ForgetPassword setModifyClassName={setModifyClassName} />
      <OTPvalue />
    </div>
  );
}

export default RecoverForgottenPassword;
