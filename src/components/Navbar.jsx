import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputAdornment,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import HubIcon from "@mui/icons-material/Hub";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = ({ mode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <AppBar position="fixed" color="primary">
        <StyledToolbar>
          <Typography
            fontWeight={600}
            variant="h5"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            forLearn
          </Typography>
          <HubIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase
              sx={{ color: mode === "dark" ? "black" : "black" }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchOutlinedIcon
                    fontSize="small"
                    sx={{ color: mode === "dark" ? "black" : "black" }}
                  />
                </InputAdornment>
              }
              placeholder="Search...."
            />
          </Search>

          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>

            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>

            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://github.com/SeneshNV/Jenvy_media/blob/main/images/200px_pp.png?raw=true"
              onClick={(e) => setOpen(true)}
            />
          </Icons>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: "40px", height: "40px" }}
              src="https://github.com/SeneshNV/Jenvy_media/blob/main/images/200px_pp.png?raw=true"
            />
            <Typography>Senesh</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
};

export default Navbar;
