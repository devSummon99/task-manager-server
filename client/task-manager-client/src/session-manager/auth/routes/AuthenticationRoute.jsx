import { Routes, Route } from "react-router-dom";
import Authentication from "../pages/Authentication";

function AuthenticationRoute() {
  return (
    <Routes>
    <Route path="/auth" element={<Authentication />} />
    </Routes>
  )
}

export default AuthenticationRoute;