import Image from "next/image";
import "../../style/thiyo.css";
import home from "../../img/pexelsexpect.png";
import Asset28 from "../../img/Asset 2 8.png";
import Asset from "../../img/Asset 3.png";
import Asset3 from "../../img/Asset 5 3.png";
import highangle from "../../img/high-angle-pie-chart-with-cities 1.png";
import airport from "../../img/airport.abbe0c1a.png";
import apartment from "../../img/apartment.e4223b32.png";
import hotel from "../../img/hotel.43844a6a.png";
import office from "../../img/office.6c982fe1.png";
import penthouse from "../../img/penthouse.c764f65d.png";
import hotelapartment from "../../img/hotelapartment.ab759b89.png";
import office6c982fe1 from "../../img/office.6c982fe1.png";
import shop from "../../img/shop.b3cf7676.png";
import townshipfb52778a from "../../img/township.fb52778a.png";
import township from "../../img/villa.665fd0ad.png";
import vector from "../../img/vector-94.svg";
import client from "../../img/client-img-1 1.png";
import clientimage from "../../img/client-img-2 1.png";
import clientimg31 from "../../img/client-img-3 1.png";
import Deepik from "../../img/deepik.png";
import CapitalHotel from "../../img/restaurant-interior.jpg";
import elegant from "../../img/elegant-hotel-room-with-big-bed.jpg";
import morning from "../../img/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="pagerent">
        <div className="container h-100">
          <div className="row ">
            <div className="col-lg-6">
              <div className="contain">
                <h1 className="text-start  gloabe text-lg-start">
                  Discover properties globally for sale and to rent
                </h1>
                <div className="primary-tabs">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
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
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabIndex="0"
                    >
                      <div className="searchLayout">
                        <div className="searchLayoutTop align-items-baseline">
                          <div className="dropdown primary-dropdown">
                            <button
                              className="btn w-100 dropdown-toggle d-flex align-items-center gap-2"
                              type="button"
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.13654 1.31658L1.44786 3.41166C0.99891 3.76084 0.634766 4.50409 0.634766 5.06777V8.76408C0.634766 9.92136 1.57755 10.8691 2.73483 10.8691H8.51126C9.66854 10.8691 10.6113 9.92136 10.6113 8.76907V5.1376C10.6113 4.53402 10.2073 3.76084 9.71344 3.41664L6.63068 1.25672C5.93232 0.767867 4.80996 0.792809 4.13654 1.31658Z"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M7.86836 8.13086L5.77328 6.03578L4.97516 7.23297L3.37891 5.63672"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6.86914 8.13047H7.8668V7.13281"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Rent
                            </button>
                            <div></div>
                          </div>
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
                                    id="react-select-11-live-region"
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
                                        id="react-select-11-placeholder"
                                      >
                                        Enter Location
                                      </div>
                                      <div
                                        className=" css-19bb58m"
                                        data-value=""
                                      >
                                        <input
                                          className=""
                                          autoCapitalize="none"
                                          autoComplete="off"
                                          autoCorrect="off"
                                          id="react-select-11-input"
                                          spellCheck="false"
                                          tabIndex="0"
                                          aria-autocomplete="list"
                                          aria-expanded="false"
                                          aria-haspopup="true"
                                          role="combobox"
                                          aria-describedby="react-select-11-placeholder"
                                          type="text"
                                          defaultValue=""
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
                          <div className="dropdown primary-dropdown primary-dropdown-lg">
                            <button
                              className="btn w-100 dropdown-toggle d-flex align-items-center gap-2"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.98666 9.64882V8.10761M4.99515 1.85031L1.43496 4.70154C1.03424 5.02006 0.777374 5.69305 0.86471 6.19651L1.54798 10.2859C1.67128 11.0154 2.36996 11.6062 3.10974 11.6062H8.86358C9.59823 11.6062 10.302 11.0102 10.4253 10.2859L11.1086 6.19651C11.1908 5.69305 10.9339 5.02006 10.5384 4.70154L6.97817 1.85544C6.42847 1.41363 5.53971 1.41363 4.99515 1.85031Z"
                                  stroke="#686868"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Property
                            </button>
                            <ul className="dropdown-menu">
                              <div className="drop-title">Residential</div>
                              <div className="property-group">
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Apartment
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Villa
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Townhouse
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Penthouse
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Hotel Apartment
                                </button>
                              </div>
                              <hr />
                              <div className="drop-title">Commercial</div>
                              <div className="property-group">
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Office
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Warehouse
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Shop
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Hotel
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Mixed Use Land
                                </button>
                              </div>
                            </ul>
                          </div>
                        </div>
                        <div className="searchLayoutBottom">
                          <div className="dropdown primary-dropdown primary-dropdown-cs">
                            <button
                              className="btn w-100 dropdown-toggle d-flex align-items-center gap-2"
                              type="button"
                            >
                              <p className="ellipsis">
                                {" "}
                                &nbsp;beds&nbsp; &nbsp;baths&nbsp;
                              </p>
                            </button>
                            <div></div>
                          </div>
                          <div className="dropdown primary-dropdown ">
                            <button
                              className="01 btn w-100 dropdown-toggle dropdown-toggle-cs d-flex align-items-center gap-2"
                              type="button"
                            >
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.42617 12.0313H7.65586C10.3473 12.0313 11.4238 10.9547 11.4238 8.26328V5.03359C11.4238 2.34219 10.3473 1.26562 7.65586 1.26562H4.42617C1.73477 1.26562 0.658203 2.34219 0.658203 5.03359V8.26328C0.658203 10.9547 1.73477 12.0313 4.42617 12.0313Z"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6.04102 3.95703V9.33984M3.34961 6.64844H8.73242M4.96445 9.33984H7.11758C8.00574 9.33984 8.73242 8.61316 8.73242 7.725V5.57188C8.73242 4.68371 8.00574 3.95703 7.11758 3.95703H4.96445C4.07629 3.95703 3.34961 4.68371 3.34961 5.57188V7.725C3.34961 8.61316 4.07629 9.33984 4.96445 9.33984Z"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Area (Sq.ft.)
                            </button>
                            <div></div>
                          </div>
                          <div className="dropdown primary-dropdown ">
                            <button
                              className="01 btn w-100 dropdown-toggle dropdown-toggle-cs d-flex align-items-center gap-2"
                              type="button"
                            >
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.42617 12.0313H7.65586C10.3473 12.0313 11.4238 10.9547 11.4238 8.26328V5.03359C11.4238 2.34219 10.3473 1.26562 7.65586 1.26562H4.42617C1.73477 1.26562 0.658203 2.34219 0.658203 5.03359V8.26328C0.658203 10.9547 1.73477 12.0313 4.42617 12.0313Z"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6.04102 3.95703V9.33984M3.34961 6.64844H8.73242M4.96445 9.33984H7.11758C8.00574 9.33984 8.73242 8.61316 8.73242 7.725V5.57188C8.73242 4.68371 8.00574 3.95703 7.11758 3.95703H4.96445C4.07629 3.95703 3.34961 4.68371 3.34961 5.57188V7.725C3.34961 8.61316 4.07629 9.33984 4.96445 9.33984Z"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Price (AED)
                            </button>
                            <div></div>
                          </div>
                          <div className="listpropertysearch">
                            <div className="listproperty d-none d-lg-block position-relative">
                              <button className="button">
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
                                <Link className="searchaa" href="/properties">
                                  Search
                                </Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabIndex="0"
                    >
                      Two
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

      <section className="feature-home-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="homefeaty">
                <p> FEATURED HOMES</p>
              </div>
              <h3 className="ourlest">
                Explore our latest properties for sale and to rent
              </h3>
              <p className="discover">
                Discover a range of homes available for sale and rent on our
                platform. From luxurious apartments to spacious houses,
                <br /> our collection features the latest listings in
                sought-after locations. Browse through our extensive inventory
                and find the <br /> perfect home that meets your preferences and
                budget. Our dedicated team is here to assist you every step of
                the way.
                <br /> Start your search today and unlock the door to your ideal
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                            OYO Hotel Orion Near Immaculate Conception Church
                          </p>
                          <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card cstm-card-main">
                        <div className="position-relative">
                          <Image
                            src={CapitalHotel}
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                            OYO Hotel Tuliip Residency Near Chhatrapati Shivaji
                            International Airport
                          </p>
                          <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                            OYO Hotel Whitefield Near Airport Road Metro Station
                          </p>
                          <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                            OYO Hotel Suncity Residency Near Chhatrapati Shivaji
                            International Airport
                          </p>
                          <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card cstm-card-main">
                        <div className="position-relative">
                          <Image
                            src={elegant}
                            alt="elegant"
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                  fill="#af824a "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="hometype"> INR 660.71</div>
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
                              <g clipPath="url(#clip0_5761_881)">
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
                              Near Hanuman Mandir , Vile Parle
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                  fill="#af824a "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="hometype"> INR 5359</div>
                        </div>
                        <div className="card-body cstm-card-body-main">
                          <p className="title">
                            OYO Flagship Hotel Park Palace
                          </p>
                          <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_5761_881)">
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
                              bunderNear Minara Masjid, Mandvi, Mumbai, Mumbai
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
                              {/* <span className="d-flex gap-1 align-items-center">
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
                                  </span> */}
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card cstm-card-main">
                        <div className="position-relative">
                          <Image
                            src={morning}
                            alt="morning"
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
                              <g clipPath="url(#clip0_8952_3543)">
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                              <g clipPath="url(#clip0_5761_881)">
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
                            <p className="outlines">AED 6000</p>
                            <Link href="/listpage">
                              <button type="button" className="outline">
                                View Details
                              </button>
                            </Link>
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

      <section className="buy-rent-sell-mmain">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="baynoe">
                <p>BUY . RENT . SELL</p>
                <h2 className="help">
                  We help people buy, rent and sell homes
                </h2>
                <p className="makereal">
                  We're here to make real estate easy. Whether you're buying,
                  renting, or selling, our dedicated team is ready to assist you
                  every step of the way. With our expertise and network, we
                  ensure a <br />
                  seamless experience.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="servier">
                <Image
                  src={Asset28}
                  alt="Asset28"
                  className="imgfluid img-fluid"
                />
              </div>
              <h3 className="mb-1 mb-md-3 text-center">Qualified Agents</h3>
              <p className="pb-0 sellhomedescription">
                When it comes to finding your drem property or selling your
                home, trust in our team of highly qualified agents. Our experts
                bring years of industry experience and deep knowledge of the
                local real estate market to the table.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="servier">
                <Image className="imgfluid" src={Asset} alt="Asset" />
              </div>
              <h3 className="mb-1 mb-md-3 text-center">Excellent service</h3>
              <p className="pb-0 sellhomedescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar leo.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="servier">
                <Image className="imgfluid" src={Asset3} alt="Asset3" />
              </div>
              <h3 className="mb-1 mb-md-3 text-center">Customer Care</h3>
              <p className="pb-0 sellhomedescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar leo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta sellhome bg-transparent">
        <div className="container">
          <div className="property">
            <div className="row">
              <div className="col-sm-6 cta-info ctn">
                <h3 className="">Looking to sell your home?</h3>
                <h6 className="">
                  Unlock a hassle-free selling experience and unleash the real
                  potential of your cherished property.
                </h6>
                <Link href="/listproperty">
                  <button className="d-none d-md-flex align-items-center justify-content-center thiyo-btn">
                    LIST YOUR PROPERTY
                  </button>
                </Link>
                <button className="d-flex align-items-center justify-content-center d-md-none thiyo-btn">
                  CONTACT US
                </button>
              </div>
              <div className="col-lg-6">
                <Image src={highangle} alt="highangle" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="main-gallery ">
            <div className="">
              <div className="imageitemHoele">
                <div className=" d-flex justify-content-between flex-column ">
                  <h5>Residental</h5>
                  <p>
                    Buy or sell your home with our agents. House prices,
                    inspections, negotiations and other services are included in
                    the house price.
                  </p>
                  <div className="line">
                    <Image src={vector} alt="vector" />
                  </div>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={airport} alt="airport" />
                  <p>Apartment</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={apartment} alt="apartment" />
                  <p>Villa</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={penthouse} alt="airport" />
                  <p>undefined</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={office} alt="airport" />
                  <p>Penthouse</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={hotel} alt="airport" />
                  <p>Hotel Apartment</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={shop} alt="airport" />
                  <p>Office </p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image
                    className="airports"
                    src={hotelapartment}
                    alt="airport"
                  />
                  <p>Shop</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image
                    className="airports"
                    src={office6c982fe1}
                    alt="airport"
                  />
                  <p>Warehouse</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={township} alt="airport" />
                  <p>Hotel</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image
                    className="airports"
                    src={townshipfb52778a}
                    alt="airport"
                  />
                  <p>Mixed Use Land</p>
                </div>
                <div className="text-end img-gallery-info d-flex justify-content-between flex-column">
                  <h5>Commercial</h5>
                  <p>
                    Buy or sell your home with our agents. House prices,
                    inspections, negotiations and other services are included in
                    the house price.
                  </p>
                  <div className="line">
                    <Image src={vector} alt="vector" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-12 sayings">
              <div className="tesing">
                <h5>TESTIMONIALS</h5>
                <p className="clients">What our clients are saying</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tesingmodlue">
                <div className=" swiper-initialized swiper-horizontal mySwiper">
                  <div className="swiper-wrapper">
                    <div className=" swiper-slide-active">
                      <div className="tesinmost">
                        <div className="testimonial-main">
                          <Image className="client" src={client} alt="client" />
                          <p className=" test-para">
                            Aenean vulputate eleifend tellus. Aenean leo ligula,
                            porttitor eu, consequat vitae, eleifend ac, enim.
                            Aliquam lorem ante, dapibus.
                          </p>
                          <div className="d-flex justify-content-between align-items-center gap-2 pt-3">
                            <div className="test-client">
                              <p>Derrick P. Boudreaux</p>
                              <span>Web Developer</span>
                            </div>
                            <div className="start-icon">
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tesingmodlue">
                <div className="swiper-initialized swiper-horizontal mySwiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide-active">
                      <div className="tesinmost">
                        <div className="testimonial-main">
                          <Image
                            className="client"
                            src={clientimage}
                            alt="clientimage"
                          />
                          <p className=" test-para">
                            Aenean vulputate eleifend tellus. Aenean leo ligula,
                            porttitor eu, consequat vitae, eleifend ac, enim.
                            Aliquam lorem ante, dapibus.
                          </p>
                          <div className="d-flex justify-content-between align-items-center gap-2 pt-3">
                            <div className="test-client">
                              <p>Derrick P. Boudreaux</p>
                              <span>Web Developer</span>
                            </div>
                            <div className="start-icon">
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tesingmodlue">
                <div className=" swiper-initialized swiper-horizontal mySwiper">
                  <div className="swiper-wrapper">
                    <div className="">
                      <div className="tesinmost">
                        <div className="testimonial-main">
                          <Image
                            className="client"
                            src={clientimg31}
                            alt="clientimg31"
                          />
                          <p className=" test-para">
                            Aenean vulputate eleifend tellus. Aenean leo ligula,
                            porttitor eu, consequat vitae, eleifend ac, enim.
                            Aliquam lorem ante, dapibus.
                          </p>
                          <div className="d-flex justify-content-between align-items-center gap-2 pt-3">
                            <div className="test-client">
                              <p>Derrick P. Boudreaux</p>
                              <span>Web Developer</span>
                            </div>
                            <div className="start-icon">
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg
                                width="12"
                                height="11"
                                viewBox="0 0 12 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_18621)">
                                  <path
                                    d="M5.89339 7.43842L8.53547 9.03308L7.83434 6.0276L10.1686 4.00542L7.09472 3.74035L5.89339 0.910156L4.69205 3.74035L1.61816 4.00542L3.94816 6.0276L3.2513 9.03308L5.89339 7.43842Z"
                                    fill="#E3C814"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_18621">
                                    <rect
                                      width="10.2605"
                                      height="10.2605"
                                      fill="white"
                                      transform="translate(0.763184 0.0546875)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="becomes">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="becomereal">
                <h1>Become a Real Estate Agent</h1>
                <p>
                  Accelerate your listings to new heights and unleash the
                  potential of captivating leads andvalued clients.
                </p>
                <Link href="/Register">
                  <button
                    className="btn btncolornow btn-outline-secondary"
                    type="submit"
                  >
                    REGISTER NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <Image className="imagedeepki" src={Deepik} alt="Deepik" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
