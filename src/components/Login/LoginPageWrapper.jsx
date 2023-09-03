import styled from "styled-components";

import RouteSection from "../RouteSection/StyledRouteSection";
import { StyledFooter } from "../Footer";

const LoginPageWrapper = styled(RouteSection)`
  min-height: 640px;
  width: 1000px;
  margin: 0 auto;
  justify-content: center;

  ${StyledFooter} {
    padding-bottom: 20px;
  }
`;

export { LoginPageWrapper };
