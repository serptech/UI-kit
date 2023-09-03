import { useState, useCallback } from "react";

function useClientRect(deps = []) {
  const [rect, setRect] = useState(null);
  const ref = useCallback(
    (node) => {
      if (node !== null) {
        setRect(node.getBoundingClientRect());
      }
    },
    [...deps]
  );
  return [rect, ref];
}

export { useClientRect };
