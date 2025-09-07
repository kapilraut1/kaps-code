import React, {useState} from "react";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt, faExpandAlt} from '@fortawesome/free-solid-svg-icons'

const Editor = ({ language, displayName, value, onChange }) => {
  const getExtension = () => {
    switch (language) {
      case "xml":
        return html();
      case "css":
        return css();
      case "javascript":
        return javascript();
      default:
        return [];
    }
  };

  const [open, setOpen] = useState(true);

  return (
    <div className={`editor-container ${open? '':'collapsed' }`}>
      <div className="editor-title">
        {displayName}
        <button onClick={()=> setOpen(prevOpen => !prevOpen)}><FontAwesomeIcon icon={open? faCompressAlt: faExpandAlt} /></button>
      </div>
      <CodeMirror
        value={value}
        height="500px"
        theme={oneDark}
        extensions={[getExtension()]}
        onChange={(value) => onChange(value)}
      />
    </div>
  );
};

export default Editor;
