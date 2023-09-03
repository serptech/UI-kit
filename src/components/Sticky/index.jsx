import React from "react";
import PropTypes from "prop-types";

import { useState, useRef, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { useRefRect } from "../../hooks/use-ref-rect";

import { StickyFixedBackground } from "./StickyFixedBackground";

function Sticky({
  offsetTop,
  innerZ,
  children,
  hasBackground,
  onRectChange,
  className,
}) {
  const ref = useRef(null);
  const rect = useRefRect(ref, onRectChange);

  const { y } = useWindowScroll();
  const [isSticky, setIsSticky] = useState(
    rect ? y !== 0 && y >= rect.top : false
  );

  useEffect(() => {
    setIsSticky(rect ? y !== 0 && y >= rect.top : false);
  }, [y, rect]);

  const stickyBag = {
    ref,
    rect,
    style: { position: "sticky", top: offsetTop, zIndex: innerZ },
    isSticky,
    className,
  };

  return (
    <>
      {typeof children === "function"
        ? children(stickyBag)
        : React.cloneElement(children, {
            ref: stickyBag.ref,
            style: stickyBag.style,
            className: stickyBag.className,
          })}
      {/*
        Компонент нужен для того, чтобы перекрывать собой все, что по бокам от хедера
        на 1px сдвигается для того, чтобы не было бага в chrome на windows
        https://bugs.chromium.org/p/chromium/issues/detail?id=693412
      */}
      {hasBackground && isSticky && (
        <StickyFixedBackground
          rect={rect}
          style={{
            zIndex: innerZ - 1,
            // так как компонент стики, мы не должны учитывать window.scrollY
            top: rect.top - 1,
            backgroundColor: window.getComputedStyle(ref.current)
              .backgroundColor,
          }}
        />
      )}
    </>
  );
}

Sticky.propTypes = {
  offsetTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  innerZ: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  hasBackground: PropTypes.bool.isRequired,
  onRectChange: PropTypes.func,
  className: PropTypes.string,
};

export { Sticky };
