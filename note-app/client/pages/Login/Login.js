import Image from "next/image";
import styles from "../Login/login.module.css";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function "loginHanlder"
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    console.log(data);
    //send data to server
    const login = await axios.post(`http://api.saltnote.my.id/auth/sign-in`, data).then((response) => {
      //set token on localStorage
      console.log(response);
      localStorage.setItem("token", response.data.data.token);
      window.location.assign("http://localhost:3000//App/Create");
    });
  };

  return (
    <>
      <body className={styles["text-center"]}>
        <main className={styles["form-login"]}>
          <form>
            <Image src="/rhino.jpg" alt="logo" width={100} height={100} />
            <h1 className="h3 mb-3 fw-normal">Please Login</h1>
            <div className="form-floating">
              <div className="input-group ">
                <input type="email" value={email} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="form-floating">
              <div className="input-group flex-nowrap">
                <input type="password" value={password} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="checkbox mb-3"></div>
            <Link href="/App/Create">
              <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={(e) => handleLogin(e)}>
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
