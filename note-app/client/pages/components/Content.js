import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";

export default function Content() {
  const [state, setState] = useState({
    content: "",
  });

  const handleChange = (event, editor) => {
    const data = editor.getData();

    setState({
      content: data,
    });
    // console.log(data);
  };

  console.log("STATE", state);

  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <div className="App" value={state.content}>
          <h2>Using CKEditor 5 build in React</h2>
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
              plugins: {
                ckfinder: {
                  uploadUrl: "/uploads",
                },
              },
              // ckfinder: {
              //   uploadUrl: "/uploads",
              // },
            }}
            onChange={handleChange}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
      </div>
    </div>
  );
}
