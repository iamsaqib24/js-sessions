import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { AnotherFooter } from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <AnotherFooter />
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
