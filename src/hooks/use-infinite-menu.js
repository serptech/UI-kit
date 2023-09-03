import { useState, useEffect, useCallback } from "react";
import { useListFetch } from "./use-list-fetch";

function useInfiniteMenu({ limit, hasNext, fetchOptions }) {
  const [isListEnds, setIsListEnds] = useState(!hasNext);

  const fetchList = useCallback(function (params) {
    fetchOptions({ ...params, meta: { clearList: params.offset === 0 } });
  }, []);
  const { pagination, setPagination, setFetchParams } = useListFetch({
    fetchList,
    pagination: { limit, offset: 0 },
  });

  useEffect(() => {
    setIsListEnds(!hasNext);
  }, [hasNext]);

  function searchOptions(value) {
    setFetchParams({
      q: value,
      offset: 0,
    });
  }

  function fetchNext() {
    if (!isListEnds) {
      setPagination({ offset: pagination.offset + pagination.limit });
    }
  }

  return {
    searchOptions,
    fetchNext,
  };
}

export { useInfiniteMenu };
