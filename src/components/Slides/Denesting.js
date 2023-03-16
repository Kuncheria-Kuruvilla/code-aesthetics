import React from "react";
import { Heading } from "../Heading";
import { FadeIn } from "../FadeIn";

export const Denesting = () => {
  return (
    <FadeIn>
      <Heading text="Methods to Denest" />
      <ul>
        <li>Extraction</li>
        <li>Inversion</li>
      </ul>
    </FadeIn>
  );
};
