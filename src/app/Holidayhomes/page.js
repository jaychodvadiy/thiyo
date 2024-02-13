import React from "react";
import ThiyoLogo from "../../../img/logofooter.25bbaa5d.png";
import Image from "next/image";
import AllCities from "../../../img/All_Cities.737b46d4.png";
import hhcad from "../../../img/hh-canada.922d05fe.png"
import heroo from "../../../img/Expand More.ea981875.svg"
import last from "../../../img/hh-lastmin.4f2e6cf9.png"
import trip from "../../../img/hh-longtrip.7b053a61.png"
import topu from "../../../img/popularimg.01c79eff.png"
import tover from "../../../img/popularimage1.c165ef35.png"
import usetover from "../../../img/popularimage2.630319c9.png"
import uset from "../../../img/popularimage3.9974f814.png"
import india from "../../../img/India.6bd8d5b4.png"
import indonesia from "../../../img/Indonesia.77edb696.png"
import malaysia from "../../../img/Malaysia.c958bd07.png"
import brazil from "../../../img/Brazil.e67d55a5.png"
import united from "../../../img/UnitedKingdom.b74f6cff.png"
import japan from "../../../img/Japan.7474ae51.png"
import denmark from "../../../img/Denmark.69ce6c98.png"
import srilanka from "../../../img/Sri Lanka.e783e523.png"
import china from "../../../img/China.c6b95b3e.png"
import uae from "../../../img/United Arab Emirates.8913e932.png"
import nepal from "../../../img/Nepal.f205f2c6.png"
import mexico from "../../../img/Mexico.bf2a8c68.png"
import philippines from "../../../img/Philippines.5f74ce3c.png"
import saudiarabia from "../../../img/Saudi Arabia.22be3a11.png"
import norway from "../../../img/Norway.9fea462c.png"
import unitedstates from "../../../img/United States.6cad9a9c.png"
import iconse from "../../../img/IconInput.fcdc7489.svg"

