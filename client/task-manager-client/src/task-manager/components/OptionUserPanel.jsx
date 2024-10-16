//libs

//components

//styles

function OptionUserPanel() {
  return (
    <div className="dropdown">
      <img alt="User profile picture" height="40" src="user.jpg" width="40" />
      <div className="dropdown-content">
        <a href="#">
          <i className="fas fa-sign-out-alt"></i>
          Log Out
        </a>
      </div>
    </div>
  );
}

export default OptionUserPanel;
