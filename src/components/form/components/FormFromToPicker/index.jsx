import React from "react";
import PropTypes from "prop-types";

import { useRef } from "react";
import { useUpdateEffect } from "react-use";
import { usePositionPopup } from "../../../../hooks";

import { FormFromToPickerTabs } from "./FormFromToPickerTabs";
import { StyledFormFromToPicker } from "./StyledFormFromToPicker";
import { FormFromToPickerPopup } from "./FormFromToPickerPopup";
import { FormFromToPickerControl } from "./FormFromToPickerControl";
import { FormFromToPickerResetButton } from "./FormFromToPickerResetButton";
import { Times, ArrowRight } from "../../../icons";

import { isEqual, isArray } from "lodash-es";

function FormFromToPicker({
  value,
  onChange,
  valuesOnReset,
  onReset,
  onStateChange,
  className,
  "data-testid": testId,
  children,
  placeholder,
}) {
  const popupTrigger = useRef(null);
  const filterWrapper = useRef(null);
  const { Portal, bind, popupInner, togglePortal, closePortal, isOpen } =
    usePositionPopup({
      pupupTrigger: popupTrigger,
      position: "bottom",
      bindTo: filterWrapper.current,
    });

  useUpdateEffect(() => {
    if (onStateChange) {
      onStateChange({ isOpen });
    }
  }, [isOpen]);

  const isValueEmpty =
    (isArray(value) && value.filter(Boolean).length === 0) || !value;

  function getValueRender(value) {
    if (isValueEmpty) {
      return placeholder;
    }

    if (!isArray(value)) return value.label;

    if (value[0] && !value[1]) return value[0].label;
    if (!value[0] && value[1])
      return (
        <>
          <ArrowRight /> {value[1].label}
        </>
      );

    return (
      <>
        {value[0].label} <ArrowRight /> {value[1].label}
      </>
    );
  }

  return (
    <StyledFormFromToPicker ref={filterWrapper} className={className}>
      <FormFromToPickerControl
        {...bind}
        data-testid={`${testId}-control`}
        ref={popupTrigger}
        onClick={togglePortal}
      >
        {getValueRender(value)}
        {!isValueEmpty && (
          <FormFromToPickerResetButton
            data-testid={`${testId}-reset`}
            onClick={(e) => {
              e.stopPropagation();
              if (!isEqual(value, valuesOnReset)) {
                onChange(valuesOnReset);
              }

              if (onReset) {
                onReset(value, valuesOnReset);
              }

              closePortal();
            }}
          >
            <Times size="12" />
          </FormFromToPickerResetButton>
        )}
      </FormFromToPickerControl>
      <Portal>
        {/* Сбрасываем все локальные состояния по открытию/закрытию */}
        <FormFromToPickerPopup
          isOpen={isOpen}
          ref={popupInner}
          data-testid={`${testId}-popup`}
          key={isOpen}
        >
          {children}
        </FormFromToPickerPopup>
      </Portal>
    </StyledFormFromToPicker>
  );
}

FormFromToPicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func.isRequired,

  onStateChange: PropTypes.func,

  valuesOnReset: PropTypes.array.isRequired,
  onReset: PropTypes.func,

  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,

  className: PropTypes.string,
  "data-testid": PropTypes.string,

  placeholder: PropTypes.string,
};

FormFromToPicker.defaultProps = {
  value: [null, null],
  valuesOnReset: [null, null],
  "data-testid": "form-from-to-picker",
};

FormFromToPicker.Tabs = FormFromToPickerTabs;

export { FormFromToPicker, FormFromToPickerTabs };
