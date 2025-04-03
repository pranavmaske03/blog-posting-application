import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import config from "../config/config";

export default function RTE({ name = "content", control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey= {config.appwriteTinyMCE}
            value={value} // Ensure it's controlled properly
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist", "autolink", "lists", "link", "image", "charmap",
                "preview", "anchor", "searchreplace", "visualblocks", "code",
                "fullscreen", "insertdatetime", "media", "table", "help", "wordcount"
              ],
              toolbar:
                "undo redo | blocks | bold italic underline | forecolor backcolor | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange} // Update value properly
          />
        )}
      />
    </div>
  );
}
