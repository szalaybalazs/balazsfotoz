"use client";

import { FunctionComponent, ReactNode, useEffect } from "react";

interface iImageModalProps {
  children: ReactNode;
}

const ImageModal: FunctionComponent<iImageModalProps> = ({ children }) => {
  const _handleClose = () => {
    window.history.back();
  };
  const _handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") _handleClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", _handleKey);
    return () => {
      window.removeEventListener("keydown", _handleKey);
    };
  }, []);
  return (
    <div className="backdrop-blur fixed inset-0 bg-black bg-opacity-90 flex flex-col text-white">
      <div
        className="absolute inset-0  z-0 cursor-zoom-out"
        onClick={_handleClose}
      />
      <div className="flex flex-1 flex-col z-20 pointer-events-none">
        {children}
      </div>
    </div>
  );
};

export default ImageModal;
