import React, { useState } from "react";
import useAppIcons from "@/hooks/useAppIcons";
import RSelect from "react-select";

const Select = (props) => {
  const {
    label,
    description,
    descriptionPlace,
    onChange,
    selectedShow,
    placeholder,
    value,
    options,
    margin,
    handleInputChange,
    disabled,
    selectedVal,
  } = props;
  const { eye } = useAppIcons();
  const [selected, setSelected] = useState();

  return (
    <div
      className={`flex flex-col mb-1 w-full relative`}
    >
      {/* @todo:
        - Try To Make Our Select Border Optional Because at Some Places We Don't Need The Border */}
      {label && (
        <label className="text-sm mb-2 uppercase">{label}</label>
      )}
      {description && descriptionPlace == "top" && (
        <p className="text-sm text-gray-400 mb-3">{description}</p>
      )}
      <RSelect
        onInputChange={handleInputChange}
        classNames={{
          control: (state) => "react-select-custom-control",
        }}
        className="react-select-custom"
        placeholder={selectedShow ? selectedShow : placeholder}
        defaultValue={value}
        value={selectedVal !== undefined ? selectedVal : undefined}
        onChange={onChange}
        options={options}
        isDisabled={disabled}
      />
      {description && descriptionPlace == "bottom" && (
        <p className="text-sm text-gray-400 mt-3">{description}</p>
      )}
    </div>
  );
};

export default Select;
