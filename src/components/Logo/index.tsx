import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={1}
        sx={(theme) => ({
          width: { xs: "70px", sm: "90px" },
          height: { xs: "70px", sm: "90px" },
          backgroundImage: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 48.96%, ${theme.palette.primary.light} 100%)`,
        })}
      >
        <Typography
          variant="h5"
          textTransform="uppercase"
          fontWeight="900"
          color="text.primary"
        >
          Logo
        </Typography>
      </Box>
    </Link>
  );
}
