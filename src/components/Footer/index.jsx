import React from "react";
import PropTypes from "prop-types";

import { StyledFooter } from "./StyledFooter";
import { FooterInner } from "./FooterInner";
import { FooterText } from "./FooterText";
import { FooterCredits } from "./FooterCredits";
import { FooterDisclaimer } from "./FooterDisclaimer";

function Footer({ Disclamer, Credits, className }) {
  return (
    <StyledFooter
      isDisclaimerShowing={Boolean(Disclamer)}
      className={className}
    >
      <FooterInner>
        <FooterText>
          {Disclamer && <FooterDisclaimer>{Disclamer}</FooterDisclaimer>}
          {Credits && <FooterCredits>{Credits}</FooterCredits>}
        </FooterText>
      </FooterInner>
    </StyledFooter>
  );
}

Footer.propTypes = {
  Disclamer: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  Credits: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  className: PropTypes.string,
};

export { Footer, StyledFooter, FooterInner };
