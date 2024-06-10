import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./App.css";

const App = () => {
  const initialMarkdown = `
# Welcome to the Markdown Previewer!

## This is a sub-heading

[Link to GitHub](https://github.com)

\`inline code\`

\`\`\`
code block
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
  `;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
    <div className="app-container">
      <div className="header">Markdown Previewer</div>
      <div className="content-container">
        <Editor markdown={markdown} onMarkdownChange={setMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
