import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

export const Panel = ({ setIsOpen }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div
      className={`dialogue-panel ${
        mounted ? "translate-x-0" : "translate-x-100"
      }`}
    >
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>
        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </div>
  );
};
