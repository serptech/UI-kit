import styled from "styled-components";

const EntryCardPhotoFullImageModal = styled.div`
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 200ms ease-in;
  z-index: 21;
`;

export { EntryCardPhotoFullImageModal };
