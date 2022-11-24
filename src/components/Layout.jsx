import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const Layout = () => {
  return (
    <div className="h-screen">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main className="w-screen overflow-hidden overflow-y-scroll">
          <Outlet />
        </main>
        <footer>Made</footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
