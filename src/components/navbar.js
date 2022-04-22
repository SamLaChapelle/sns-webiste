import * as React from "react";
import { styled } from "@mui/material/styles";
import navAxe from "../assets/icons8-axe-47.png";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

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
  { icon: <ConnectWithoutContactIcon className="navIcons"/>, name: "Contact" },
  { icon: <BookOnlineIcon className="navIcons"/>, name: "Reserve" },
  { icon: <WorkIcon className="navIcons"/>, name:"Corporate Events"},
  { icon: <EmojiEventsIcon className="navIcons"/>, name:"Leagues"},
  { icon: <CollectionsIcon className="navIcons"/>, name: "Gallery" }
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
