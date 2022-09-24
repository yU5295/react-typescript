import { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Logo from "components/Logo";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import { useIsDarkMode } from "state/user/hooks";
import DiscordIcon from "assets/images/discord.svg";
import DiscordIcon2 from "assets/images/discord-dark.svg";

const settings: string[] = ["Organizations", "Members", "Wiener Winners"];

export default function Footer() {
  const darkMode = useIsDarkMode();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box py="16px" sx={{ backgroundColor: "background.footer" }}>
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Logo />
          <Box flexGrow={1} display="flex" justifyContent="flex-end">
            <IconButton sx={{ width: "46px", height: "46px", mx: "4px" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ width: "46px", height: "46px", mx: "4px" }}>
              <Box
                component="img"
                width="24px"
                src={darkMode ? DiscordIcon : DiscordIcon2}
                alt="discord-icon"
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {settings.map((setting: string) => (
              <Button
                key={setting}
                sx={{
                  color: "text.primary",
                  textTransform: "inherit",
                  mx: "4px",
                }}
              >
                {setting}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
