"use client";

import { useEffect, useRef } from "react";

function useOutsideClick(handeler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handeler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handeler, listenCapturing]);
  return ref;
}

export default useOutsideClick;
