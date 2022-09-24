import { useState } from "react";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import IconButton from "@mui/material/IconButton";
import Carousel from "components/Carousel";
import Polygon1 from "assets/images/polygon1.png";
import Polygon2 from "assets/images/polygon2.png";
import DogsBg from "assets/images/dogs-bg.png";

const Banner = () => {
  const Card = ({
    title,
    description,
  }: {
    title: string;
    description: React.ReactNode;
  }) => {
    const [isMouseHover, setIsMouseHover] = useState<boolean>(false);
    return (
      <Box
        width="310px"
        px="20px"
        pb="50px"
        sx={{
          backgroundColor: "background.default",
          cursor: "pointer",
          border: "3px solid transparent",
          borderRadius: "10px",
          ":hover": {
            borderColor: "primary.main",
          },
        }}
        onMouseOver={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
      >
        <Box
          height="120px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h5"
            fontWeight="700"
            textAlign="center"
            color={isMouseHover ? "primary.main" : "text.primary"}
          >
            {title}
          </Typography>
        </Box>
        {description}
      </Box>
    );
  };
  return (
    <Box
      py="50px"
      sx={(theme) => ({
        backgroundImage: `linear-gradient(92.79deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 48.96%, ${theme.palette.primary.light} 100%)`,
      })}
    >
      <Container maxWidth="xl">
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          gap="16px"
        >
          <Card
            title="Who are the Wieners?"
            description={
              <Typography>
                The Wieners are a collection of 3.010 unique sausage dogs ready
                to bark as soon as you mint them.
              </Typography>
            }
          />
          <Card
            title="Main launch"
            description={
              <Typography>
                The main launch will take place on our website.
                <br />
                <br /> The price will be{" "}
                <Typography component="span" color="primary.main">
                  0.15 SOL
                </Typography>{" "}
                per Wiener.
              </Typography>
            }
          />
          <Card
            title="Secondary market"
            description={
              <Typography>
                We are currently applying for every well-known marketplace on
                Solana.
              </Typography>
            }
          />
          <Card
            title="Bridge between Comic Books and NFT"
            description={
              <Typography>
                We are a group of creatives and we love storytelling and sausage
                dogs!
                <br />
                We are currently working on briging interactive stories and the
                Wiener you hold might be featured on it :P
              </Typography>
            }
          />
        </Box>
      </Container>
    </Box>
  );
};

const RoadMap = () => {
  const Stage = ({
    step,
    description,
  }: {
    step: number;
    description: string;
  }) => {
    const [isMouseHover, setIsMouseHover] = useState<boolean>(false);
    return (
      <Box
        position="relative"
        mb="20px"
        sx={{ cursor: "pointer" }}
        onMouseOver={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
      >
        <Box
          position="absolute"
          top="50%"
          left="0"
          py="8px"
          sx={{
            transform: "translateY(-50%)",
            backgroundColor: "background.default",
          }}
        >
          <Box
            component="img"
            src={isMouseHover ? Polygon2 : Polygon1}
            alt=""
          />
        </Box>
        <Box
          py="20px"
          px="30px"
          ml="90px"
          sx={(theme) => ({
            border: `3px solid ${theme.palette.text.primary}`,
            borderRadius: "10px",
          })}
        >
          <Typography
            variant="h5"
            fontWeight="700"
            textAlign="center"
            mb="20px"
            color={isMouseHover ? "primary.main" : "text.primary"}
          >
            Stage {step}
          </Typography>
          <Typography>{description}</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box py="80px">
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h4"
            fontWeight="700"
            textAlign="center"
            color="primary.main"
            mb="40px"
          >
            Roadmap
          </Typography>
          <Box position="relative" mb="80px">
            <Box
              width="3px"
              position="absolute"
              top="0"
              left="18px"
              bottom="0"
              sx={{
                backgroundColor: "text.primary",
              }}
            />
            <Stage
              step={1}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />
            <Stage
              step={2}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />
            <Stage
              step={3}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />
            <Stage
              step={4}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />
          </Box>
          <Typography
            variant="h5"
            fontWeight="700"
            color="primary"
            textAlign="center"
            mb="28px"
          >
            Want to be the first to know all the news?
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              fullWidth
              sx={(theme) => ({
                maxWidth: "420px",
                height: "80px",
                backgroundImage: `linear-gradient(92.08deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 48.96%, ${theme.palette.primary.light} 100%)`,
              })}
            >
              <Typography
                variant="h5"
                fontWeight="700"
                color="background.default"
                textTransform="capitalize"
              >
                Join our Discord
              </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const FAQ = () => {
  const Accordion = ({
    text,
    description,
  }: {
    text: string;
    description: string;
  }) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    const toggleAccordion = () => {
      setIsShow(!isShow);
    };
    return (
      <Box
        mb="20px"
        sx={(theme) => ({
          border: `3px solid ${theme.palette.text.primary}`,
          borderRadius: "10px",
          px: "20px",
          py: "20px",
        })}
      >
        <Typography>{text}</Typography>
        {isShow && (
          <Divider
            sx={{ height: "3px", my: "20px", backgroundColor: "text.primary" }}
          />
        )}
        {isShow && <Typography fontWeight="700">{description}</Typography>}
        <Box display="flex" justifyContent="center" mt="8px">
          <IconButton onClick={toggleAccordion}>
            {isShow ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
      </Box>
    );
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${DogsBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={(theme) => ({
            background: `linear-gradient(121.62deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 48.96%, ${theme.palette.primary.light} 100%)`,
            borderRadius: "10px",
            px: { xs: "20px", md: "100px" },
            py: { xs: "40px", md: "100px" },
          })}
        >
          <Typography
            variant="h4"
            fontWeight="700"
            textAlign="center"
            mb="28px"
          >
            How to/FAQ
          </Typography>
          <Typography mx="auto" mb="30px" sx={{ maxWidth: "860px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Accordion
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.?"
          />
          <Accordion
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <Accordion
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <Accordion
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <Accordion
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <Accordion
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <Accordion
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
        </Box>
      </Container>
    </Box>
  );
};

const Home = () => {
  return (
    <Box py="50px">
      <Container maxWidth="xl">
        {/* Banner */}
        <Box>
          <Typography
            fontWeight="700"
            mb="10px"
            sx={(theme) => ({
              fontSize: { xs: "60px", md: "90px" },
              backgroundImage: `linear-gradient(92.84deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 48.96%, ${theme.palette.primary.light} 100%)`,
              backgroundClip: "text",
              textFillColor: "transparent",
            })}
          >
            Wieners
          </Typography>
          <Typography mb="24px" sx={{ maxWidth: "530px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={(theme) => ({
              maxWidth: "420px",
              height: "80px",
              backgroundImage: `linear-gradient(92.08deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 48.96%, ${theme.palette.primary.light} 100%)`,
            })}
          >
            <Typography
              variant="h5"
              fontWeight="700"
              color="background.default"
              textTransform="capitalize"
            >
              Learn More
            </Typography>
          </Button>
        </Box>
        {/* Carousel */}
        <Carousel />
      </Container>
      <Banner />
      <RoadMap />
      <FAQ />
    </Box>
  );
};

export default Home;
