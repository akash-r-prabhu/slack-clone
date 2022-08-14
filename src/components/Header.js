import React from "react";
import "../css/Header.css";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* avatar for logged in user */}
        <Avatar src="" alt="akash" />
        <AccessTimeIcon />
        {/* time icon */}
      </div>
      <div className="header__search">
        {/* header search */}
        <SearchIcon />
        <input type="text" placeholder="Search ...."></input>
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpIcon />
      </div>
    </div>
  );
}

export default Header;
