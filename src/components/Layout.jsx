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
        <footer className="flex justify-center text-center text-xl p-4">
          <div className="bg-blue-500 rounded-md bg-opacity-10 backdrop-blur-md p-2 border-2 border-white" >
            Made with ❤️ By{" "}
            <span className="text-2xl font-semibold text-blue-500">
              {" "}
              &nbsp; Anurag Sharma
            </span>{" "}
            <br />
            Thanks{" "}
            <span className="text-3xl text-purple-600 font-bold">
              &nbsp; Devsnest
            </span>
          </div>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
