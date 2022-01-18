import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styles from "../../styles/Home.module.css";
import { useState } from "react";

export default function Content() {
  //init state
  const [state, setState] = useState({
    content: "",
  });

  console.log(data);
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <form>
          <div className="form-group">
            <label>Message</label>
            <textarea cols="25" rows="14" className="form-control" placeholder="Enter Message" />
          </div>
        </form>
      </div>
    </div>
  );
}
