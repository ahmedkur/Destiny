import React from "react";

export default function Button({ text, textColor, bgColor, onClick }) {
  return (
    <button
      className={`active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 h-fit`}
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {text}
    </button>
  );
}
