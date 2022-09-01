import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./index.css";

export const HomePage = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <main className="main-container">body</main>
        <footer className="footer-container">
          <BtnWithSidebar isOpen={isOpen} setIsOpen={setIsOpen}>
            Open sidebar
          </BtnWithSidebar>
        </footer>
      </div>
    </>
  );
};

const Button = ({ children, ...rest }) => <button {...rest}>{children}</button>;

const withSidebar = (Comp) => {
  return ({ children, isOpen, setIsOpen }) => (
    <>
      <Comp onClick={() => setIsOpen(true)}>{children}</Comp>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const BtnWithSidebar = withSidebar(Button);
