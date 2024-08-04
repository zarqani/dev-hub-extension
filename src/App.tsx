import React from "react";
import { createRoot } from "react-dom/client";
import NewTab from "@/components/NewTab";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <NewTab />
    </ThemeProvider>
  </React.StrictMode>,
);
