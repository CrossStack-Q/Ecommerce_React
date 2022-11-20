import { useTheme } from "@emotion/react";
import "./Home.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Button,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart-slice";
import { fetAllProducts } from "../features/product-slice";

const Home = () => {
  const state = useSelector(state => state.products )
  const {value: products,loading} = state ?? {};
  const dispatch = useDispatch();
  const theme = useTheme();

  // useEffect(() => {
    
  //   fetALlProducts();
  // }, []);
  if(!products?.length) {
    dispatch(fetAllProducts())
  }





  function addProductToCart(product) {
    // dispatch an action
    dispatch (addToCart({product,quantity:1}))
  }

  return (

    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {products?.map(({ title, id, price, description, rating, image }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  alignSelf: "center",
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  objectFit: "contain",
                  pt: theme.spacing(),
                }}
                image={image}
                alt={title}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  className="now"
                >
                  {title}
                </Typography>
                <Typography className="now1">{description}</Typography>
                <Typography fontSize="large" paragraph>
                  {price}
                </Typography>
                <Rating readOnly precision={0.5} value={rating.rate} />
              </CardContent>
              <CardActions sx={{
                  alignSelf:"center"
                }}>
                <Button variant="contained" onClick={()=> addProductToCart({ title, id, price, description, rating, image })}  >
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
                  &nbsp; Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
