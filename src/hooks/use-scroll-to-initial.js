import { useEffect } from "react";

import { scrollToItem } from "../utils";

function useScrollToInitial(currentId, onScroll) {
  useEffect(() => {
    if (currentId) {
      setTimeout(() => {
        scrollToItem(`li[data-id="${currentId}"]`, 60, onScroll);
      }, 300);
    }
  }, []);
}

export { useScrollToInitial };
