import Image from "next/image";
import styles from "../Register/register.module.css";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  //init
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");

  //handler
  const registerAccount = async () => {
    const register = await axios.post(`http://api.saltnote.my.id/auth/sign-up`, {
      email: email,
      password: password,
      fullname: fullname,
      phone: phone,
    });
    console.log(register);
    alert("Akun berhasil di daftarkan");
  };

  return (
    <>
      <body className={styles["text-center"]}>
        <main className={styles["form-login"]}>
          <form>
            <Image src="/rhino.jpg" alt="logo" width={100} height={100} />
            <h1 className="h3 mb-3 fw-normal">Please Fill the Blank</h1>
            <div className="form-floating">
              <div class="input-group ">
                <input type="email" class="form-control" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="form-floating">
              <div class="input-group flex-nowrap">
                <input type="password" class="form-control" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div class="input-group ">
                <input type="text" class="form-control" placeholder="Fullname" aria-label="fullname" aria-describedby="addon-wrapping" value={fullname} onChange={(e) => setFullname(e.target.value)} />
              </div>
              <div class="input-group ">
                <input type="text" class="form-control" placeholder="Phone" aria-label="phone" aria-describedby="addon-wrapping" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className="checkbox mb-3"></div>
            {/* <Link href="/App/Home"> */}
            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={registerAccount()}>
              SignUp
            </button>
            {/* </Link> */}
            <p className="mt-5 mb-3 text-muted">EverNoteLite @2022</p>
          </form>
        </main>
      </body>
    </>
  );
}
