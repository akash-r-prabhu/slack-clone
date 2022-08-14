import React, { useState, useEffect } from "react";
import "../css/Chat.css";
import { StarBorderOutlined, InfoOutlined } from "@mui/icons-material";
import db from "../database/firebase";
import { Routes, Route, useParams } from "react-router-dom";
import Message from "./Message";
function Chat() {
  let { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
    }
  }, [roomId]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setRoomMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(
          (message) => (
            <Message
              user={message.user}
              timestamp={message.timestamp}
              userImage={message.userImage}
              message={message.message}
            />
          )
          // console.log(message)
        )}
      </div>
    </div>
  );
}

export default Chat;
