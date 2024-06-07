import React from "react";

const Editor = ({ markdown, onMarkdownChange }) => {
  return (
    <div className="editor-container">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => onMarkdownChange(e.target.value)}
      />
    </div>
  );
};

export default Editor;
