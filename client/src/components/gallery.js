import React from "react";
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
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698782/shieldnsheath%20assets/IMG_2650_jfqemr.png",
      title: "Spear and Helmets",
      cols: 3,
      rows: 2,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700916/shieldnsheath%20assets/IMG_2643_eunsof.png",
      title: "Ninja Pack",
      rows: 1,
      cols: 1,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700918/shieldnsheath%20assets/IMG_2646_abteye.png",
      title: "Axes",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700912/shieldnsheath%20assets/IMG_2647_n3llnm.png",
      title: "Axes and Combat Shovel",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698779/shieldnsheath%20assets/IMG_2672_tra5hj.png",
      title: "Nonalcoholic and Alcoholic Drinks",
      cols: 3,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700916/shieldnsheath%20assets/IMG_2651_gbbgkk.png",
      title: "Sword and Shield Display",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700910/shieldnsheath%20assets/IMG_2654_c7qfal.png",
      title: "Shield and Sheath Wood Log",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700930/shieldnsheath%20assets/IMG_2656_bcmkwk.png",
      title: "Axe throwing pit lanes",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700914/shieldnsheath%20assets/IMG_2653_i12rfs.png",
      title: "Shield and Sheath Merch Display",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700924/shieldnsheath%20assets/IMG_2657_xm3ves.png",
      title: "Axe Game Sheet",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700938/shieldnsheath%20assets/IMG_2669_rhsv97.png",
      title: "Entrance Sign",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700936/shieldnsheath%20assets/IMG_2676_2_cq1qzn.png",
      title: "Knife Display Case",
      cols: 3,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700926/shieldnsheath%20assets/IMG_2663_elbqmz.png",
      title: "Shield N Sheath Micael Myers T-Shirt",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700930/shieldnsheath%20assets/IMG_2665_aci5uk.png",
      title: "Shield N Sheath T-Shirt",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700931/shieldnsheath%20assets/IMG_2667_cyh6yp.png",
      title: "Shield N Sheath Hoodie",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700926/shieldnsheath%20assets/IMG_2659_mfflyc.png",
      title: "Shield N Sheath Store Right",
      cols: 2,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698775/shieldnsheath%20assets/SNS_MENU_efiwnu.png",
      title: "Shield N Sheath Menu",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700938/shieldnsheath%20assets/IMG_2670_lqgdcq.png",
      title: "Shield N Sheath Axe Throwing Prices Sign",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700930/shieldnsheath%20assets/IMG_2660_khr9dx.png",
      title: "Shield N Sheath Store Middle",
      cols: 2,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700940/shieldnsheath%20assets/IMG_2677_xc8o4r.png",
      title: "Axe Target with points",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700940/shieldnsheath%20assets/IMG_2678_saaxqj.png",
      title: "Shield N Sheath Entrance Stand",
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700927/shieldnsheath%20assets/IMG_2661_euoi3m.png",
      title: "Shield N Sheath Store Left",
      cols: 2,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698775/shieldnsheath%20assets/sns_insta_pic2_jkm1rx.png",
      title: "Shield N Sheath Instagram Pictures",
      cols: 2,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698775/shieldnsheath%20assets/sns_insta_pic1_n6dezt.png",
      title: "Shield N Sheath Instagram Pictures",
      cols: 2,
      rows: 2,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698775/shieldnsheath%20assets/sns_insta_pic3_dtieho.png",
      title: "Shield N Sheath Instagram Pictures",
      cols: 2,
      rows: 2,
    },
    {
      img: "https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698776/shieldnsheath%20assets/sns_insta_pic4_kyd30o.png",
      title: "Shield N Sheath Instagram Pictures",
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