function Page() {
  return (
    <div>
      {/* herder */}
      <section>
        <div className="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="/">
                <Image
                  alt="Image"
                  loading="lazy"
                  width="120"
                  height="30"
                  decoding="async"
                  data-nimg="1"
                  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.7765a861.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.7765a861.png&amp;w=256&amp;q=75 2x"
                  src={ThiyoLogo}
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="d-flex align-items-center">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon fs-6"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ms-lg-0 me-lg-auto mb-2 mb-lg-0 align-items-start">
                  <li className="nav-item">
                    <a
                      className="nav-link  gap-2 d-flex align-items-center"
                      href="#"
                    >
                      <p className="d-flex align-items-center justify-content-between w-100">
                        UAE
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  gap-2  d-flex align-items-center"
                      href="#"
                    >
                      <p className="d-flex align-items-center justify-content-between w-100">
                        Europe
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  gap-2  d-flex align-items-center"
                      href="#"
                    >
                      <p className="d-flex align-items-center justify-content-between w-100">
                        India
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  gap-2  d-flex align-items-center"
                      href="#"
                    >
                      <p className="d-flex align-items-center justify-content-between w-100">
                        UK
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  gap-2  d-flex align-items-center"
                      href="#"
                    >
                      <p className="d-flex align-items-center justify-content-between w-100">
                        USA
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  gap-2  d-flex align-items-center"
                      href="#"
                    >
                      <p className="d-flex align-items-center justify-content-between w-100">
                        Mexico
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  gap-2  d-flex align-items-center"
                      href="#"
                    >
                      <p className="d-flex align-items-center justify-content-between w-100">
                        China
                      </p>
                    </a>
                  </li>
                  <li className="nav-item dropdown Real_Estate">
                    <a
                      className="nav-link  gap-2  d-flex align-items-center"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      <p className="d-flex align-items-center justify-content-between w-100">
                        <div className="d-flex align-items-center gap-2">
                          <Image className="m-0" src={AllCities} alt="Real_Estate" />
                          All Cities
                        </div>
                      </p>
                      <div className="d-none d-lg-block">
                        <svg
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.40678 0.847656L4.81641 4.25729L8.22604 0.847656L9.27344 1.90249L4.81641 6.35952L0.359375 1.90249L1.40678 0.847656Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div className="d-block d-lg-none">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 5 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.67934 4.65667L3.29181 3.0674L1.70254 1.45494L2.20136 0.966759L4.27883 3.07456L2.17104 5.15203L1.67934 4.65667Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M1.67934 4.65667L3.29181 3.0674L1.70254 1.45494L2.20136 0.966759L4.27883 3.07456L2.17104 5.15203L1.67934 4.65667Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M1.09922 3.76447L1.80746 3.06643L1.10941 2.35819L1.3285 2.14377L2.24098 3.06957L1.31519 3.98204L1.09922 3.76447Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M1.09922 3.76447L1.80746 3.06643L1.10941 2.35819L1.3285 2.14377L2.24098 3.06957L1.31519 3.98204L1.09922 3.76447Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M0.457905 3.45756L0.853242 3.06791L0.463593 2.67257L0.585891 2.55288L1.09524 3.06966L0.578456 3.579L0.457905 3.45756Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <div className="row">
                        <div className="col-6 p-0">
                          <li>
                            <a className="dropdown-item" href="#">
                              Bangalore
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Chennai
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Delhi
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Gurgaon
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Hyderabad
                            </a>
                          </li>
                        </div>
                        <div className="col-6 p-0">
                          <li>
                            <a className="dropdown-item" href="#">
                              Kolkata
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Mumbai
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Noida
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Pune
                            </a>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="nav-item d-flex d-lg-none dropdown">
                    <div
                      className="mobilelogin button p-0 d-flex px-2"
                      id="dropdownMenuButton1"
                      aria-expanded="false"
                    >
                      <div className="cursor-pointer">Log in </div>/
                      <div className="cursor-pointer">Register </div>
                    </div>
                  </li>
                </ul>
                <div className="d-flex">
                  <form className="d-flex align-items-center" role="search">
                    <div className="dropdown d-none d-lg-block">
                      <div
                        className="useractive button p-0 d-flex gap-2"
                        id="dropdownMenuButton1"
                        aria-expanded="false"
                      >
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.14332 9.58951H8.03378C6.57106 9.5444 5.47564 8.40387 5.47564 6.99915C5.47564 5.56865 6.64194 4.40234 8.07244 4.40234C9.50294 4.40234 10.6692 5.56865 10.6692 6.99915C10.6706 7.67218 10.4095 8.31922 9.94149 8.80288C9.47347 9.28654 8.83536 9.56872 8.16265 9.58951H8.14332ZM8.066 5.36245C7.16388 5.36245 6.43575 6.09703 6.43575 6.99271C6.4338 7.41462 6.59615 7.82072 6.88842 8.12501C7.18069 8.42931 7.57991 8.60789 8.00156 8.62296C8.05073 8.61616 8.1006 8.61616 8.14977 8.62296C8.56718 8.6007 8.96018 8.41926 9.24786 8.11599C9.53555 7.81273 9.69602 7.41071 9.69625 6.99271C9.69625 6.09703 8.96811 5.36245 8.066 5.36245ZM8.066 15.5306C6.33265 15.5306 4.67662 14.8862 3.39433 13.7135C3.33886 13.6624 3.29601 13.5992 3.26918 13.5287C3.24234 13.4583 3.23224 13.3825 3.23968 13.3075C3.32345 12.5407 3.80028 11.8255 4.59285 11.2971C6.51307 10.0212 9.62537 10.0212 11.5391 11.2971C12.3317 11.8319 12.8086 12.5407 12.8923 13.3075C12.9116 13.4622 12.8537 13.6104 12.7377 13.7135C11.4632 14.8833 9.79593 15.5318 8.066 15.5306ZM4.25134 13.1786C5.32052 14.0745 6.67113 14.565 8.066 14.564C9.46428 14.564 10.811 14.0743 11.8807 13.1786C11.7647 12.7856 11.4554 12.4054 10.9979 12.0961C9.41273 11.0393 6.72571 11.0393 5.12768 12.0961C4.67018 12.4054 4.36732 12.7856 4.25134 13.1786Z"
                            fill="black"
                          ></path>
                          <path
                            d="M8.06661 15.5297C4.2455 15.5297 1.13965 12.4238 1.13965 8.60274C1.13965 4.78164 4.2455 1.67578 8.06661 1.67578C11.8877 1.67578 14.9936 4.78164 14.9936 8.60274C14.9936 12.4238 11.8877 15.5297 8.06661 15.5297ZM8.06661 2.64233C4.78033 2.64233 2.1062 5.31646 2.1062 8.60274C2.1062 11.889 4.78033 14.5632 8.06661 14.5632C11.3529 14.5632 14.027 11.889 14.027 8.60274C14.027 5.31646 11.3529 2.64233 8.06661 2.64233Z"
                            fill="black"
                          ></path>
                        </svg>
                        <div className="d-flex text-capitalize">
                          <div className="cursor-pointer btnlogin">Log in </div>/
                          <div className="cursor-pointer btnlogin">Register </div>
                        </div>
                      </div>
                      <ul
                        className="dropdown-menu userlist"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a
                            className="dropdown-item mb-3 py-0 viewprofile"
                            href="#"
                          >
                            You are viewing your personal profile
                          </a>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.5152 10.941C12.4152 10.931 12.2952 10.931 12.1852 10.941C11.0374 10.9021 9.94984 10.4179 9.15282 9.59099C8.35581 8.76412 7.91194 7.65949 7.9152 6.51103C7.9152 4.06103 9.8952 2.07103 12.3552 2.07103C12.9376 2.06053 13.5164 2.16484 14.0585 2.37801C14.6006 2.59119 15.0954 2.90905 15.5146 3.31345C15.9339 3.71785 16.2694 4.20086 16.502 4.73492C16.7346 5.26898 16.8597 5.84362 16.8702 6.42603C16.8807 7.00845 16.7764 7.58723 16.5632 8.12932C16.35 8.67142 16.0322 9.16623 15.6278 9.58548C15.2234 10.0047 14.7404 10.3402 14.2063 10.5728C13.6722 10.8054 13.0976 10.9305 12.5152 10.941ZM7.5152 14.631C5.0952 16.251 5.0952 18.891 7.5152 20.501C10.2652 22.341 14.7752 22.341 17.5252 20.501C19.9452 18.881 19.9452 16.241 17.5252 14.631C14.7852 12.801 10.2752 12.801 7.5152 14.631Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <a className="mb-2 fw-semibold" href="/dashboard">
                                My Profile
                              </a>
                              <p>
                                Manage your profile, traveller details, login
                                details and password
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.8555 12.6641C18.8555 10.9402 18.1706 9.28685 16.9517 8.06787C15.7327 6.84888 14.0794 6.16406 12.3555 6.16406C10.6316 6.16406 8.97826 6.84888 7.75927 8.06787C6.54029 9.28685 5.85547 10.9402 5.85547 12.6641"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M5.34547 5.65406L5.21547 5.52406M19.3655 5.65406L19.4955 5.52406M12.3555 2.74406V2.66406M2.43547 12.6641H2.35547M22.3555 12.6641H22.2755"
                                  stroke="black"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M4.35547 15.6641H20.3555M6.35547 18.6641H18.3555M9.35547 21.6641H15.3555"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  stroke-miterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2 cursor-pointer">My Trips</h3>
                              <p>
                                See booking details, Print e-ticket, Cancel
                                Booking, Modify Booking, Check Refund Status
                                &amp; more.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.3555 11.8686H7.35547M2.35547 11.8686V7.24859C2.35547 5.20859 4.00547 3.55859 6.04547 3.55859H11.6655C13.7055 3.55859 15.3555 4.82859 15.3555 6.86859"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M17.8355 12.9172C17.3355 13.3972 17.0955 14.1372 17.2955 14.8972C17.5455 15.8272 18.4655 16.4172 19.4255 16.4172H20.3555V17.8672C20.3555 20.0772 18.5655 21.8672 16.3555 21.8672H6.35547C4.14547 21.8672 2.35547 20.0772 2.35547 17.8672V10.8672C2.35547 8.65719 4.14547 6.86719 6.35547 6.86719H16.3555C18.5555 6.86719 20.3555 8.66719 20.3555 10.8672V12.3172H19.2755C18.7155 12.3172 18.2055 12.5372 17.8355 12.9172Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M22.3557 13.3403V15.4003C22.3557 15.9603 21.8957 16.4203 21.3257 16.4203H19.3957C18.3157 16.4203 17.3257 15.6303 17.2357 14.5503C17.1757 13.9203 17.4157 13.3303 17.8357 12.9203C18.2057 12.5403 18.7157 12.3203 19.2757 12.3203H21.3257C21.8957 12.3203 22.3557 12.7803 22.3557 13.3403Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2 cursor-pointer">My Wallet</h3>
                              <p>
                                See booking details, Print e-ticket, Cancel
                                Booking, Modify Booking, Check Refund Status
                                &amp; more.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.73535 11.9981L11.1454 14.4181L15.9754 9.57812"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M11.1054 2.45031C11.7954 1.86031 12.9254 1.86031 13.6254 2.45031L15.2054 3.81031C15.5054 4.07031 16.0654 4.28031 16.4654 4.28031H18.1654C19.2254 4.28031 20.0954 5.15031 20.0954 6.21031V7.91031C20.0954 8.30031 20.3054 8.87031 20.5654 9.17031L21.9254 10.7503C22.5154 11.4403 22.5154 12.5703 21.9254 13.2703L20.5654 14.8503C20.3054 15.1503 20.0954 15.7103 20.0954 16.1103V17.8103C20.0954 18.8703 19.2254 19.7403 18.1654 19.7403H16.4654C16.0754 19.7403 15.5054 19.9503 15.2054 20.2103L13.6254 21.5703C12.9354 22.1603 11.8054 22.1603 11.1054 21.5703L9.52535 20.2103C9.22535 19.9503 8.66535 19.7403 8.26535 19.7403H6.53535C5.47535 19.7403 4.60535 18.8703 4.60535 17.8103V16.1003C4.60535 15.7103 4.39535 15.1503 4.14535 14.8503L2.79535 13.2603C2.21535 12.5703 2.21535 11.4503 2.79535 10.7603L4.14535 9.17031C4.39535 8.87031 4.60535 8.31031 4.60535 7.92031V6.20031C4.60535 5.14031 5.47535 4.27031 6.53535 4.27031H8.26535C8.65535 4.27031 9.22535 4.06031 9.52535 3.80031L11.1054 2.45031Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2 cursor-pointer">
                                Make a payment
                              </h3>
                              <p>Complete your pending payments here</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.3554 6.53766V9.86766M12.3754 2.09766C8.69537 2.09766 5.71537 5.07766 5.71537 8.75766V10.8577C5.71537 11.5377 5.43537 12.5577 5.08537 13.1377L3.81537 15.2577C3.03537 16.5677 3.57537 18.0277 5.01537 18.5077C9.79665 20.0976 14.9641 20.0976 19.7454 18.5077C20.0609 18.4024 20.3487 18.2276 20.5875 17.9962C20.8264 17.7648 21.0102 17.4827 21.1254 17.1707C21.2406 16.8587 21.2843 16.5248 21.2531 16.1937C21.2219 15.8626 21.1168 15.5427 20.9454 15.2577L19.6754 13.1377C19.3254 12.5577 19.0454 11.5277 19.0454 10.8577V8.75766C19.0354 5.09766 16.0354 2.09766 12.3754 2.09766Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  stroke-miterlimit="10"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M15.6854 18.918C15.6854 20.748 14.1854 22.248 12.3554 22.248C11.4454 22.248 10.6054 21.868 10.0054 21.268C9.40539 20.668 9.02539 19.828 9.02539 18.918"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  stroke-miterlimit="10"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2 cursor-pointer">Manage Alerts</h3>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.2422 8.83203H19.2422M15.2422 12.832H19.2422M17.2422 16.832H19.2422M17.2422 21.832H7.24219C3.24219 21.832 2.24219 20.832 2.24219 16.832V8.83203C2.24219 4.83203 3.24219 3.83203 7.24219 3.83203H17.2422C21.2422 3.83203 22.2422 4.83203 22.2422 8.83203V16.832C22.2422 20.832 21.2422 21.832 17.2422 21.832Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12.2422 17.1639C12.1749 16.462 11.8641 15.8057 11.3636 15.3089C10.8631 14.8121 10.2046 14.5061 9.50219 14.4439C8.99675 14.3939 8.48762 14.3939 7.98219 14.4439C7.28045 14.5079 6.62297 14.8146 6.12288 15.311C5.62279 15.8074 5.31137 16.4627 5.24219 17.1639M8.74219 12.1239C9.22223 12.1239 9.68261 11.9332 10.0221 11.5938C10.3615 11.2543 10.5522 10.7939 10.5522 10.3139C10.5522 9.83386 10.3615 9.37348 10.0221 9.03404C9.68261 8.6946 9.22223 8.50391 8.74219 8.50391C8.26215 8.50391 7.80176 8.6946 7.46232 9.03404C7.12288 9.37348 6.93219 9.83386 6.93219 10.3139C6.93219 10.7939 7.12288 11.2543 7.46232 11.5938C7.80176 11.9332 8.26215 12.1239 8.74219 12.1239Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2 cursor-pointer">My Reviews</h3>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3 cursor-pointer">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.8011 15.3973L20.3611 12.8373L17.8011 10.2773M10.1211 12.8373H20.2911M12.1211 20.7773C7.70109 20.7773 4.12109 17.7773 4.12109 12.7773C4.12109 7.77734 7.70109 4.77734 12.1211 4.77734"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  stroke-miterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2">Logout</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>

      {/*  */}

      <section>
        <div>
          <div className="holidaybannerbg">
            <section className="holidaybanner holidaybannercard">
              <div className="container">
                <div className="row ">
                  <div className="col-12 banner-content">
                    <h2>Find your next stay</h2>
                    <p>
                      Over 180,000 hotels and holiday homes across 20+ countries
                    </p>
                  </div>
                  <div className="col-12">
                    <div className="bannerinputmain">
                      <div className="icon-input align-items-center">
                        <div>
                          <div className="searchLocation">
                            <svg
                              width="10"
                              height="13"
                              viewBox="0 0 10 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.22282 1.33464C6.50615 1.33464 7.55615 2.38464 7.55615 3.66797C7.55615 4.89297 6.33115 6.8763 5.22282 8.2763C4.11449 6.81797 2.88949 4.89297 2.88949 3.66797C2.88949 2.38464 3.93949 1.33464 5.22282 1.33464ZM5.22282 0.167969C3.29782 0.167969 1.72282 1.74297 1.72282 3.66797C1.72282 6.29297 5.22282 10.0846 5.22282 10.0846C5.22282 10.0846 8.72282 6.23464 8.72282 3.66797C8.72282 1.74297 7.14782 0.167969 5.22282 0.167969ZM5.22282 2.5013C4.58115 2.5013 4.05615 3.0263 4.05615 3.66797C4.05615 4.30964 4.58115 4.83464 5.22282 4.83464C5.86449 4.83464 6.38949 4.30964 6.38949 3.66797C6.38949 3.0263 5.86449 2.5013 5.22282 2.5013ZM9.88949 10.0846C9.88949 11.368 7.78949 12.418 5.22282 12.418C2.65615 12.418 0.556152 11.368 0.556152 10.0846C0.556152 9.3263 1.25615 8.68464 2.36449 8.21797L2.71449 8.74297C2.13115 9.03464 1.72282 9.38463 1.72282 9.79297C1.72282 10.6096 3.29782 11.2513 5.22282 11.2513C7.14782 11.2513 8.72282 10.6096 8.72282 9.79297C8.72282 9.38463 8.31449 9.03464 7.67282 8.74297L8.02282 8.21797C9.18948 8.68464 9.88949 9.3263 9.88949 10.0846Z"
                                fill="#686868"
                              ></path>
                            </svg>
                            <div className="multi_select">
                              <div className="dropdown css-b62m3t-container">
                                <span
                                  id="react-select-14-live-region"
                                  className="css-7pg0cj-a11yText"
                                ></span>
                                <span
                                  aria-live="polite"
                                  aria-atomic="false"
                                  aria-relevant="additions text"
                                  className="css-7pg0cj-a11yText"
                                ></span>
                                <div className=" css-13cymwt-control">
                                  <div className=" css-hlgwow">
                                    <div
                                      className=" css-1jqq78o-placeholder"
                                      id="react-select-14-placeholder"
                                    >
                                      Enter Location
                                    </div>
                                    <div className=" css-19bb58m" data-value="">
                                      <input
                                        className=""
                                        autocapitalize="none"
                                        autoComplete="off"
                                        autoCorrect="off"
                                        id="react-select-14-input"
                                        spellCheck="false"
                                        tabIndex="0"
                                        aria-autocomplete="list"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                        role="combobox"
                                        aria-describedby="react-select-14-placeholder"
                                        type="text"
                                        value=""
                                        style={{
                                          color: "inherit",
                                          background: "0px center",
                                          opacity: 1,
                                          width: "100%",
                                          gridArea: "1 / 2",
                                          font: "inherit",
                                          minWidth: "2px",
                                          border: "0px",
                                          margin: "0px",
                                          outline: "0px",
                                          padding: "0px",
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className=" css-1wy0on6">
                                    <span className=" css-1u9des2-indicatorSeparator"></span>
                                    <div
                                      className=" css-1xc3v61-indicatorContainer"
                                      aria-hidden="true"
                                    >
                                      <svg
                                        height="20"
                                        width="20"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                        focusable="false"
                                        className="css-8mmkcg"
                                      >
                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <svg
                              className="SearchLocationDownArrow"
                              width="10"
                              height="6"
                              viewBox="0 0 10 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.14016 0L4.85175 3.71159L8.56334 0L9.7035 1.14825L4.85175 6L0 1.14825L1.14016 0Z"
                                fill="#69717E"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <Image
                          src={iconse}
                          className="img-fluid"
                          alt="icon"
                        />
                      </div>
                      <div
                        className="rmdp-container "
                        style={{
                          display: "inline-block",
                          height: "max-content",
                        }}
                      >
                        <input
                          className="rmdp-input"
                          placeholder="Check In  / Check Out"
                          autoComplete="off"
                          inputmode="none"
                          type="text"
                          value=""
                        />
                        <div
                          className=""
                          style={{
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            willChange: "transform",
                            visibility: "hidden",
                            zIndex: 100,
                          }}
                        >
                          <div></div>
                        </div>
                      </div>
                      <div className="btn-group addRoomDrop">
                        <button type="button" className="btn">
                          1 Rooms, 1 Guests
                        </button>
                        <div></div>
                      </div>
                      <button
                        className="holidaysearch d-flex align-items-center gap-2"
                        type="button"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.92578 1.79688C5.78773 1.79688 6.61439 2.11075 7.22388 2.66945C7.83337 3.22815 8.17578 3.98592 8.17578 4.77604C8.17578 5.51396 7.88078 6.19229 7.39578 6.71479L7.53078 6.83854H7.92578L10.4258 9.13021L9.67578 9.81771L7.17578 7.52604V7.16396L7.04078 7.04021C6.47078 7.48479 5.73078 7.75521 4.92578 7.75521C4.06383 7.75521 3.23718 7.44133 2.62768 6.88263C2.01819 6.32393 1.67578 5.56617 1.67578 4.77604C1.67578 3.98592 2.01819 3.22815 2.62768 2.66945C3.23718 2.11075 4.06383 1.79688 4.92578 1.79688ZM4.92578 2.71354C3.67578 2.71354 2.67578 3.63021 2.67578 4.77604C2.67578 5.92188 3.67578 6.83854 4.92578 6.83854C6.17578 6.83854 7.17578 5.92188 7.17578 4.77604C7.17578 3.63021 6.17578 2.71354 4.92578 2.71354Z"
                            fill="white"
                          ></path>
                        </svg>
                        Search
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <ul>
                        <div className="title">Popular Search :</div>
                        <li>Goa 1 Guest</li>
                        <li>Jaipur 1 Guest</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section id="feature-home" className="feature-home-main">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center section-header-main">
                  <p className="featurehome">FEATURED HOMES</p>
                  <h2 className="">
                    Explore our latest properties for sale and to rent
                  </h2>
                  <p className="exploredescription">
                    Discover a range of homes available for sale and rent on our
                    platform. From luxurious apartments to spacious houses, our
                    collection features the latest listings in sought-after
                    locations. Browse through our extensive inventory and find
                    the perfect home that meets your preferences and budget. Our
                    dedicated team is here to assist you every step of the way.
                    Start your search today and unlock the door to your ideal
                    property.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="nav-align-top tabcountry cstm-tab-main-feature-home">
                    <ul className="nav nav-pills nav-fill" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          type="button"
                          className="nav-link active"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#abu-dhabi"
                          aria-controls="abu-dhabi"
                          aria-selected="true"
                        >
                          ABU DHABI
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#dubai"
                          aria-controls="dubai"
                          aria-selected="false"
                          tabIndex="-1"
                        >
                          DUBAI
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#sharjha"
                          aria-controls="sharjha"
                          aria-selected="false"
                          tabIndex="-1"
                        >
                          SHARJAH
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#ajman"
                          aria-controls="ajman"
                          aria-selected="false"
                          ndex="-1"
                        >
                          AJMAN
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content propertyslider  cstm-tab-content-feature-home">
                      <div
                        className="tab-pane fade show active"
                        id="abu-dhabi"
                        role="tabpanel"
                      >
                        <div className="countryfeaturehome">
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/765/d49eb2b69f7a5e37.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>3</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 1143.75</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">
                                OYO Hotel Orion Near Immaculate Conception
                                Church
                              </p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">Porvorim NH-17, Goa</p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Card payment
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+7 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/730/1e7cf9e4784d1935.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>3</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 1108.04</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">
                                OYO Hotel Le Pearl Near Anjuna Beach
                              </p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Near Anjuna Petrol Pump Bus Stop, Vagator, Goa
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Card payment
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+10 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/767/61f126b6d12b2f19.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>7</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 1108.04</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">OYO Om Shiv Hotel Near Big G</p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Near City Hospital, Madgaon, Goa
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+9 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/779/ba83ebbdbddd6602.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>13</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 595.54</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">
                                OYO Royal Heritage Resort Near Calangute Beach
                              </p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Near Dominos Pizza, Calangute, Goa
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Private entrance
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Reception
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+15 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/769/3d54d90891e19939.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>5</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 1143.75</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">OYO Hotel The Queeny</p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Near Queeny Nagar, Vasco Da Gama, Goa
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+10 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="dubai" role="tabpanel">
                        <div className="countryfeaturehome">
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/136/95fd583d3e5aa829.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>8</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 578.57</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">
                                OYO Apartment Powai Near R City Mall
                              </p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Near Cafe Coffee Day, Powai, Mumbai
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Elevator
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+7 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/288/bd678240a00c0227.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>28</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 557.14</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">
                                OYO Hotel Tuliip Residency Near Chhatrapati
                                Shivaji International Airport
                              </p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Powai Andheri East, Mumbai
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Elevator
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+2 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/501/fc6b9a601eec694c.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>11</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 589.29</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">
                                OYO Hotel Whitefield Near Airport Road Metro
                                Station
                              </p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">Andheri East, Mumbai</p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+5 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/546/9a60fe42732a80ab.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>22</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 1108.04</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">
                                OYO Hotel Suncity Residency Near Chhatrapati
                                Shivaji International Airport
                              </p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Near Seepz, Andheri East, Mumbai
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+10 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/542/4aa08755b6959c0c.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>16</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 610.71</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">
                                OYO Hotel Jayshree Near Juhu Beach
                              </p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Near Hanuman Mandir , Vile Parle East, Mumbai
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+11 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="sharjha" role="tabpanel">
                        <div className="countryfeaturehome">
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/1106/dd5152d40368ff3e.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>3</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 1108.04</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">OYO Eutopia</p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Near Bahara University, Solan, Shimla
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+10 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/12837/6e783bef27c03da5.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>8</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 491.07</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">
                                OYO Flagship 7670 Hotel Rashik Homestay
                              </p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Below Hill View Parking, Shimla
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Geyser
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+6 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/17494/adbf1ed26abf5692.JPG"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>16</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 1314.29</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">Super OYO 10692 Hotel Shubham</p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Near Snow View Parking, Fingask Estate, Shimla
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Geyser
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    TV
                                  </span>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="ajman" role="tabpanel">
                        <div className="countryfeaturehome">
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/1275/660c690f7419be07.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>29</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 600</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">OYO Hotel Osheen Palace</p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Near Paras Cinema, Railway Colony, Udaipur
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Card payment
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+7 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/1525/2137b8924c5cd418.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>14</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 1108.04</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">OYO Hotel Lake View Palace</p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Haridas Ji ki Magri, Udaipur
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+8 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/1999/858e64b79e280f34.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>35</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> Null</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">Collection O 13275 Vatika Inn</p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Gulab Bagh Road, Udaipur
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Reception
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+17 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/2118/22a909e84865ba11.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>11</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 595.54</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">Capital O Hotel Devansh</p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">Shobhagpura, Udaipur</p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+10 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                          <div className="card cstm-card-main">
                            <div className="position-relative">
                              <img
                                src="https://images.oyoroomscdn.com/uploads/hotel_image/4402/573ea0dda38a8e09.jpg"
                                alt="img"
                                className="img-fluid holiday-card-img w-100"
                              />
                              <div className="gallery">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_8952_3543)">
                                    <path
                                      d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                      stroke="black"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_8952_3543">
                                      <rect
                                        width="11.7207"
                                        height="11.7207"
                                        fill="white"
                                        transform="translate(0.835938 0.714844)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>14</span>
                              </div>
                              <div className="card-like cursor-pointer">
                                <svg
                                  width="21"
                                  height="21"
                                  viewBox="-2.4 -2.4 28.80 28.80"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                      x="-2.4"
                                      y="-2.4"
                                      width="28.80"
                                      height="28.80"
                                      rx="14.4"
                                      fill="#ffffff"
                                      strokeWidth="0"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                      fill="#af824a "
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div className="hometype"> INR 1108.04</div>
                            </div>
                            <div className="card-body cstm-card-body-main">
                              <p className="title">OYO Udaipole</p>
                              <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_5761_881)">
                                    <path
                                      d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                      fill="#737D8C"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_5761_881">
                                      <rect
                                        width="11.5813"
                                        height="11.5813"
                                        fill="white"
                                        transform="translate(0.894531 0.330078)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p className="card-title ">
                                  Near Railway Station, Udaipur
                                </p>
                              </div>
                              <div className="d-flex justify-content-between gap-2 flex-wrap house-main house-main-02 align-items-center">
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Parking facility
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Free Wifi
                                  </span>
                                </a>
                                <a href="#">
                                  <span className="d-flex gap-1 align-items-center">
                                    <svg
                                      width="14"
                                      height="11"
                                      viewBox="0 0 14 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.69721 6.25904H12.4972C12.9226 6.25904 13.2686 5.89378 13.2686 5.44475V1.16975C13.2686 0.720731 12.9226 0.355469 12.4972 0.355469H1.69721C1.27182 0.355469 0.925781 0.720731 0.925781 1.16975V5.44475C0.925781 5.89378 1.27182 6.25904 1.69721 6.25904ZM1.44007 1.16975C1.44007 1.02012 1.55545 0.898326 1.69721 0.898326H12.4972C12.639 0.898326 12.7544 1.02012 12.7544 1.16975V5.44475C12.7544 5.59439 12.639 5.71618 12.4972 5.71618H1.69721C1.55545 5.71618 1.44007 5.59439 1.44007 5.44475V1.16975Z"
                                        fill="#737D8C"
                                      ></path>
                                      <path
                                        d="M3.96437 3.93128H10.2322C10.3742 3.93128 10.4894 3.80974 10.4894 3.65985C10.4894 3.50995 10.3742 3.38842 10.2322 3.38842H3.96437C3.82236 3.38842 3.70723 3.50995 3.70723 3.65985C3.70723 3.80974 3.82236 3.93128 3.96437 3.93128ZM3.263 5.15271H10.9336C11.0756 5.15271 11.1907 5.03117 11.1907 4.88128C11.1907 4.73138 11.0756 4.60985 10.9336 4.60985H3.263C3.121 4.60985 3.00586 4.73138 3.00586 4.88128C3.00586 5.03117 3.121 5.15271 3.263 5.15271ZM9.79968 7.43573C9.79968 7.28583 9.68454 7.1643 9.54254 7.1643C9.40053 7.1643 9.28539 7.28583 9.28539 7.43573C9.28539 7.59278 9.24082 7.65812 9.16687 7.7664C9.07584 7.89973 8.95116 8.08236 8.95116 8.41475C8.95116 8.74741 9.07571 8.93004 9.16662 9.0635C9.24069 9.17218 9.28539 9.23765 9.28539 9.39537C9.28539 9.55295 9.24069 9.61856 9.16674 9.7271C9.07571 9.86043 8.95116 10.0432 8.95116 10.3759C8.95116 10.5257 9.0663 10.6473 9.2083 10.6473C9.35031 10.6473 9.46544 10.5257 9.46544 10.3759C9.46544 10.2183 9.51014 10.1527 9.5841 10.0441C9.67513 9.91079 9.79968 9.72803 9.79968 9.39537C9.79968 9.06271 9.67513 8.87995 9.5841 8.74648C9.51014 8.63794 9.46544 8.57234 9.46544 8.41475C9.46544 8.25757 9.51014 8.19223 9.5841 8.08382C9.675 7.95062 9.79968 7.76812 9.79968 7.43573ZM7.52256 7.43573C7.52256 7.28583 7.40742 7.1643 7.26542 7.1643C7.12341 7.1643 7.00827 7.28583 7.00827 7.43573C7.00827 7.59278 6.9637 7.65812 6.88975 7.7664C6.79872 7.89973 6.67404 8.08236 6.67404 8.41475C6.67404 8.74741 6.79859 8.93004 6.8895 9.0635C6.96357 9.17218 7.00827 9.23765 7.00827 9.39537C7.00827 9.55295 6.96357 9.61856 6.88962 9.7271C6.79859 9.86043 6.67404 10.0432 6.67404 10.3759C6.67404 10.5257 6.78917 10.6473 6.93118 10.6473C7.07319 10.6473 7.18832 10.5257 7.18832 10.3759C7.18832 10.2183 7.23302 10.1527 7.30698 10.0441C7.39801 9.91079 7.52256 9.72803 7.52256 9.39537C7.52256 9.06271 7.39801 8.87995 7.30698 8.74648C7.23302 8.63794 7.18832 8.57234 7.18832 8.41475C7.18832 8.25757 7.23302 8.19223 7.30698 8.08382C7.39788 7.95062 7.52256 7.76812 7.52256 7.43573ZM5.24544 7.43573C5.24544 7.28583 5.1303 7.1643 4.9883 7.1643C4.84629 7.1643 4.73115 7.28583 4.73115 7.43573C4.73115 7.59278 4.68658 7.65812 4.61263 7.7664C4.5216 7.89973 4.39692 8.08236 4.39692 8.41475C4.39692 8.74741 4.52147 8.93004 4.61237 9.0635C4.68645 9.17218 4.73115 9.23765 4.73115 9.39537C4.73115 9.55295 4.68645 9.61856 4.6125 9.7271C4.52147 9.86043 4.39692 10.0432 4.39692 10.3759C4.39692 10.5257 4.51205 10.6473 4.65406 10.6473C4.79607 10.6473 4.9112 10.5257 4.9112 10.3759C4.9112 10.2183 4.9559 10.1527 5.02986 10.0441C5.12088 9.91079 5.24544 9.72803 5.24544 9.39537C5.24544 9.06271 5.12088 8.87995 5.02986 8.74648C4.9559 8.63794 4.9112 8.57234 4.9112 8.41475C4.9112 8.25757 4.9559 8.19223 5.02986 8.08382C5.12076 7.95062 5.24544 7.76812 5.24544 7.43573ZM11.8876 2.44319C12.0296 2.44319 12.1447 2.32166 12.1447 2.17176V1.90033C12.1447 1.75044 12.0296 1.62891 11.8876 1.62891C11.7456 1.62891 11.6304 1.75044 11.6304 1.90033V2.17176C11.6304 2.32166 11.7456 2.44319 11.8876 2.44319Z"
                                        fill="#737D8C"
                                      ></path>
                                    </svg>
                                    Power backup
                                  </span>
                                </a>
                                <a href="#">
                                  <div className="viewmore">+8 MORE</div>
                                </a>
                              </div>
                              <div className="btn-main">
                                <button type="button">View Details</button>
                                <button className="outline">Book</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="HH-checkout-section h-100">
            <div className="container">
              <div className="holidaymainpage">
                <div className="row align-items-center flex-column-reverse flex-lg-row position-relative">
                  <div className="CheckItOutIcon">
                    <svg
                      width="117"
                      height="117"
                      viewBox="0 0 117 117"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="2.11313"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="2.11313"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="10.1346"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="18.1561"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="26.1854"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="34.2069"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="42.2284"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="50.2498"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="58.2713"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="66.2928"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="74.3221"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="82.3436"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="90.3651"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="98.3866"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="106.408"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="2.07602"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="10.0995"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="18.1229"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="26.1463"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="34.1698"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="42.1932"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="50.2166"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="58.2401"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="66.2557"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="74.2791"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="82.3026"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="90.326"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="98.3495"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="106.373"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                      <circle
                        cx="114.431"
                        cy="114.396"
                        r="1.50571"
                        stroke="#AF824A"
                        stroke-opacity="0.1"
                      ></circle>
                    </svg>
                  </div>
                  <div className="CheckItOutIcon2">
                    <svg
                      width="160"
                      height="137"
                      viewBox="0 0 160 137"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_9661_7138"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="160"
                        height="137"
                      >
                        <path
                          d="M0.400391 0.742188H159.812V127.711C159.812 132.682 155.783 136.711 150.812 136.711H0.400391V0.742188Z"
                          fill="#D9D9D9"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_9661_7138)">
                        <circle
                          cx="130.764"
                          cy="111.649"
                          r="51.3522"
                          stroke="#E2E2E2"
                          strokeWidth="2"
                        ></circle>
                        <circle
                          cx="126.628"
                          cy="106.138"
                          r="57.5519"
                          stroke="#E2E2E2"
                          strokeWidth="2"
                        ></circle>
                        <circle
                          cx="123.182"
                          cy="101.656"
                          r="63.0626"
                          stroke="#E2E2E2"
                          strokeWidth="2"
                        ></circle>
                        <circle
                          cx="119.74"
                          cy="95.1111"
                          r="67.8845"
                          stroke="#E2E2E2"
                          strokeWidth="2"
                        ></circle>
                        <circle
                          cx="116.472"
                          cy="88.7374"
                          r="72.5342"
                          stroke="#E2E2E2"
                          strokeWidth="2"
                        ></circle>
                        <circle
                          cx="110.959"
                          cy="81.5093"
                          r="79.7671"
                          stroke="#E2E2E2"
                          strokeWidth="2"
                        ></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="col-lg-8">
                    <div className="d-flex">
                      <div className="holiday-checkoutmain">
                        <Image
                          src={hhcad}
                          className="img-fluid holidayHomeimg"
                          alt="img"
                        />
                        <div className="checkout-img-content">
                          <span>Holiday homes in Canada</span>
                          <Image
                            src={heroo}
                            className="img-fluid"
                            alt="arrow"
                          />
                        </div>
                      </div>
                      <div className="holiday-checkoutmain">
                        <Image
                          src={last}
                          className="img-fluid holidayHomeimg"
                          alt="img"
                        />
                        <div className="checkout-img-content">
                          <span>Last Minute Holidays</span>
                          <Image
                            src={heroo}
                            className="img-fluid"
                            alt="arrow"
                          />
                        </div>
                      </div>
                      <div className="holiday-checkoutmain">
                        <Image
                          src={trip}
                          className="img-fluid holidayHomeimg"
                          alt="img"
                        />
                        <div className="checkout-img-content">
                          <span>Long Trip Holidays</span>
                          <Image
                            src={heroo}
                            className="img-fluid"
                            alt="arrow"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="checkoutText mb-4 mb-lg-0">
                      <h2>Do you need more inspiration for your holiday?</h2>
                      <a href="/blog">Check it out</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="readmorepart">
              <h5>Find Holiday Homes for your next trip</h5>
              <button>DISCOVER HOMES</button>
            </div>
            <div className="popularvaction">
              <div className="card">
                <div className="d-md-flex align-items-center align-items-lg-start justify-content-between destinationselect">
                  <div className="d-flex vacationpart1">
                    <div className="d-flex populardestination flex-column">
                      <Image
                        src={topu}
                        alt="Image"
                        className="rounded popular"
                      />
                      <Image
                        src={tover}
                        alt="Image"
                        className="rounded popular1"
                      />
                    </div>
                    <div className="d-flex populardestination flex-column">
                      <Image
                        src={usetover}
                        alt="Image"
                        className="rounded popular2"
                      />
                      <Image
                        src={uset}
                        alt="Image"
                        className="rounded popular3"
                      />
                    </div>
                  </div>
                  <div className="vacationpart2 mt-2">
                    <h3 className="text-black mt-3 mt-md-0">
                      Popular vacation destinations
                    </h3>
                    <div className="d-flex align-items-center align-items-lg-start">
                      <div className="countryname1">
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={india}
                            alt="india"
                          />
                          <p>India</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={indonesia}
                            alt="indonesia"
                          />
                          <p>Indonesia</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={malaysia}
                            alt="Malaysia"
                          />
                          <p>Malaysia</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={brazil}
                            alt="brazil"
                          />
                          <p>Brazil</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={united}
                            alt="united"
                          />
                          <p>United Kingdom</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={japan}
                            alt="Japan"
                          />
                          <p>Japan</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={denmark}
                            alt="Denmark"
                          />
                          <p>Denmark</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={srilanka}
                            alt="Sri Lanka"
                          />
                          <p>Sri Lanka</p>
                        </div>
                      </div>
                      <div className="countryname1">
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={china}
                            alt="China"
                          />
                          <p>China</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={uae}
                            alt="UAE"
                          />
                          <p>UAE</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={nepal}
                            alt="Nepal"
                          />
                          <p>Nepal</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={mexico}
                            alt="Mexico"
                          />
                          <p>Mexico</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={philippines}
                            alt="Philippines"
                          />
                          <p>Philippines</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={saudiarabia}
                            alt=">Saudi Arabia"
                          />
                          <p>Saudi Arabia</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={norway}
                            alt="Norway"
                          />
                          <p>Norway</p>
                        </div>
                        <div className="d-flex mb-3 align-items-center">
                          <Image
                            src={unitedstates}
                            alt="United States"
                          />
                          <p>United States</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myBg">
            <div className="container">
              <div className="holidaysubscribe">
                <h3>
                  Receive exclusive offers, inspirational stories and travel
                  <br />
                  regulation updates.
                </h3>
                <p className="mb-4 pb-2">
                  Become a subscriber* and receive great tips on travel planning
                  sent to your inbox!
                </p>
                <div className="d-flex mb-4">
                  <div className="subscribe position-relative">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.03711 4.53125L6.69622 7.27559C7.05178 7.54225 7.54067 7.54225 7.89622 7.27558L11.5553 4.53125"
                        stroke="#39425D"
                        strokeLinecap="round"
                      ></path>
                      <rect
                        x="0.697266"
                        y="0.773438"
                        width="13.9069"
                        height="11.7773"
                        rx="4.5"
                        stroke="#39425D"
                      ></rect>
                    </svg>
                    <input placeholder="Your Email Id" />
                  </div>
                  <button className="thiyo-btn d-flex align-items-center justify-content-center">
                    Search
                  </button>
                </div>
                <p className="mb-0">
                  By signing up, you agree to our{" "}
                  <a href="#">Terms of Service</a>and{" "}
                  <a href="#">Privacy Policy.</a>*You will receive offers from
                  Thiyo and agree that we may share your hashed email address
                  with third parties for the purpose of better tailoring
                  advertising to your needs.
                </p>
                <svg
                  width="296"
                  height="384"
                  viewBox="0 0 296 384"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.1">
                    <mask
                      id="mask0_37_65"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="296"
                      height="384"
                    >
                      <path
                        d="M3.88086 3.625H271.582C283.18 3.625 292.582 13.027 292.582 24.625V380.852H50.8809C24.9235 380.852 3.88086 359.809 3.88086 333.852V3.625Z"
                        fill="url(#paint0_linear_37_65)"
                        stroke="#6246E5"
                        strokeWidth="6"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_37_65)">
                      <path
                        d="M368.735 201.179C368.735 251.741 326.745 292.851 274.797 292.851C222.849 292.851 180.859 251.741 180.859 201.179C180.859 150.617 222.849 109.508 274.797 109.508C326.745 109.508 368.735 150.617 368.735 201.179Z"
                        stroke="white"
                        strokeWidth="6"
                      ></path>
                      <path
                        d="M372.559 191.211C372.559 247.964 325.429 294.093 267.141 294.093C208.854 294.093 161.724 247.964 161.724 191.211C161.724 134.457 208.854 88.3281 267.141 88.3281C325.429 88.3281 372.559 134.457 372.559 191.211Z"
                        stroke="white"
                        strokeWidth="6"
                      ></path>
                      <path
                        d="M376.382 183.113C376.382 245.371 324.684 295.961 260.761 295.961C196.838 295.961 145.14 245.371 145.14 183.113C145.14 120.856 196.838 70.2656 260.761 70.2656C324.684 70.2656 376.382 120.856 376.382 183.113Z"
                        stroke="white"
                        strokeWidth="6"
                      ></path>
                      <path
                        d="M378.935 171.286C378.935 238.36 323.239 292.854 254.385 292.854C185.531 292.854 129.835 238.36 129.835 171.286C129.835 104.213 185.531 49.7188 254.385 49.7188C323.239 49.7188 378.935 104.213 378.935 171.286Z"
                        stroke="white"
                        strokeWidth="6"
                      ></path>
                      <path
                        d="M381.495 159.757C381.495 231.474 321.944 289.733 248.335 289.733C174.726 289.733 115.176 231.474 115.176 159.757C115.176 88.0399 174.726 29.7812 248.335 29.7812C321.944 29.7812 381.495 88.0399 381.495 159.757Z"
                        stroke="white"
                        strokeWidth="6"
                      ></path>
                      <path
                        d="M384.678 146.68C384.678 225.621 319.131 289.736 238.126 289.736C157.12 289.736 91.5735 225.621 91.5735 146.68C91.5735 67.7396 157.12 3.625 238.126 3.625C319.131 3.625 384.678 67.7396 384.678 146.68Z"
                        stroke="white"
                        strokeWidth="6"
                      ></path>
                    </g>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_37_65"
                      x1="209.894"
                      y1="11.3769"
                      x2="14.136"
                      y2="390.692"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#747DEF"></stop>
                      <stop offset="1" stopColor="#5E3BE1"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
