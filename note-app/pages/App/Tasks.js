import Header from "../../components/header";
import Link from "next/link";

export default function Tasks() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link href="./home">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./shortcuts">
                    <a className="nav-link">Shortcuts</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./notes">
                    <a className="nav-link">Notes</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./tasks">
                    <a className="nav-link-active">Tasks</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
