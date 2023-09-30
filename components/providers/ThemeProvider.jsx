"use client";

import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { ThemeProvider } from "next-themes";
const Provider = (props) => {
  return (
    <ThemeProvider attribute="class">
      <ActiveSectionContextProvider>
        {props.children}
      </ActiveSectionContextProvider>
    </ThemeProvider>
  );
};

export default Provider;
