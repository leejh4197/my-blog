import { CopyBlock, dracula } from "react-code-blocks";

const WriteCodeBlock = () => {
  const codeText = "print('GeeksforGeeks')";
  return (
    <div>
      <h3>GeeksforGeeks Code</h3>
      <CopyBlock
        text="print('GeeksforGeeks')"
        language="python"
        showLineNumbers="true"
        wrapLines
        theme={dracula}
      />
    </div>
  );
};

export default WriteCodeBlock;
