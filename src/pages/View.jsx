import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import File from "../asset/file.gif";
import BlobViewer from "../components/BlobViewer";
import { Web3Context } from "../context/Web3Context";
import CryptoJS from "crypto-js";

const View = () => {
  const example = { user: "user", docs: [] };
  const { retrieveFile } = useContext(Web3Context);
  const docs = [
    {
      cid: "bafybeid4cqjcyvhehsyii5updjsamn2kithipthnmeiwgm57vwjhaops6i",
      type: "avif",
      encrypted: false,
      name: "m2.avif",
    },
    {
      cid: "bafybeidzacynhlzyswriu4cntkkpgnlhen2o7z23bb65adpcpv6dj54oam",
      type: "gif",
      encrypted: true,
      name: "download.gif.enc",
    },
    {
      cid: "bafybeidqmhmizzkauvipimhw257lcjad5s4lfluen4l7b4p2ju2cwleasy",
      type: "txt",
      encrypted: true,
      name: "t.txt.enc",
    },
  ];

  const [blobData, setBlobData] = useState(null);

  const handleShow = async (cid, name) => {
    const data = await retrieveFile(cid, name);
    setBlobData(data);
    // console.log(data);
  };

  function extractTextFromDataURI(dataURI) {
    const base64Data = dataURI.split(",")[1]; // Extract the base64-encoded data
    const decodedText = atob(base64Data); // Decode the base64 data
    return decodedText;
  }

  function getMimeTypeFromExtension(extension) {
    const mimeTypes = {
      txt: "text/plain",
      pdf: "application/pdf",
      jpg: "image/jpeg",
      png: "image/png",
      // Add more extensions and corresponding MIME types as needed
    };

    // Check if the extension exists in the mapping
    if (extension in mimeTypes) {
      return mimeTypes[extension];
    }

    // Default to 'application/octet-stream' if the extension is not found
    return "application/octet-stream";
  }

  const downloadBlob = (blob, fileName) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = fileName;
    downloadLink.click();
  };

  const handleDecrypt = async (cid, name) => {
    // Getting blob data

    const link = `https://${cid}.ipfs.w3s.link/${name}`;
    const response = await fetch(link);
    const data = await response.text();

    console.log(data);

    const encryptionKey = "12345678";

    const decryptedData = CryptoJS.AES.decrypt(data, encryptionKey).toString(
      CryptoJS.enc.Utf8
    );

    console.log("decrypted data", decryptedData);

    // put this if doesn't work {type: "text/plain",}
    console.log(getMimeTypeFromExtension(name.split(".")[1]));
    const blob = new Blob([extractTextFromDataURI(decryptedData)], {
      type: getMimeTypeFromExtension(name.split(".")[1]),
    });

    // setBlobData(blob);
    downloadBlob(blob, name.replace(".enc", ""));
  };

  return (
    <>
      {Object.is(blobData, null) ? (
        <div className="flex flex-wrap justify-center gap-3">
          {docs.map((doc) => {
            return (
              <div className="flex flex-wrap justify-center" key={doc.cid}>
                <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div>
                    <img className="rounded-t-lg" src={File} alt="" />
                  </div>
                  <div className="p-5">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      File Name: {`${doc.name}`}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      File Type: {`${doc.type}`}
                    </p>
                    {doc.encrypted ? (
                      <button
                        onClick={() => handleDecrypt(doc.cid, doc.name)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Decrypt
                      </button>
                    ) : (
                      <button
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => handleShow(doc.cid, doc.name)}
                      >
                        Show
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <BlobViewer data={blobData} className="flex justify-center" />
      )}
    </>
  );
};

export default View;
