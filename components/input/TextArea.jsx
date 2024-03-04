import React from "react";
import useAppIcons from "@/hooks/useAppIcons";
import Image from "next/image";

const TextArea = (props) => {
  const {
    label,
    subtext,
    description,
    type,
    placeholder,
    value,
    onChange,
    disabled,
  } = props;
  const { eye } = useAppIcons();
  return (
    <div className="flex flex-col w-full mb-4 relative">
      {label && (
        <label className="or-text-16-500-black md:mb-4 mb-1">{label}</label>
      )}
      {description && (
        <p className="text-sm text-gray-400 mb-3">{description}</p>
      )}
      <textarea
        rows={4}
        className="input"
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        disabled={disabled}
      />

      {type === "password" && (
        <div
          className={`absolute cursor-pointer right-3 ${
            type === "password" && label ? "top-9" : "top-3"
          }`}
        >
          <Image src={eye} alt="jobskrd" />
        </div>
      )}
      {subtext && (
        <p className="text-sm self-end text-gray-400 mb-3">{subtext}</p>
      )}
    </div>
  );
};

export default TextArea;
