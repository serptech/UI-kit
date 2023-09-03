import React from "react";
import PropTypes from "prop-types";

import { useState, useMemo } from "react";
import { identity } from "lodash-es";

const ListLayoutContext = React.createContext({
  headerRect: 0,
  setHeaderRect: identity,
});

function ListLayoutProvider({ children }) {
  const [headerRect, setHeaderRect] = useState(null);
  const value = useMemo(() => ({ headerRect, setHeaderRect }), [headerRect]);

  return (
    <ListLayoutContext.Provider value={value}>
      {children}
    </ListLayoutContext.Provider>
  );
}

ListLayoutProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};

export { ListLayoutProvider, ListLayoutContext };
