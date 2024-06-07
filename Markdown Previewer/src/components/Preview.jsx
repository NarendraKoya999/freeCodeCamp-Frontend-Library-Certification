import React from "react";
import { marked } from "marked";

const Preview = ({ markdown }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true });
    return { __html: rawMarkup };
  };

  return (
    <div
      id="preview"
      className="preview-container"
      dangerouslySetInnerHTML={getMarkdownText()}
    />
  );
};

export default Preview;
