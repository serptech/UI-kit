import React from "react";
import PropTypes from "prop-types";

import { StyledAppMenu } from "./StyledAppMenu";
import { AppMenuLink } from "./AppMenuLink";
import { Sticky } from "../Sticky";

function Link(props) {
  const { id, title, to } = props;

  return (
    <AppMenu.Link to={to} key={id} content={title}>
      {title}
    </AppMenu.Link>
  );
}

Link.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function AppMenu({ links, children, className }) {
  return (
    <Sticky offsetTop={0} hasBackground={true} innerZ={3}>
      {({ isSticky, style, ref }) => {
        return (
          <StyledAppMenu
            ref={ref}
            className={className}
            style={{
              ...style,
              backgroundColor: isSticky ? "white" : "transparent",
            }}
          >
            {Array.isArray(links) && links.length ? links.map(Link) : children}
          </StyledAppMenu>
        );
      }}
    </Sticky>
  );
}

AppMenu.propTypes = {
  links: PropTypes.array,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  className: PropTypes.string,
};

AppMenu.Link = AppMenuLink;

export { AppMenu, AppMenuLink };
