import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function NoteCard() {
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <div className="card" style="width: 18rem;">
          <Image src="/gambar1.png" className="d-block mx-lg-auto img-fluid" alt="Gambar Utama" width={700} height={500} loading="lazy" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
