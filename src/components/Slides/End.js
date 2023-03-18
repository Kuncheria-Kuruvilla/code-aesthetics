import React from "react";
import { BuyMeACoffee } from "../BuyMeACoffee";
import { Heading } from "../Heading";

export const End = () => {
  return (
    <>
      <Heading text="The End.." />
      <div style={{ position: "absolute", bottom: "100px", right: "100px" }}>
        <BuyMeACoffee />
      </div>
    </>
  );
};
