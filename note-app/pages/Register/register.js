import Image from "next/image";
import styles from "../Register/register.module.css";

console.log(styles);
export default function Register() {
  return (
    <>
      <body className={styles["text-center"]}>
        <main className={styles["form-login"]}>
          <form>
            <Image src="/rhino.jpg" alt="logo" width={100} height={100} />
            <h1 className="h3 mb-3 fw-normal">Please Fill the Blank</h1>
            <div className="form-floating">
              <div class="input-group ">
                <input type="text" class="form-control" placeholder="Username" aria-label="username" aria-describedby="addon-wrapping" />
              </div>
              <div class="input-group ">
                <input type="email" class="form-control" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping" />
              </div>
            </div>
            <div className="form-floating">
              <div class="input-group flex-nowrap">
                <input type="password" class="form-control" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping" />
              </div>
            </div>
            <div className="checkbox mb-3"></div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              SignUp
            </button>
            <p className="mt-5 mb-3 text-muted">EverNoteLite @2022</p>
          </form>
        </main>
      </body>
    </>
  );
}
