import React from "react";

export const KeyBoardShortcuts = () => {
  const row = { boxSizing: "border-box", padding: "4px" };
  const tdStyle = {
    textAlign: "left",
    paddingRight: "0.5em",
    paddingTop: "0.25em",
    paddingBottom: "0.25em",
    borderBottom: "1px solid",
    verticalAlign: "top",
  };
  return (
    <table
      style={{
        fontSize: "0.8rem",
        borderBottom: "1px solid",
        borderSpacing: "0px",
      }}
    >
      <caption>
        <h4>Keyboard Navigation</h4>
      </caption>
      <thead>
        <tr style={row}>
          <th style={tdStyle}>Action</th>
          <th style={tdStyle}>Shortcut</th>
        </tr>
      </thead>
      <tbody>
        <tr style={row}>
          <td style={tdStyle}>Left Arrow, Page Up, Shift + Space</td>
          <td style={tdStyle}>Go to previous slide (or step in [Steps][])</td>
        </tr>
        <tr>
          <td style={tdStyle}>Right Arrow, Page Down, Space</td>
          <td style={tdStyle}>Go to next slide (or step in [Steps][])</td>
        </tr>
        <tr>
          <td style={tdStyle}>Option + P</td>
          <td style={tdStyle}>
            Toggle{" "}
            <a
              style={{ color: "rgb(173,219,103)" }}
              href="https://github.com/jxnblk/mdx-deck?tab=readme-ov-file#presenter-mode"
              target="_blank"
            >
              Presenter Mode
            </a>
          </td>
        </tr>
        <tr>
          <td style={tdStyle}>Option + O</td>
          <td style={tdStyle}>Toggle Overview Mode</td>
        </tr>
        <tr>
          <td style={tdStyle}>Option + G</td>
          <td style={tdStyle}>Toggle Grid Mode</td>
        </tr>
      </tbody>
    </table>
  );
};
