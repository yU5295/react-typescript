import { useState } from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Slider from "react-slick";
import SliderImage1 from "assets/images/slider1.png";
import SliderImage2 from "assets/images/slider2.png";
import SliderImage3 from "assets/images/slider3.png";
import SliderImage4 from "assets/images/slider4.png";
import SliderImage5 from "assets/images/slider5.png";
import ArrowIcon from "assets/images/arrow.png";

interface ItemInterface {
  collection: string;
  collectionId: number;
  price: number;
  date: string;
  imageuri: string;
}

const items: ItemInterface[] = [
  {
    collection: "Wiener",
    collectionId: 1084,
    price: 0.12,
    date: "01.26.21/19:32:05",
    imageuri: SliderImage1,
  },
  {
    collection: "Wiener",
    collectionId: 1582,
    price: 0.14,
    date: "01.26.21/18:01:23",
    imageuri: SliderImage2,
  },
  {
    collection: "Wiener",
    collectionId: 2829,
    price: 0.12,
    date: "01.26.21/16:21:43",
    imageuri: SliderImage3,
  },
  {
    collection: "Wiener",
    collectionId: 792,
    price: 0.27,
    date: "01.26.21/16:12:41",
    imageuri: SliderImage4,
  },
  {
    collection: "Wiener",
    collectionId: 823,
    price: 0.22,
    date: "01.26.21/15:23:11",
    imageuri: SliderImage5,
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Carousel() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const toggleShowDescription = () => {
    setIsShow(!isShow);
  };
  return (
    <Box py="50px">
      <Slider {...settings}>
        {items.map((item: ItemInterface) => (
          <Box
            key={item.collectionId}
            sx={{
              outline: "none",
              width: "250px !important",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              width="100%"
              src={item.imageuri}
              alt={item.collection + "#" + item.collectionId}
              sx={{
                border: "3px solid #FFFFFF",
                borderRadius: "10px",
                mb: "10px",
              }}
            />
            {isShow && (
              <>
                <Box display="flex" justifyContent="space-between">
                  <Typography>
                    {item.collection} #{item.collectionId}
                  </Typography>
                  <Typography fontWeight="700">{item.price} SOL</Typography>
                </Box>
                <Divider sx={{ my: "4px", backgroundColor: "text.primary" }} />
                <Box display="flex" justifyContent="space-between">
                  <Typography fontSize="12px">{item.date}</Typography>
                  <Typography fontSize="12px">alpha.art</Typography>
                </Box>
              </>
            )}
          </Box>
        ))}
      </Slider>
      <Box display="flex" justifyContent="center" mt="30px">
        <IconButton
          sx={{
            width: "48px",
            height: "48px",
            transform: isShow ? "rotate(180deg)" : "",
          }}
          onClick={toggleShowDescription}
        >
          <Box component="img" src={ArrowIcon} alt="arrow" />
        </IconButton>
      </Box>
    </Box>
  );
}
