import GoogleLogin from "react-google-login";

const NavBar = ({ user, login, logout, failure }) => {
  return (
    <nav>
      <h1>React Google Login</h1>

      {user ? (
        <div>
          <h3>You logged in as {user.email}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={login}
          onFailure={failure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      )}
    </nav>
  );
};

export default NavBar;
