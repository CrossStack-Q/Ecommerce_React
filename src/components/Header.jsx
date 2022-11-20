import React,{useState} from "react";
// import PropTypes from "prop-types";
import { AppBar, Autocomplete, Badge, Button, IconButton, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getItemCount } from "../utils";
// import styled from "@emotion/styled";
import {styled,alpha} from "@mui/material/styles"
import { Menu } from "@mui/icons-material";
import { MenuItemUnstyled } from "@mui/base";

import { fetAllCategories } from "../features/categories-slice";
import { useNavigate, useSearchParams } from "react-router-dom";




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
  const products = useSelector(state=> state.products.value)
  const categories = useSelector(state=> state.categories.value)
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("SearchTerm")
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  if(!categories.length){
    dispatch(fetAllCategories())
  }

  function handleSearchChange(searchText){
    if(searchText){
      console.log(searchText)
      navigate(selectedCategory ==="all"?`?searchterm=${searchText}`: `/?category=${selectedCategory}&searchterm=${searchText}`)
    }
    else{
      navigate(selectedCategory ==="all"?`/`: `/?category=${selectedCategory}`)
    }
  }

  return (
    <Search className="!bg-[#1976D2] !text-white hover:!border-0 focus:!border-0 before:!border-0 after:!border-0" >
      <Select 
      className="!text-white bg-[#1976D2] hover:!border-0 focus:!border-0 before:!border-0 after:!border-0"
      size="small" sx={{
        m:1,
        "&":{
          "::before":{
            ":hover":{
              border: "none"
            },
          },
          "::before, &::after":{
            border:"none"
          }
        },
        textTransform: "capitalize"
        
      }}
      value={selectedCategory}
      variant="standard"
      labelId="selected-category-id"
      id="selected-category-id"
      onChange={(e)=>{
        setSelectedCategory(e.target.value);
        var valuenow = e.target.value;
        navigate(selectedCategory === "all" ? "/": `/?category=${valuenow}${searchTerm ? "&searchterm=" + searchTerm : ""}`);
      }}
      >
        <MenuItem
        sx={{
          textTransform: "capitalize"
        }}
        value="all">
        all
        </MenuItem >
        {categories?.map(category=> <MenuItem  sx={{textTransform: "capitalize"}} value={category} key={category} >
          {category}
        </MenuItem>)}
      </Select>
        
      <Autocomplete
      className="!border-0 bg-[#1976D2] !text-white hover:!border-0 focus:!border-0 before:!border-0 after:!border-0"
      value={selectedProduct}
      onChange={(e,value)=> {
        console.log(value);
        handleSearchChange(value?.label)
      }}
      disablePortal
      id="combo-box-demo"
      sx={{ width: 300,border:"none", color:"white"}}
      options={Array.from( selectedCategory ==="all" ? products : products.filter((prod)=> prod.category === selectedCategory ) , prod=> ({id: prod.id,label: prod.title}))}
      renderInput={(params)=> <TextField {...params} className="!text-white" /> }
      />
    </Search>
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
          Ecomme
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
