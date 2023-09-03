import styled from "styled-components";

import { InfoCardTitle } from "./InfoCardTitle";
import { InfoCardData } from "./InfoCardData";
import { InfoCardAside } from "./InfoCardAside";
import { InfoCardField } from "./InfoCardField";
import { InfoCardPhoto, StyledInfoCardPhoto } from "./InfoCardPhoto";

const InfoCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${StyledInfoCardPhoto}:not(:last-child) {
    margin-right: 24px;
  }
`;

InfoCard.Title = InfoCardTitle;
InfoCard.Data = InfoCardData;
InfoCard.Aside = InfoCardAside;
InfoCard.Field = InfoCardField;
InfoCard.Photo = InfoCardPhoto;

export {
  InfoCard,
  InfoCardData,
  InfoCardAside,
  InfoCardTitle,
  InfoCardField,
  InfoCardPhoto,
};
