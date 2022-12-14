import { IosShare } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/SidebarOption.css";
import db from "../database/firebase";
function SidebarOption({ Icon, title, id, addChannelOption }) {
  let navigate = useNavigate();
  const selectChannel = () => {
    if (id) {
      // history.push(`/room/${id}`);
      navigate(`/room/${id}`, { replace: true });
    } else {
      navigate(`/room`, { replace: true });
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
