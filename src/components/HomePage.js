import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./index.css";

export const HomePage = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <main className="main-container">body</main>
      <footer className="footer-container">
        <button onClick={() => setIsOpen(true)}>open sidebar</button>
      </footer>
      <div className="dialogue-container">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
