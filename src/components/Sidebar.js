import React from "react";
import { Dialog } from "@headlessui/react";
import { Panel } from "./Panel";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="dialogue">
      <Backdrop />
      <Panel setIsOpen={setIsOpen} />
    </Dialog>
  );
};
export default Sidebar;

const Backdrop = () => <div className="backdrop"></div>;
