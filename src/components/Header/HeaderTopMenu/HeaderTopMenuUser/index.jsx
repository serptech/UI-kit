import React from "react";
import PropTypes from "prop-types";

import { useRef, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { usePositionPopup } from "../../../../hooks/use-position-popup";
import { useLocation } from "react-router-dom";

import { StyledHeaderTopMenuUser } from "./StyledHeaderTopMenuUser";
import { HeaderTopMenuUserDropdown } from "./HeaderTopMenuUserDropdown";
import { Menu } from "../../../icons";
import { HeaderTopMenuUserSection } from "./HeaderTopMenuUserSection";
import { HeaderTopMenuUserMenuButton } from "./HeaderTopMenuUserMenuButton";

function HeaderTopMenuUser({ username, space, dropdown }) {
  const popupTrigger = useRef(null);
  const { y } = useWindowScroll();
  useEffect(() => {
    closePortal();
  }, [y]);

  const location = useLocation();
  useEffect(() => {
    closePortal();
  }, [location.pathname]);

  const {
    Portal,
    bind,
    coords,
    popupInner,
    togglePortal,
    closePortal,
    isOpen,
  } = usePositionPopup({
    pupupTrigger: popupTrigger,
    position: "bottomRight",
    bindTo: document.querySelector("header"),
  });

  function handleTriggerClick() {
    togglePortal();
  }

  return (
    <>
      <StyledHeaderTopMenuUser
        {...bind}
        ref={popupTrigger}
        onClick={dropdown && handleTriggerClick}
      >
        {username && (
          <HeaderTopMenuUserSection>{username}</HeaderTopMenuUserSection>
        )}
        {space && <HeaderTopMenuUserSection>{space}</HeaderTopMenuUserSection>}
        <HeaderTopMenuUserMenuButton>
          <Menu size={16} />
        </HeaderTopMenuUserMenuButton>
      </StyledHeaderTopMenuUser>
      {dropdown && (
        <Portal>
          <HeaderTopMenuUserDropdown
            innerRef={popupInner}
            isOpen={isOpen}
            coords={coords}
          >
            {typeof dropdown === "function" ? dropdown({ isOpen }) : dropdown}
          </HeaderTopMenuUserDropdown>
        </Portal>
      )}
    </>
  );
}

HeaderTopMenuUser.propTypes = {
  username: PropTypes.string.isRequired,
  space: PropTypes.string.isRequired,
  dropdown: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
};

HeaderTopMenuUser.defaultProps = {
  dropdown: null,
};

export * from "./HeaderTopMenuUserDropdown";

export { HeaderTopMenuUser };
