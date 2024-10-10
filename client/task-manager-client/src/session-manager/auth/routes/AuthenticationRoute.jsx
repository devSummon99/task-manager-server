import { Route } from "react-router-dom";
import Authentication from "../pages/Authentication";

function AuthenticationRoute() {
  return (
 
    <Route path="/auth" element={<Authentication />} />

  )
}

export default AuthenticationRoute;