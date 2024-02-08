import ThiyoLogo from "../../../img/logofooter.25bbaa5d.png";
import Image from "next/image";
import Link from "next/link";
function Thiyoherder() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ padding: "20px", justifyContent: "space-around" }}
      >
        <div className="container">
          <Link href="/">
            <Image src={ThiyoLogo} alt="Thiyo Logo" width={100} height={50} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Buyers
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Property in Abu Dhabi{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Property in Sharejah
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Property in Ajmn
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Property in Ras Al Khaimah
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Property in Ras Al Ai{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Property in Umm Al Quwain{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Property in Fujairah{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Property in Jeble Ali{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Property in Hatta{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Tenants
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Tenants 01
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item border-0 dropdown Real_Estate">
              <a
                className="nav-link  gap-2  d-flex align-items-center"
                href="/Insights"
              >
                <p className="d-flex align-items-center justify-content-between w-100">
                  Insights
                </p>
              </a>
            </li>
            <li className="nav-item border-0 dropdown Real_Estate">
              <a
                className="nav-link  gap-2  d-flex align-items-center"
                href="/Holidayhomes"
              >
                <p className="d-flex align-items-center justify-content-between w-100">
                  Holiday Homes
                </p>
              </a>
            </li>
          </ul>
          <form className="d-flex ">
            <Link href="/listproperty">
              <button
                type="button"
                className="btn  primary position-relative"
              >
                List Property
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  FREE
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>

            <Link href="/loging" className="loging" replace>
              Log In
            </Link>
            <p>/</p>
            <Link href="/Register" className="loging" replace>
              Register
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Thiyoherder;
