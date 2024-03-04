import React, { useState } from "react";
import useAppIcons from "@/hooks/useAppIcons";
import { useRouter } from "next/router";

const Input = (props) => {
  const {
    label,
    description,
    type,
    placeholder,
    value,
    onChange,
    register,
    disabled,
    multiple = false,
    accept = ''
  } = props;
  const { EyeIcon } = useAppIcons();
  const [passType, setPassType] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col w-full relative mb-1">
      {label && (
        <label className="block uppercase text-blueGray-600 text-sm  mb-2">
          {label}
        </label>
      )}
      {description && (
        <p className="text-sm text-gray-400 mb-3">{description}</p>
      )}

      <input
        defaultValue={value}
        onChange={onChange}
        // className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        className="input"
        type={passType ? "text" : type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        {...(type === "time" ? { step: "1" } : {})}
        {...(type === "file" && multiple ? { multiple } : {})}
        {...(type === "file" && accept != '' ? { accept: accept } : {})}
      />

      {type === "password" && (
        <div
          className={`absolute cursor-pointer ${router.locale == "en" ? 'right-3' : 'left-3'} ${type === "password" && label ? "top-11" : "top-3"
            }`}
        >
          <div
            className="text-[#BFBFBF] w-[20px]"
            onClick={() => setPassType(!passType)}
          >
            {passType ? (
              <i className="fa-regular fa-eye-slash"></i>
            ) : (
              <i className="fa-regular fa-eye"></i>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
