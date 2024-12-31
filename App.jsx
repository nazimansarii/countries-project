import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router";
import ThemeProvider from "./contexts/ThemeContext";

export default function App() {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')))

  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
