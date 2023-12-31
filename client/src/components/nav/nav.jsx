import styles from "./nav.module.css";
import BedIcon from "@mui/icons-material/Bed";
import PersonIcon from "@mui/icons-material/Person";
import { Button, styled } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
const Nav = () => {
  //   const MenuListItemIcon = styled(ListItemIcon)({
  //     color: "#fff",
  //   });
  const options = [
    // <Link to={"in"}>Sing-in</Link>,
    // <Link to={"up"}>Sing-up</Link>,
    { link: "in", item: "Sign-in" },
    { link: "up", item: "Sign-up" },
  ];

  const ITEM_HEIGHT = 48;
  const ButtonForm = styled(Button)({
    color: "#fff",
    fontSize: "14px",
    fontFamily: "Roboto Condensed",
    // fontWeight: 40,
    textTransform: "uppercase",
    lineHeight: "38.40px",
    wordWrap: "break-word",
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.fixe}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <h1>onepirate</h1>
        </div>
      </Link>
      <header>
        <div className={styles.Nav}>
          <div className={styles.icq}>
            <IconButton
              style={{
                position: "fixed",
              }}
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon
                sx={{
                  color: "#fff",
                }}
              />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <Link to={option.link}>
                  <MenuItem
                    key={option.item}
                    selected={option.item === "Pyxis"}
                    onClick={handleClose}
                  >
                    {option.item}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </div>
          <div className={styles.escr}>
            <Link to={"hos"}>
              {" "}
              <ButtonForm startIcon={<BedIcon />}>Hospedagens</ButtonForm>
            </Link>
            <Link to={"voos"}>
              {" "}
              <ButtonForm startIcon={<FlightTakeoffIcon />}>Voos</ButtonForm>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
