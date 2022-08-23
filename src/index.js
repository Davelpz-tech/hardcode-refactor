import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
