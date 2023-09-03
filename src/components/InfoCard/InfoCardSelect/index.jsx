import React from "react";
import PropTypes from "prop-types";

import { useRef, useState, useEffect } from "react";
import { useUpdateEffect } from "react-use";

import { StyledInfoCardSelect } from "./StyledInfoCardSelect";
import { InfoCardSelectTag } from "./InfoCardSelectTag";
import { InfoCardSelectNoItemsText } from "./InfoCardSelectNoItemsText";

import { isArray } from "lodash-es";

function getItemAsAText(item) {
  return item.label || String(item);
}

const separatorTag = {
  separator: true,
};

function InfoCardSelect({
  value,
  className,
  "data-testid": testId,
  rowsCount,
  noItemsText,
}) {
  const list = useRef(null);
  const [tagsToRender, setTagsToRender] = useState(value);
  const [tagsReadyToRender, setTagsReadyToRender] = useState(false);

  useUpdateEffect(() => {
    setTagsToRender(value);
  }, [value]);

  useEffect(() => {
    // логика по добавлению многоточия при оверфлоу
    if (list.current) {
      setTagsReadyToRender(false);

      if (!rowsCount && rowsCount !== 0) {
        setTagsToRender(value);
        setTagsReadyToRender(true);

        return;
      }

      const listHeight = list.current.offsetHeight;
      if (!listHeight) return;

      const firstOverflowItemIndex = Array.from(
        list.current.querySelectorAll("li")
      ).findIndex((el) => {
        return el.offsetTop > listHeight;
      });

      if (firstOverflowItemIndex !== -1) {
        const isSeparator = tagsToRender[firstOverflowItemIndex].separator;

        const indexToSlice = isSeparator
          ? firstOverflowItemIndex - 1
          : firstOverflowItemIndex;

        setTagsToRender((tagsToRender) =>
          tagsToRender.slice(0, indexToSlice).concat(separatorTag)
        );
      } else {
        setTagsReadyToRender(true);
      }
    }
  }, [tagsToRender, rowsCount]);

  return isArray(tagsToRender) ? (
    <StyledInfoCardSelect
      as="ul"
      ref={list}
      className={className}
      data-testid={testId}
      style={
        rowsCount && {
          maxHeight: (20 + 6) * rowsCount - 6,
          visibility: tagsReadyToRender ? "visible" : "hidden",
        }
      }
    >
      {tagsToRender.length ? (
        tagsToRender.map((tag) =>
          tag.separator ? (
            <InfoCardSelectTag>...</InfoCardSelectTag>
          ) : (
            <InfoCardSelectTag key={tag.value || tag}>
              {getItemAsAText(tag)}
            </InfoCardSelectTag>
          )
        )
      ) : (
        <InfoCardSelectNoItemsText>{noItemsText}</InfoCardSelectNoItemsText>
      )}
    </StyledInfoCardSelect>
  ) : (
    <StyledInfoCardSelect className={className} data-testid={testId}>
      {tagsToRender ? (
        <InfoCardSelectTag>{getItemAsAText(tagsToRender)}</InfoCardSelectTag>
      ) : (
        <InfoCardSelectNoItemsText>{noItemsText}</InfoCardSelectNoItemsText>
      )}
    </StyledInfoCardSelect>
  );
}

InfoCardSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]),
  rowsCount: PropTypes.number,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  noItemsText: PropTypes.string,
};

InfoCardSelect.defaultProps = {
  value: "",
  noItemsText: "-",
};

export { InfoCardSelect, InfoCardSelectTag };
