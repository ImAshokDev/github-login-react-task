import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../App";
import "./Styles/Home.scss";
import GithubRepos from "./GithubRepos";

export default function Home() {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const { login, avatar_url, name, public_repos } = state.user;

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div className="home-container">
      <button onClick={() => handleLogout()}>Logout</button>

      <div className="content-block">
        <img src={avatar_url} alt="Avatar" />
        <h1>{login}</h1>
        <h3>{name}</h3>
        <h5>
          <b>Repositories: </b> {public_repos}{" "}
        </h5>

        <h6>Top ten Repositories:</h6>

        <GithubRepos username={login} />
      </div>
    </div>
  );
}
