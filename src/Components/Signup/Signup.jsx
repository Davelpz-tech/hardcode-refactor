import "./Signup.scss";

function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1>Signup</h1>
        <div className="form-fields">
          <label htmlFor="username">Username:</label>
          <input type="text" />
        </div>
        <div className="form-fields">
          <label htmlFor="email">Email:</label>
          <input type="text" />
        </div>
        <div className="form-fields">
          <label htmlFor="password">Password:</label>
          <input type="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
