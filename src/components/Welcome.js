import React from "react";
import "../css/Welcome.css";
import Message from "./Message";
function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__text">
        <h3>Akash has left you a welcome note</h3>
        <br />

        <Message
          className="welcome__message"
          userImage="https://avatars.githubusercontent.com/u/73175408?s=400&u=e2a6da3e6f76d93f41f4b11d88f1d2b38596a20f&v=4"
          message="Hey there Welcome to Slack Clone ! Try chatting in any of the channels"
          user="Akash"
        />
      </div>
    </div>
  );
}

export default Welcome;
