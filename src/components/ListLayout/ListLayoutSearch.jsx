import styled from "styled-components";

export const ListLayoutSearch = styled.div`
  /**
    Хак используется для того, чтобы сделать оступ,
    когда компонент не на самом верху старницы (группы персон)
   */
  &:first-child {
    padding-top: 24px;
  }

  &:not(:last-child) {
    padding-bottom: 24px;
  }
`;
