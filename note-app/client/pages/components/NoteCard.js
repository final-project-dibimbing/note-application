import styles from "../../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NoteCard({ post }) {
  const linkUpdate = `/App/Update/${post.id}`;
  //axios.delete(url[, config])
  // const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const handleDelete = async (e) => {
    e.preventDefault();

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const update = await axios
      .delete(`http://api.saltnote.my.id/notes/delete?id=${post.id}`, config)
      .then((response) => {
        console.log(response);
      })
      .catch();
  };

  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link href={linkUpdate}>
            <button>Update</button>
          </Link>
          <button onClick={(e) => handleDelete(e)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
