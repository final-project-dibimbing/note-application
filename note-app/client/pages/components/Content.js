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
            <Button type="submit" color="secondary" variant="contained">
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
