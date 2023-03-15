import React from "react";
import { CodeSurferColumns, Step } from "code-surfer";
import { nightOwl } from "@code-surfer/themes";
import { Heading } from "../Heading";
import { FadeIn } from "../FadeIn";

export const WhatIsCode = () => {
  return (
    <FadeIn>
      <CodeSurferColumns themes={[nightOwl, nightOwl]}>
        <Step>
          <Heading text="What is Code" />
          <></>
        </Step>

        <Step>
          <Heading text="What is Code" />

          <blockquote style={{ margin: "24px" }}>
            A computer program is a sequence or set of instructions in a
            programming language for a computer to execute. <br />
            <br />
            &mdash;<cite>Wikipedia</cite>
          </blockquote>
        </Step>
      </CodeSurferColumns>
    </FadeIn>
  );
};
