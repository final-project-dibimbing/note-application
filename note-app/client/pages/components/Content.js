import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function Content() {
  const [content, setContent] = useState("");

  const handleChange = (event, editor) => {
    const data = editor.getData();
    // console.log(event, editor);
    setContent(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content) {
      console.log(content);
    }
  };

  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <div className="App">
          <h2>Using CKEditor 5 build in React</h2>
          <form noValidate autoComplete="off" onClick={handleSubmit}>
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              config={{
                // plugins: { CKFinder : {
                //   uploadUrl: "/uploads",
                // } },
                // plugins: {
                //   ckfinder: {
                //     uploadUrl: "/uploads",
                //   },
                // },
                ckfinder: {
                  uploadUrl: "/uploads",
                },
              }}
              onChange={handleChange}
            />
            <Button type="submit" color="secondary" variant="contained">
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
