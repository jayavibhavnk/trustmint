import React, { useEffect, useState } from "react";

const BlobViewer = ({ data }) => {
  const [blobURL, setBlobURL] = useState("");

  useEffect(() => {
    const url = URL.createObjectURL(data);
    setBlobURL(url);
  }, []);

  return (
    <div className="flex justify-center">
      {blobURL && (
        <img src={blobURL} alt="Blob Image" className="flex justify-center" />
      )}
    </div>
  );
};

export default BlobViewer;
