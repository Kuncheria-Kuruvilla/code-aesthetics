import React from "react";
import { CodeSurferColumns, Step } from "code-surfer";
import { nightOwl } from "@code-surfer/themes";
import { Heading } from "../Heading";
import { FadeIn } from "../FadeIn";

export const ArtCraftEmpathy = () => {
  return (
    <FadeIn>
      <CodeSurferColumns themes={[nightOwl, nightOwl]}>
        <Step>
          <Heading text="Art, Craftsmanship & Empathy" />

          <div>
            <ul>
              <li>Have an artist's mindset</li>
              <li>Appreciate the craftsmanship</li>
              <li>Empathetic to your fellow developers</li>
              <li>The boy scout rule</li>
              <li>Refactor, Refactor, Refactor</li>
            </ul>
          </div>
        </Step>
      </CodeSurferColumns>
    </FadeIn>
  );
};
