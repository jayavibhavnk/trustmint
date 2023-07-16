import { createContext } from "react";
import { Web3Storage } from "web3.storage";

export const Web3Context = createContext();

export const Web3ContextProvider = ({ children }) => {
  const client = new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgzN0E0RmFiQ2JiNTFBY2M5QmREQUYzNWNEQjc5RDM3ODYwNDJGMDMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODk0NDE1NDgxMTQsIm5hbWUiOiJUcnVzdE1pbnQifQ.UyuhWWYiOATg1zGmsTirxxutlGU-j4FWb4fv1Drxzgs",
  });

  async function uploadFile(file) {
    const filesList = new DataTransfer();
    filesList.items.add(file);
    const filesObject = filesList.files;

    console.log("logging file", filesObject);
    const cid = await client.put(filesObject, {
      name: file.name,
      maxRetries: 3,
    });
    return cid;
  }

  async function retrieveFile(cid, name) {
    const anotherLink = `https://${cid}.ipfs.w3s.link/${name}`;
    const response = await fetch(anotherLink);
    const blob = await response.blob();
    return blob;
  }

  return (
    <Web3Context.Provider value={{ uploadFile, retrieveFile }}>
      {children}
    </Web3Context.Provider>
  );
};
