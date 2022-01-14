import Image from "next/image";
import styles from "../Login/login.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <body className={styles["text-center"]}>
        <main className={styles["form-login"]}>
          <form>
            <Image src="/rhino.jpg" alt="logo" width={100} height={100} />
            <h1 className="h3 mb-3 fw-normal">Please Login</h1>
            <div className="form-floating">
              <div class="input-group ">
                <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
              </div>
            </div>
            <div className="form-floating">
              <div class="input-group flex-nowrap">
                <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" />
              </div>
            </div>
            <div className="checkbox mb-3"></div>
            <Link href="/">
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Login
              </button>
            </Link>
            <p className="mt-5 mb-3 text-muted">EverNoteLite @2022</p>
          </form>
        </main>
      </body>
    </>
  );
}
