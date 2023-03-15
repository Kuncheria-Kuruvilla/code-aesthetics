import React from "react";
import { CodeSurferColumns, Step } from "code-surfer";
import { nightOwl } from "@code-surfer/themes";

import { FadeIn } from "../FadeIn";
import { Heading } from "../Heading";

export const NamingThingsInCode = () => {
  return (
    <FadeIn>
      <CodeSurferColumns themes={[nightOwl, nightOwl]}>
        <Step>
          <Heading text="Naming things in code" />
          <blockquote style={{ marginLeft: "24px", marginRight: "24px" }}>
            There are only two hard things in Computer Science: cache
            invalidation and naming things. <br /> <br /> &mdash;
            <cite>Phil Karlton</cite>
          </blockquote>
        </Step>
      </CodeSurferColumns>
    </FadeIn>
  );
};
