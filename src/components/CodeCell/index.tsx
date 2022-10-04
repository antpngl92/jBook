import { FC } from "react";
import { useState, useEffect } from "react";

import { CodeEditor, CodePreview, Resizable } from "components";
import bundle from "bundler";
import { ICell } from "state/cell";
import { useActions } from "hooks/use-actions";

interface Props {
  cell: ICell;
}

const CodeCell: FC<Props> = ({ cell }) => {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setErr(output.err);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <CodePreview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
