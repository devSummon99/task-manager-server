import { Route, Routes, } from "react-router-dom";
import Auth from "../auth/pages/Auth";

function AuthRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  );
}

export default AuthRoute;
