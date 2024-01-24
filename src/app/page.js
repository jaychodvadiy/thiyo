import Image from "next/image";
import "../../css/thiyo.css";
import ThiyoLogo from "../../img/thiyologo.png";
import home from "../../img/pexelsexpect.png";

export default function Home() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ padding: "20px", justifyContent: "space-around" }}
      >
        <div className="container">
          <Image src={ThiyoLogo} alt="Thiyo Logo" width={100} height={50} />
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
                {" "}
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
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                {" "}
                Insights{" "}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Holiday Homes
              </a>
            </li>
          </ul>
          <form class="d-flex ">
            <p class=" btn-outline-success" type="submit">
              Log In/
            </p>
            <p class=" btn-outline-success" type="submit">
              Register
            </p>
          </form>
        </div>
      </nav>
      <section className="pagerent">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="hero">
                Discover properties globally for sale and to rent
              </h1>
              <div className="primary-table">
                <ul className="nav nav-pills" id="pllis-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      class="text-white search active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Property Search
                    </button>
                  </li>
                </ul>
                <div className="top-content" id="pllis-tabContent">
                  <div className="tap-content">
                    <div className="serching">
                      <div className="serchingtop">
                        <div className="dropdown primary-dropdown">
                          <button className="btn w-100 dropdown-toggle d-flex align-items-center gap-2">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.13654 1.31658L1.44786 3.41166C0.99891 3.76084 0.634766 4.50409 0.634766 5.06777V8.76408C0.634766 9.92136 1.57755 10.8691 2.73483 10.8691H8.51126C9.66854 10.8691 10.6113 9.92136 10.6113 8.76907V5.1376C10.6113 4.53402 10.2073 3.76084 9.71344 3.41664L6.63068 1.25672C5.93232 0.767867 4.80996 0.792809 4.13654 1.31658Z" stroke="#686868" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.86836 8.13086L5.77328 6.03578L4.97516 7.23297L3.37891 5.63672" stroke="#686868" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.86914 8.13047H7.8668V7.13281" stroke="#686868" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                          "Rent"
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src={home}
                alt="home"
                className="homes"
                width={424}
                height={407}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
