// src/CodeBlock.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code, language }) => (
  <SyntaxHighlighter language={language} >
    {code}
  </SyntaxHighlighter>
);

export default CodeBlock;
