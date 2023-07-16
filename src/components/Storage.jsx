import React, { useContext, useState } from "react";
import CryptoJS from "crypto-js";
import { Web3Context } from "../context/Web3Context";

const Storage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isKeyRequired, setIsKeyRequired] = useState(false);
  const [encryptionKey, setEncryptionKey] = useState("");

  const { uploadFile } = useContext(Web3Context);

  const handleCheckboxChange = () => {
    setIsKeyRequired(!isKeyRequired);
  };

  const handleKeyChange = (e) => {
    setEncryptionKey(e.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    // event.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  // main logic
  const encryptFile = async () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const fileData = reader.result;
        // console.log("before encrypt", fileData);
        const encryptedData = CryptoJS.AES.encrypt(
          fileData,
          encryptionKey
        ).toString();

        // console.log("encrypted data", encryptedData);
        // Create a new File object with the encrypted data and a modified file name
        const encryptedFile = new File(
          [encryptedData],
          `${selectedFile.name}.enc`
        );

        // console.log("encrypted file", encryptedFile);

        setSelectedFile(encryptedFile);
      };

      reader.readAsDataURL(selectedFile);
      console.log(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    if (isKeyRequired) {
      if (encryptionKey === "") {
        alert("Please enter a key");
      } else {
        await encryptFile();
        const cid = await uploadFile(selectedFile);
        console.log(cid);
      }
    } else {
      const cid = await uploadFile(selectedFile);
      console.log(cid);
    }
  };

  return (
    <div
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 p-2 "
      style={{ minWidth: "min(80vw, 800px)", minHeight: "max(50vh)" }}
    >
      {/* dragable drop  */}
      <div
        className="flex items-center justify-center w-full basis-2/3 h-[100%]"
        draggable
      >
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-[100%] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            {!selectedFile ? (
              <>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  (MAX-SIZE 50MB)
                </p>
              </>
            ) : (
              <p className="mb-2 text-md text-gray-500 dark:text-gray-400">
                {selectedFile.name}
              </p>
            )}
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="unhidden absolute"
            style={{ opacity: "0", height: "100%", width: "100%" }}
            onChange={handleFileChange}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        </label>
      </div>

      {/* Advance options  */}
      <div className="flex flex-col justify-between p-4 leading-normal basis-1/3 gap-2">
        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Advance Options
        </h6>
        <label className="relative inline-flex items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isKeyRequired}
            onChange={handleCheckboxChange}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Encrypt
          </span>
        </label>

        {isKeyRequired && (
          <input
            type="text"
            id="encrypt-password"
            aria-label="encrypt-password"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Encryption Key"
            value={encryptionKey}
            onChange={handleKeyChange}
          />
        )}

        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={handleSubmit}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Storage;
