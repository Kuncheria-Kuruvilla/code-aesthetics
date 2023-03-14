import React from "react";
import { Heading } from "../Heading";
import "../../common/common.css";

export const Contents = () => {
  return (
    <div className="fade-in">
      <Heading text="Contents" />
      <ol>
        <li>What is code, who is it written for?</li>
        <li>Human friendly code</li>
        <li>Art, Craftsmanship & Empathy</li>
      </ol>
    </div>
  );
};
