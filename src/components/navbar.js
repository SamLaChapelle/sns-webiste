import * as React from "react";
import { styled } from "@mui/material/styles";
import navAxe from "../assets/icons8-axe-47.png";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CollectionsIcon from "@mui/icons-material/Collections";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StorefrontIcon from "@mui/icons-material/Storefront";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  {
    icon: (
      <a href="/#About" className="navLinks">
        <ConnectWithoutContactIcon className="navIcons" />
      </a>
    ),
    name: "Contact",
  },
  {
    icon: (
      <a href="/#Booking" className="navLinks">
        <BookOnlineIcon className="navIcons" />
      </a>
    ),
    name: "Reserve",
  },
  {
    icon: (
      <a href="/#Menu" className="navLinks">
        <MenuBookIcon className="navIcons" />
      </a>
    ),
    name: "Menu",
  },
  {
    icon: (
      <a href="/#Corp" className="navLinks">
        <WorkIcon className="navIcons" />
      </a>
    ),
    name: "Corporate Events",
  },
  {
    icon: (
      <a href="/#League" className="navLinks">
        <EmojiEventsIcon className="navIcons" />
      </a>
    ),
    name: "Leagues",
  },
  {
    icon: (
      <a href="/#MGS" className="navLinks">
        <StorefrontIcon className="navIcons" />
      </a>
    ),
    name: "Merch & Socials",
  },
  {
    icon: (
      <a href="/#Gallery" className="navLinks">
        <CollectionsIcon className="navIcons" />
      </a>
    ),
    name: "Gallery",
  },
];

function NavBar() {
  return (
    <div>
      <StyledSpeedDial
        ariaLabel="SpeedDial playground example"
        icon={<img id="navAxe" src={navAxe} alt="axe"></img>}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </StyledSpeedDial>
    </div>
  );
}

export default NavBar;
