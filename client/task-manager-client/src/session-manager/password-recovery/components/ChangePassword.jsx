/* eslint-disable react/no-unknown-property */
//libs

//components

//styles
import "./change.css";

function ChangePassword() {
  return (
    <div className="container-box">
    <h2>Change Password</h2>
    <form>
        <div className="form-group">
            <label for="new-password">New password</label>
            <input type="password" id="new-password" name="new-password"/>
        </div>
        <div className="form-group">
            <label for="confirm-password">Confirm new password</label>
            <input type="password" id="confirm-password" name="confirm-password"/>
        </div>
        <button type="submit" className="btn">Submit</button>
    </form>
</div>
  );
}

export default ChangePassword;
