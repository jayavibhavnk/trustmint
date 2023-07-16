import React, { useEffect } from "react";
import Typed from "typed.js";

function Banner() {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["Fortify", "Authenticate", "Defend"],
      loop: true,
      typeSpeed: 65,
      backSpeed: 65,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <h2 style={{ color: "#fff" }}>
        <h1 className="text-center text-7xl max-md:text-5xl	font-semibold">
          Trust Mint
        </h1>
        <p className="text-center text-xl">
          Leveraging NFTs for{" "}
          <span className="typing" style={{ color: "#12D640" }}></span>
        </p>
      </h2>
    </div>
  );
}

export default Banner;
