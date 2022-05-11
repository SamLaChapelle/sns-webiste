import * as React from "react";
import CollectionsIcon from "@mui/icons-material/Collections";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";


function NavBar() {

  return (
    <div id="navBar">
      <a href="/#Home" className="navLinks">
        <HomeIcon className="navIcons" />
      </a>
      <a href="/#About" className="navLinks">
        <ConnectWithoutContactIcon className="navIcons" />
      </a>
      <a href="/#Booking" className="navLinks">
        <BookOnlineIcon className="navIcons" />
      </a>
      <a href="/#Menu" className="navLinks">
        <MenuBookIcon className="navIcons" />
      </a>
      <a href="/#Corp" className="navLinks">
        <WorkIcon className="navIcons" />
      </a>
      <a href="/#League" className="navLinks">
        <EmojiEventsIcon className="navIcons" />
      </a>
      <a href="/#MGS" className="navLinks">
        <StorefrontIcon className="navIcons" />
      </a>
      <a href="/#Gallery" className="navLinks">
        <CollectionsIcon className="navIcons" />
      </a>
    </div>
  );
}

export default NavBar;
