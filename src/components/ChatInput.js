import React, { useState } from "react";
import "../css/ChatInput.css";
import db, { serverStamp } from "../database/firebase";
import { useStateValue } from "../context/StateProvider";
import firebase from "firebase/compat/app";
function ChatInput({ channelName, channelId }) {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        user: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        userImage: user.photoURL,
      });
    }
    // console.log(firebase.firestore.FieldValue.serverTimestamp());
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Message #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
