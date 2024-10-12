import { Route, Routes } from "react-router-dom";
import ChangeForgottenPassword from "../pages/ChangeForgottenPassword";
import RecoverForgottenPassword from "../pages/RecoverForgottenPassword";
import Auth from "../pages/Auth";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/auth/changepassword"
        element={<ChangeForgottenPassword />}
      />
      <Route
        path="/auth/recoverypassword"
        element={<RecoverForgottenPassword />}
      />
    </Routes>
  );
}

export default AuthRoutes;
