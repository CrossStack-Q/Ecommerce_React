import React from "react";
// import PropTypes from "prop-types";
import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { getItemCount } from "../utils";
// import styled from "@emotion/styled";
import {styled,alpha} from "@mui/material/styles"


const Search = styled("section")(({theme})=>({
  position:"relative",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  backgroundColor: alpha(theme.palette.common.white,0.15),
  "&:hover":{
    backgroundColor: alpha(theme.palette.common.white,0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}))
function SearchBar(){
  return (
    <Search></Search>
  )
}


const Header = (props) => {
  const cartItems = useSelector((state)=> state.cart?.value)
  const count  = getItemCount(cartItems);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          color="inherit"
          variant="h6"
          
        >
          Ecom tu
        </Typography>
        <SearchBar />
        <Box sx={{display :{xs:"flex", md:"flex"}}}>
          <IconButton
            size="large"
            aria-label="shows cart items count"
            color="inherit"
          >
            <Badge badgeContent={count} color="error">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            </Badge>
            
          </IconButton>
        </Box>
        <Button color="inherit">
            Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

export default Header;
