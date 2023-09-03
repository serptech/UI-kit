import { useState, useEffect } from "react";
import { useLockBodyScroll } from "react-use";

function useDataEditMode(initial) {
  const [isDataEditMode, setIsDataEditMode] = useState(initial);
  useLockBodyScroll(isDataEditMode);
  useEffect(() => {
    window.scroll(0, 0);
  }, [isDataEditMode]);

  return [isDataEditMode, setIsDataEditMode];
}

export { useDataEditMode };
