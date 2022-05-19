import React from "react";

function Menu() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div id="Menu">
      <h3 id="menuTitle">MENU</h3>
      <img
        id="drinksPic"
        src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698779/shieldnsheath%20assets/IMG_2672_tra5hj.png"
        alt="nonalcoholic and alcoholic drinks sitting on a wooden shelf"
      />
      <div id="menuFlex">
        <img
          id="pizzaPic"
          src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698776/shieldnsheath%20assets/icons8-pizza-100_t16erh.png"
          alt="cartoon beer can"
        />
        <div id="snsMenuPics">
          <img
            onClick={() =>
              openInNewTab(
                "https://res.cloudinary.com/shield-n-sheath/image/upload/v1652965229/shieldnsheath%20assets/Pizza_Block_Digital_Menu_Board_page-1_vq9epq.jpg"
              )
            }
            className="snsMenuPic"
            src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1652965229/shieldnsheath%20assets/Pizza_Block_Digital_Menu_Board_page-1_vq9epq.jpg"
            alt="Shield N Sheath Menu 1"
          />
          <img
            onClick={() =>
              openInNewTab(
                "https://res.cloudinary.com/shield-n-sheath/image/upload/v1652965229/shieldnsheath%20assets/Pizza_Block_Digital_Menu_Board_page-2_cadkas.jpg"
              )
            }
            className="snsMenuPic"
            src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1652965229/shieldnsheath%20assets/Pizza_Block_Digital_Menu_Board_page-2_cadkas.jpg"
            alt="Shield N Sheath Menu 2"
          />

          <img
            onClick={() =>
              openInNewTab(
                "https://res.cloudinary.com/shield-n-sheath/image/upload/v1652965229/shieldnsheath%20assets/LARGE_GROUP_PRICING_l3rdxy.jpg"
              )
            }
            className="snsMenuPic"
            src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1652965229/shieldnsheath%20assets/LARGE_GROUP_PRICING_l3rdxy.jpg"
            alt="Shield N Sheath Menu 3"
          />
        </div>

        <img
          id="beerPic"
          src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698770/shieldnsheath%20assets/icons8-beer-100_gzy3wk.png"
          alt="cartoon beer mug"
        />
      </div>
    </div>
  );
}

export default Menu;
