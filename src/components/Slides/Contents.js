import React from "react";
import { Heading } from "../Heading";
import { FadeIn } from "../FadeIn";

export const Contents = () => {
  return (
    <FadeIn>
      <Heading text="Contents" />
      <ol>
        <li>What is code, who is it written for?</li>
        <li>Human-centric code</li>
        <li>Art, Craftsmanship & Empathy</li>
      </ol>
    </FadeIn>
  );
};
