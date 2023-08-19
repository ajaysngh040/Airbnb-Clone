import React from "react";
import Logo from "../assets/images/airbnb-logo.png";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="search-bar">
        <div className="search-bar-text">Anywhere</div>
        <div className="search-bar-text">Any week</div>
        <div className="search-bar-text2">Add guest </div>
        <div className="search-bar-icon">
          <SearchIcon style={{ fontSize: "1.4rem" }} />
        </div>
      </div>

      <div className="menu-bar">
        <div className="menu-bar-item">
          <p>Airbnb your home</p>
        </div>
        <div className="menu-bar-item">
          <LanguageIcon style={{ fontSize: "1.3rem" }} />
        </div>

        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <div className="menu-bar-item2">
              <div className="hemburger-icon">
                <MenuRoundedIcon style={{ fontSize: "1.4rem" }} />
              </div>
              <div className="user-icon">
                <AccountCircleRoundedIcon style={{ fontSize: "1.8rem" }} />
              </div>
            </div>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
