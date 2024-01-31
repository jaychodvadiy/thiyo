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
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="pagerent">
        <div className="container h-100">
          <div className="row ">
            <div className="col-lg-6">
              <div class="contain">
                <h1 class="text-center text-lg-start">
                  Discover properties globally for sale and to rent
                </h1>
                <div class="primary-tabs">
                  <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
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
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabindex="0"
                    >
                      <div class="searchLayout">
                        <div class="searchLayoutTop align-items-baseline">
                          <div class="dropdown primary-dropdown">
                            <button
                              class="btn w-100 dropdown-toggle d-flex align-items-center gap-2"
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
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M7.86836 8.13086L5.77328 6.03578L4.97516 7.23297L3.37891 5.63672"
                                  stroke="#686868"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M6.86914 8.13047H7.8668V7.13281"
                                  stroke="#686868"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Rent
                            </button>
                            <div></div>
                          </div>
                          <div>
                            <div class="searchLocation">
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
                              <div class="multi_select">
                                <div class="dropdown css-b62m3t-container">
                                  <span
                                    id="react-select-11-live-region"
                                    class="css-7pg0cj-a11yText"
                                  ></span>
                                  <span
                                    aria-live="polite"
                                    aria-atomic="false"
                                    aria-relevant="additions text"
                                    class="css-7pg0cj-a11yText"
                                  ></span>
                                  <div class=" css-13cymwt-control">
                                    <div class=" css-hlgwow">
                                      <div
                                        class=" css-1jqq78o-placeholder"
                                        id="react-select-11-placeholder"
                                      >
                                        Enter Location
                                      </div>
                                      <div class=" css-19bb58m" data-value="">
                                        <input
                                          class=""
                                          autocapitalize="none"
                                          autocomplete="off"
                                          autocorrect="off"
                                          id="react-select-11-input"
                                          spellcheck="false"
                                          tabindex="0"
                                          aria-autocomplete="list"
                                          aria-expanded="false"
                                          aria-haspopup="true"
                                          role="combobox"
                                          aria-describedby="react-select-11-placeholder"
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
                                    <div class=" css-1wy0on6">
                                      <span class=" css-1u9des2-indicatorSeparator"></span>
                                      <div
                                        class=" css-1xc3v61-indicatorContainer"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          height="20"
                                          width="20"
                                          viewBox="0 0 20 20"
                                          aria-hidden="true"
                                          focusable="false"
                                          class="css-8mmkcg"
                                        >
                                          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <svg
                                class="SearchLocationDownArrow"
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
                          <div class="dropdown primary-dropdown primary-dropdown-lg">
                            <button
                              class="btn w-100 dropdown-toggle d-flex align-items-center gap-2"
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
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Property
                            </button>
                            <ul class="dropdown-menu">
                              <div class="drop-title">Residential</div>
                              <div class="property-group">
                                <button
                                  class="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Apartment
                                </button>
                                <button
                                  class="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Villa
                                </button>
                                <button
                                  class="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Townhouse
                                </button>
                                <button
                                  class="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Penthouse
                                </button>
                                <button
                                  class="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Hotel Apartment
                                </button>
                              </div>
                              <hr />
                              <div class="drop-title">Commercial</div>
                              <div class="property-group">
                                <button
                                  class="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Office
                                </button>
                                <button
                                  class="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Warehouse
                                </button>
                                <button
                                  class="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Shop
                                </button>
                                <button
                                  class="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Hotel
                                </button>
                                <button
                                  class="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Mixed Use Land
                                </button>
                              </div>
                            </ul>
                          </div>
                        </div>
                        <div class="searchLayoutBottom">
                          <div class="dropdown primary-dropdown primary-dropdown-cs">
                            <button
                              class="btn w-100 dropdown-toggle d-flex align-items-center gap-2"
                              type="button"
                            >
                              <p class="ellipsis">
                                {" "}
                                &nbsp;beds&nbsp; &nbsp;baths&nbsp;
                              </p>
                            </button>
                            <div></div>
                          </div>
                          <div class="dropdown primary-dropdown ">
                            <button
                              class="01 btn w-100 dropdown-toggle dropdown-toggle-cs d-flex align-items-center gap-2"
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
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M6.04102 3.95703V9.33984M3.34961 6.64844H8.73242M4.96445 9.33984H7.11758C8.00574 9.33984 8.73242 8.61316 8.73242 7.725V5.57188C8.73242 4.68371 8.00574 3.95703 7.11758 3.95703H4.96445C4.07629 3.95703 3.34961 4.68371 3.34961 5.57188V7.725C3.34961 8.61316 4.07629 9.33984 4.96445 9.33984Z"
                                  stroke="#686868"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Area (Sq.ft.)
                            </button>
                            <div></div>
                          </div>
                          <div class="dropdown primary-dropdown ">
                            <button
                              class="01 btn w-100 dropdown-toggle dropdown-toggle-cs d-flex align-items-center gap-2"
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
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M6.04102 3.95703V9.33984M3.34961 6.64844H8.73242M4.96445 9.33984H7.11758C8.00574 9.33984 8.73242 8.61316 8.73242 7.725V5.57188C8.73242 4.68371 8.00574 3.95703 7.11758 3.95703H4.96445C4.07629 3.95703 3.34961 4.68371 3.34961 5.57188V7.725C3.34961 8.61316 4.07629 9.33984 4.96445 9.33984Z"
                                  stroke="#686868"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              Price (AED)
                            </button>
                            <div></div>
                          </div>
                          <div class="listpropertysearch">
                            <div class="listproperty d-none d-lg-block position-relative">
                              <button class="button">
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
                                <Link href='/properties'>Search</Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabindex="0"
                    >
                      Two
                    </div>
                  </div>
                </div>
                {/* <button
                  class="PropertySearch"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Property Search
                </button> */}
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
                      tabIndex="-1"
                    >
                      AJMAN
                    </button>
                  </li>
                </ul>
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
              <Image
                src={Asset28}
                alt="Asset28"
                className="imgfluid img-fluid"
              />
              <h3 className="mb-1 mb-md-3 text-center">Qualified Agents</h3>
              <p className="pb-0 sellhomedescription">
                When it comes to finding your drem property or selling your
                home, trust in our team of highly qualified agents. Our experts
                bring years of industry experience and deep knowledge of the
                local real estate market to the table.
              </p>
            </div>
            <div className="col-lg-4">
              <Image className="imgfluid" src={Asset} alt="Asset" />
              <h3 className="mb-1 mb-md-3 text-center">Excellent service</h3>
              <p className="pb-0 sellhomedescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar leo.
              </p>
            </div>
            <div className="col-lg-4">
              <Image className="imgfluid" src={Asset3} alt="Asset3" />
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
                <button className="d-none d-md-flex align-items-center justify-content-center thiyo-btn">
                  LIST YOUR PROPERTY
                </button>
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
          <div className="residental">
            <div className="imageitemHoele">
              <div className="img-gallery-info d-flex justify-content-between flex-column ">
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
              <div className="col-sm-4 ">
                <Image className="airports" src={airport} alt="airport" />
              </div>
              <div className="col-sm-4 ">
                <Image className="airports" src={apartment} alt="apartment" />
              </div>
              <div className="col-sm-4 ">
                <Image className="airports" src={penthouse} alt="airport" />
              </div>
              <div className="col-sm-4 ">
                <Image className="airports" src={office} alt="airport" />
              </div>
              <div className="col-sm-4 ">
                <Image className="airports" src={hotel} alt="airport" />
              </div>
              <div className="col-sm-4 ">
                <Image className="airports" src={shop} alt="airport" />
              </div>
              <div className="col-sm-4 ">
                <Image
                  className="airports"
                  src={hotelapartment}
                  alt="airport"
                />
              </div>
              <div className="col-sm-4 ">
                <Image
                  className="airports"
                  src={office6c982fe1}
                  alt="airport"
                />
              </div>
              <div className="col-sm-4 ">
                <Image className="airports" src={township} alt="airport" />
              </div>
              <div className="col-sm-4 ">
                <Image
                  className="airports"
                  src={townshipfb52778a}
                  alt="airport"
                />
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
                <button
                  className="btn btncolornow btn-outline-secondary"
                  type="submit"
                >
                  REGISTER NOW
                </button>
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
