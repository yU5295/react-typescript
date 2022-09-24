import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDarkModeManager } from "state/user/hooks";
import Logo from "components/Logo";
import DarkIcon from "assets/images/dark.svg";
import LightIcon from "assets/images/light.svg";

const pages: string[] = [
  "Organizations",
  "Members",
  "Wiener Winners",
  "How to/FAQ",
  "Roadmap",
];

// Header component
export default function Header() {
  const [darkMode, toggleSetDarkMode] = useDarkModeManager();

  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "background.transparent",
        backgroundImage: "none",
        boxShadow: darkMode ? "none" : "",
        py: "30px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Logo />

          {/* Page Menu */}
          <Box
            flexGrow={1}
            ml="60px"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page: string) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "text.primary",
                  mx: 1,
                  textTransform: "inherit",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Page mobile menu */}
          <Box
            flexGrow={1}
            justifyContent="flex-end"
            mr={1}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "text.primary" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page: string) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" textTransform="inherit">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/*  */}
          <Box mx="8px">
            <IconButton onClick={toggleSetDarkMode}>
              <Box component="img" src={darkMode ? DarkIcon : LightIcon} />
            </IconButton>
          </Box>
          <Box>
            <Typography
              fontWeight="700"
              textAlign="center"
              color="text.primary"
              mb="4px"
            >
              Collect now
            </Typography>
            <Box
              height="40px"
              mb="4px"
              sx={(theme) => ({
                width: { xs: "140px", md: "200px" },
                border: "3px solid transparent",
                borderRadius: "10px",
                backgroundImage: `linear-gradient(${theme.palette.background.default}, ${theme.palette.background.default}), linear-gradient(92.08deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 48.96%, ${theme.palette.primary.light} 100%)`,
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              })}
            >
              <Button
                variant="text"
                fullWidth
                sx={{
                  height: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="700"
                  sx={(theme) => ({
                    backgroundImage: `linear-gradient(93.66deg, ${theme.palette.secondary.main} -59.64%, ${theme.palette.secondary.light} 48.28%, ${theme.palette.primary.light} 160.8%)`,
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  })}
                >
                  13 532$
                </Typography>
              </Button>
            </Box>
            <Typography
              fontWeight="700"
              textAlign="center"
              color="text.primary"
            >
              Next payment
            </Typography>
            <Typography
              fontWeight="700"
              textAlign="center"
              sx={(theme) => ({
                backgroundImage: `linear-gradient(93.66deg, ${theme.palette.secondary.main} -59.64%, ${theme.palette.secondary.light} 48.28%, ${theme.palette.primary.light} 160.8%)`,
                backgroundClip: "text",
                textFillColor: "transparent",
              })}
            >
              14.12.2021
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
