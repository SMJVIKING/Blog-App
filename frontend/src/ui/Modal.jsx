"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

function Modal({ open, onClose, title, children, description = "" }) {
  const ref = useOutsideClick(onClose);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // صبر کن تا کلاینت کامل لود بشه

  return (
    open &&
    createPortal(
      <div
        className="backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-secondary-800 bg-opacity-30 z-50"
      >
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div
            className="flex items-center justify-between border-b 
          border-b-secondary-300 pb-2 mb-6"
          >
            <div>
              <p className="text-secondary-700 font-bold text-base">{title}</p>
              <p className="text-secondary-400 text-sm lg:text-base">
                {description}
              </p>
            </div>
            <button onClick={onClose}>
              <XMarkIcon className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>,
      document.body
    )
  );
}
export default Modal;

// what createPortal do ?
// help use to select the place to run our component
// get 2 arguments => 1.componenet 2.where to run the componenet