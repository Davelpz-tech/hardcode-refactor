import "./Login.scss";

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Login</h1>
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

export default Login;
