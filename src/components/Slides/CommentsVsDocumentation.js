import React from "react";
import { FadeIn } from "../FadeIn";

export const CommentsVsDocumentation = () => {
  return (
    <FadeIn>
      <div>
        <p>
          Code <span style={{ color: "#A599E9" }}>Documentation</span>
        </p>
        <p style={{ marginLeft: "30px" }}>
          How the code is <span style={{ color: "#9CCC65" }}>Used</span>
        </p>
      </div>

      <div>
        <p>
          Code <span style={{ color: "#A599E9" }}>Comments</span>
        </p>
        <p style={{ marginLeft: "30px" }}>
          How the code is <span style={{ color: "#ffeb95cc" }}>Used</span>
        </p>
      </div>
    </FadeIn>
  );
};
