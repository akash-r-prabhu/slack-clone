import React from "react";
import "../css/Login.css";
import firebase from "../database/firebase";
import Button from "@mui/material/Button";
function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png"
          alt="slack_logo"
        />
        <h1>Sign in to Slack Clone</h1>
        <p>slackclone.com</p>
        <Button className="button"> Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
