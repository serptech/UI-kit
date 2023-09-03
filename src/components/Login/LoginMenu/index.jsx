import styled from "styled-components";

import { LoginMenuItem } from "./LoginMenuItem";

const LoginMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 8px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

LoginMenu.Item = LoginMenuItem;

export { LoginMenu, LoginMenuItem };
