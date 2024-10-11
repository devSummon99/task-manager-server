import { Route } from "react-router-dom";
import Auth from "../pages/Auth";

function AuthRoute() {
  return (
 
    <Route path="/auth" element={<Auth />} />

  )
}

export default AuthRoute;