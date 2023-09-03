import { useEffect, useState, useLayoutEffect } from "react";
import { useInterval } from "react-use";

function useRefRect(ref, onChange) {
  const [rect, setRect] = useState(null);
  function updateNodeRect(node) {
    const newRect = node.getBoundingClientRect();

    if (JSON.stringify(newRect) !== JSON.stringify(rect)) {
      setRect(node.getBoundingClientRect());
    }
  }

  useInterval(() => {
    if (ref.current) {
      updateNodeRect(ref.current);
    }
  }, 100);

  useEffect(() => {
    if (onChange) {
      onChange(rect);
    }
  }, [rect, onChange]);

  useLayoutEffect(() => {
    if (ref.current) {
      updateNodeRect(ref.current);
    }
  });

  return rect;
}

export { useRefRect };
