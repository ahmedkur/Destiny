import React, { useState } from "react";
import { FileUploader as FU } from "react-drag-drop-files";
import useAppIcons from "@/hooks/useAppIcons";

const fileTypes = ["PDF", "DOC", "DOCX"];
const FileUploader = ({ file, setFile }) => {
  const { FileAttachmentIcon, FileIcon } = useAppIcons();

  const handleChange = (file) => {
    setFile(file);
  };

  const handleFileDelete = () => {
    setFile(null);
  };

  const handleFileOpen = () => {
    window.open(file.url);
  };

  return (
    <div className="flex flex-col">
      {file ? (
        <div className="flex flex-col  border-2 border-solid border-slate-500 rounded-lg w-full p-5  ">
          <div className="flex items-center">
            <div className="w-[30px] h-[30px] text-black">
              <FileIcon />
            </div>
            <p className="ml-2">{file.name}</p>
          </div>

          <div className="flex flex-col ml-10">
            <p className="text-sm text-gray-400 mt-2 mb-5">
              To ensure accuracy, you can either delete and re-upload the
              attachment or open it to double-check your file.
            </p>

            <div className="flex">
              <span
                onClick={handleFileDelete}
                className="text-red-500 underline ml-1"
              >
                Delete
              </span>
              {/* <span
                onClick={handleFileOpen}
                className="text-black underline ml-4"
              >
                Open
              </span> */}
            </div>
          </div>
        </div>
      ) : (
        <FU handleChange={handleChange} name="file" types={fileTypes}>
          <div className="flex flex-col h-96 border-2 border-dotted border-slate-500 rounded-lg w-full p-5 justify-center items-center ">
            <div className="w-[55px] h-[55px] text-black">
              <FileAttachmentIcon />
            </div>

            <p className="mt-5 or-text-14-400-black">
              Drag and Drop file here or
              <span className="underline ml-1">Choose file</span>
            </p>
          </div>
        </FU>
      )}

      <div className="flex justify-between items-center ">
        <p className="mt-2 or-text-14-400-gray">
          Supported formats:{" "}
          {fileTypes.map((type, index) => (
            <span key={index} className=" ml-1">{type}</span>
          ))}
        </p>

        <p className="or-text-14-400-gray">Maximum size: 2MB</p>
      </div>
    </div>
  );
};

export default FileUploader;
