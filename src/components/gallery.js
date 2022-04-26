import React from "react";
import ninjaPackPic from "../assets/IMG_2643.png";
import axePic1 from "../assets/IMG_2646.png";
import axeShovPic from "../assets/IMG_2647.png";
import spearHelmPic from "../assets/IMG_2650.png";
import swordShieldPic from "../assets/IMG_2651.png";
import merchDisplayPic from "../assets/IMG_2653.png";
import snsWoodPic from "../assets/IMG_2654.png";
import axePitPic from "../assets/IMG_2656.png";
import axeGameSheetPic from "../assets/IMG_2657.png";
import storePic1 from "../assets/IMG_2659.png";
import storePic2 from "../assets/IMG_2660.png";
import storePic3 from "../assets/IMG_2661.png";
import snsTshirtPic1 from "../assets/IMG_2663.png";
import snsTshirtPic2 from "../assets/IMG_2665.png";
import snsHoodiePic from "../assets/IMG_2667.png";
import entSignPic from "../assets/IMG_2669.png";
import snsPriceSignPic from "../assets/IMG_2670.png";
import drinksPic from "../assets/IMG_2672.png";
import knifeDisplayPic from "../assets/IMG_2676 2.png";
import targetPointsPic from "../assets/IMG_2677.png";
import hostStandPic from "../assets/IMG_2678.png";
import menuPic from "../assets/SNS MENU.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Gallery() {
  const itemData = [
    {
      img: spearHelmPic,
      title: "Spear and Helmets",
      cols: 3,
      rows: 2,
    },
    {
      img: ninjaPackPic,
      title: "Ninja Pack",
      rows: 1,
      cols: 1,
    },
    {
      img: axePic1,
      title: "Axes",
    },
    {
      img: axeShovPic,
      title: "Axes and Combat Shovel",
    },
    {
      img: drinksPic,
      title: "Nonalcoholic and Alcoholic Drinks",
      cols: 3,
    },
    {
      img: swordShieldPic,
      title: "Sword and Shield Display",
      rows: 2,
      cols: 2,
    },
    {
      img: snsWoodPic,
      title: "Shield and Sheath Wood Log",
    },
    {
      img: axePitPic,
      title: "Axe throwing pit lanes",
    },
    {
      img: merchDisplayPic,
      title: "Shield and Sheath Merch Display",
      rows: 2,
      cols: 2,
    },
    {
      img: axeGameSheetPic,
      title: "Axe Game Sheet",
    },
    {
      img: entSignPic,
      title: "Entrance Sign",
    },
    {
      img: knifeDisplayPic,
      title: "Knife Display Case",
      cols: 3,
    },
    {
      img: snsTshirtPic1,
      title: "Shield N Sheath Micael Myers T-Shirt",
    },
    {
      img: snsTshirtPic2,
      title: "Shield N Sheath T-Shirt",
    },
    {
      img: snsHoodiePic,
      title: "Shield N Sheath Hoodie",
    },
    {
      img: storePic1,
      title: "Shield N Sheath Store Right",
      cols: 2,
    },
    {
      img: menuPic,
      title: "Shield N Sheath Menu",
    },
    {
      img: snsPriceSignPic,
      title: "Shield N Sheath Axe Throwing Prices Sign",
    },
    {
      img: storePic2,
      title: "Shield N Sheath Store Middle",
      cols: 2,
    },
    {
      img: targetPointsPic,
      title: "Axe Target with points",
    },
    {
      img: hostStandPic,
      title: "Shield N Sheath Entrance Stand",
    },
    {
      img: storePic3,
      title: "Shield N Sheath Store Left",
      cols: 2,
    },
  ];

  return (
    <div id="Gallery">
      <h3 id="galleryTitle">GALLERY</h3>
      <div id="galleryContainer">
        {" "}
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

export default Gallery;
