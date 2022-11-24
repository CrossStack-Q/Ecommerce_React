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
        <footer className="w-full text-center text-xl p-4">

            Made with ❤️ By{" "}
            <span className="text-2xl font-semibold text-blue-500">
              {" "}
              &nbsp; Anurag Sharma
            </span>{" "}
            <br />
            Thanks{" "}
            <span className="text-3xl text-purple-600 font-bold">
              &nbsp;Devsnest
            </span>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
