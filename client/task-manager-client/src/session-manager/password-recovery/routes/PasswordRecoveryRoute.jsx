import { Route, Routes } from "react-router-dom";
import ChangeForgottenPassword from "../pages/ChangeForgottenPassword";
import RecoverForgottenPassword from "../pages/RecoverForgottenPassword";

function PasswordRecoveryRoute() {
  return (
    <Routes>
      <Route path="/changepassword" element={<ChangeForgottenPassword />} />
      <Route path="/recoverypassword" element={<RecoverForgottenPassword />} />
    </Routes>
  );
}

export default PasswordRecoveryRoute;
