import React from "react";
import { createRoot } from "react-dom/client";
import NewTab from "@/components/NewTab";
import "./globals.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <NewTab />
  </React.StrictMode>
);
