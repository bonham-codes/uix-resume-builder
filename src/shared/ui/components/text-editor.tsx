"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Italic from "@tiptap/extension-italic";
import React, { useState } from "react";

import { FaHeading } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface ToolbarButtonConfig {
  icon: React.ReactNode;
  command: () => void;
  isActive?: () => boolean;
}

export interface TextEditorProps {
  content?: string;
  onChange?: (content: string) => void;
  editorClassName?: string;
  extensions?: any[];
  showToolbar?: boolean;
  toolbarButtonClassName?: string;
  toolbarButtons?: (
    editor: ReturnType<typeof useEditor>
  ) => ToolbarButtonConfig[];
  showHeadingSelect?: boolean;
}

const TextEditor = ({
  content = "<p>Hello World!</p>",
  onChange,
  editorClassName = "",
  extensions = [],
  showToolbar = true,
  toolbarButtonClassName = "",
  toolbarButtons,
  showHeadingSelect = true,
}: TextEditorProps) => {
  const [headingLevel, setHeadingLevel] = useState(1);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        italic: false, 
      }),
      Italic,
      Underline,

      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
      }),
      ...extensions,
    ],
    content,
    
    editorProps: {
      attributes: {
        class: cn("focus:outline-none min-h-[250px]", editorClassName),
      },
    },

    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  const buttons: ToolbarButtonConfig[] = toolbarButtons?.(editor) ?? [];

  const renderButton = (
    icon: React.ReactNode,
    command?: () => void,
    isActive?: () => boolean,
    key?: React.Key
  ) => {
    const classes = cn(
      "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
      {
        "bg-gray-300 dark:bg-gray-600": isActive?.(),
      },
      toolbarButtonClassName
    );

    return (
      <button key={key} onClick={command} className={classes} type="button">
        {icon}
      </button>
    );
  };

  return (
    <div className="flex flex-col">
      {showToolbar && (

        <div className="flex flex-row flex-wrap gap-2 mb-2">
          {showHeadingSelect && (
            <div className="relative">
              <button className="p-2">
                <FaHeading />
              </button>

              <select
                value={headingLevel}
                onChange={(e) => {
                  const level = Number(e.target.value) as 1 | 2 | 3 | 4 | 5 | 6;
                  setHeadingLevel(level);
                  editor.chain().focus().toggleHeading({ level }).run();
                }}
                className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6].map((level) => (
                  <option key={level} value={level}>
                    H{level}
                  </option>
                ))}

              </select>
            </div>
          )}

          {buttons.map(({ icon, command, isActive }, i) =>
            renderButton(icon, command, isActive, i)
          )}
        </div>
      )}

      <EditorContent
        editor={editor}
        className="prose-editor border rounded-lg p-2"
      />
    </div>
  );
};

export default TextEditor;
