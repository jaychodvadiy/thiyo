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

export default function Home() {
  return (
    <div>
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
                      className="text-white search active"
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
                  potential of captivating leads and valued clients.
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
