import React from "react";
import Image from "next/image";
import line from "../.../../../../img/line.ca65a041.png";
import detail from "../.../../../../img/detail-properties.132a6f42.png";
import upload from "../.../../../../img/upload-audio-video.cede5b83.png";
import ownership from "../.../../../../img/ownership-detail.7179365a.png";
import client from "../.../../../../img/client-img-1 1.png";
import aerro from "../.../../../../img/aerro.svg";
import Link from "next/link";
function Page() {
  return (
    <div>
      <section className="listproperty-banner">
        <div className="container">
          <div className="getstarted-container">
            <div className="getstarted-main">
              <h2>Let’s get you started</h2>
              <p>I am ...</p>
              <div className="row">
                <div className="col-4 col-lg-4 list-button">
                  <button className="active">Owner</button>
                </div>
                <div className="col-4 col-lg-4 p-0 list-button">
                  <button className="">Agent</button>
                </div>
                <div className="col-4 col-lg-4 list-button">
                  <button className="">Developer</button>
                </div>
              </div>
            </div>
            <div className="getstarted-main">
              <p>I am looking to ...</p>
              <ul className="nav nav-pills row" id="pills-tab" role="tablist">
                <li
                  className="nav-item list-button col-4 col-lg-4"
                  role="presentation"
                >
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
                    Sell
                  </button>
                </li>
                <li
                  className="nav-item list-button col-4 col-lg-4 p-0"
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="true"
                  >
                    Rent / Lease
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
                  <div className="getstarted-main">
                    <p>My Property is...</p>
                    <div className="nav-align-top tabcountry cstm-tab-main-feature-home">
                      <ul className="nav nav-pills nav-fill" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            type="button"
                            className="nav-link active"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#residential"
                            aria-controls="residential"
                            aria-selected="true"
                          >
                            Residential
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Commercial"
                            aria-controls="Commercial"
                            aria-selected="false"
                            tabIndex="-1"
                          >
                            Commercial
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content cstm-tab-content-feature-home">
                        <div
                          className="tab-pane fade show active"
                          id="residential"
                          role="tabpanel"
                        >
                          <div className="getstart-tabbutton">
                            <button className="active">Apartment</button>
                            <button className="active">Rent / Lease</button>
                            <button className="active">Townhouse</button>
                            <button className="active">Hotel Apartment</button>
                            <button className="active">Penthouse</button>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="Commercial"
                          role="tabpanel"
                        >
                          <div className="getstart-tabbutton">
                            <button className="active">Apartment</button>
                            <button className="active">Rent / Lease</button>
                            <button className="active">Townhouse</button>
                            <button className="active">Penthouse</button>
                          </div>
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
                  <div className="getstarted-main">
                    <p>Rent Frequency</p>
                    <div className="nav-align-top tabcountry cstm-tab-main-feature-home">
                      <div className="getstart-tabbutton">
                        <button className="active">Yearly</button>
                        <button className="">Monthly</button>
                        <button className="">Weekly</button>
                        <button className="">Daily</button>
                        <button className="">Any</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="getstarted-main">
                <input placeholder="Enter your Email ID" type="text" />
                <span>Will send you an OTP on your Email ID</span>
              </div>
            </div>
            <div className="getstarted-startnow-main">
              <div className="col-12 text-center ">
                <Link href="/otpverify">
                  <button className="startno">Start Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="property-step">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center property-step-header">
              <p>HOW TO LIST YOUR PROPERTY</p>
              <h2>List your Property in 3 simple steps</h2>
              <Image src={line} alt="line" className="img-fluid" />
            </div>
            <div className="col-12 col-md-4 col-lg-4 listing-step-main">
              <Image src={detail} alt="detail" className="img-fluid mt-4 mt-md-0" />
              <div className="p-para">
                <div className="d-flex align-items-center gap-2 pb-3">
                  <h6 className="p-no">01.</h6>
                  <p className="p-header">Enter details of your Property</p>
                </div>
                <p className="">
                  To get started, provide essential information about your
                  property, including its name, type, location, configuration,
                  area, amenities, and any other relevant details.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 listing-step-main">
              <Image src={upload} alt="upload" className="img-fluid mt-4 mt-md-0" />
              <div className="p-para">
                <div className="d-flex align-items-center gap-2 pb-3">
                  <h6 className="p-no">02.</h6>
                  <p className="p-header">Upload Photos &amp; Videos</p>
                </div>
                <p className="">
                  You can conveniently upload photos and videos of your property
                  either from your laptop, computer or directly from your
                  mobile.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 listing-step-main">
              <Image src={ownership} alt="img" className="img-fluid mt-4 mt-md-0" />
              <div className="p-para">
                <div className="d-flex align-items-center gap-2 pb-3">
                  <h6 className="p-no">03.</h6>
                  <p className="p-header">Pricing &amp; Ownership Details</p>
                </div>
                <p className="p-para">
                  Mention the ownership details of your property, set your
                  expected price, and get ready to list your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="online-property">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center p-online">
              <h2>Benefits of Selling Your property Online</h2>
              <Image src={line} alt="line" className="img-fluid" />
              <p>
                Are you looking to sell your property hassle-free? Look no
                further! Thiyo is here to make your selling experience a breeze.
                Our innovative real estate listing portal is designed to connect
                you with potential buyers and help you secure the best deal for
                your property. Say goodbye to traditional methods and embrace
                the power of online selling with Thiyo.
              </p>
            </div>
          </div>
          <div className="online-step-main">
            <div className="online-step">
              <div className="online-no">
                <p>1</p>
              </div>
              <div className="online-para">
                <h6>Maximum Visibility</h6>
                <p>
                  When you list your property on Thiyo, you instantly gain
                  access to a vast audience of motivated buyers actively
                  searching for their dream property. Our platform ensures
                  maximum visibility for your listing, increasing your chances
                  of attracting potential buyers quickly.
                </p>
              </div>
            </div>
            <div className="online-step">
              <div className="online-no">
                <p>2</p>
              </div>
              <div className="online-para">
                <h6>Time Efficiency </h6>
                <p>
                  Save precious time while selling your property on Thiyo.
                  Benefit from convenient booking management, allowing you to
                  handle appointments on your schedule, and receive high-quality
                  leads promptly, streamlining your selling process.
                </p>
              </div>
            </div>
            <div className="online-step">
              <div className="online-no">
                <p>3</p>
              </div>
              <div className="online-para">
                <h6>Seamless Listing Process</h6>
                <p>
                  Selling your property online has never been easier. With
                  Thiyo, you can effortlessly create a detailed listing by
                  adding property information, uploading high-quality photos,
                  and even including videos to showcase the unique features of
                  your property. Our user-friendly interface makes the listing
                  process a breeze, saving you time and effort.
                </p>
              </div>
            </div>
            <div className="online-step">
              <div className="online-no">
                <p>4</p>
              </div>
              <div className="online-para">
                <h6>Target Marketing</h6>
                <p>
                  We understand the importance of reaching the right audience.
                  Thiyo utilizes advanced marketing techniques to target
                  potential buyers who are specifically interested in properties
                  like yours. Our intelligent algorithms match your listing with
                  qualified leads, ensuring your property gets noticed by the
                  right people.
                </p>
              </div>
            </div>
            <div className="online-step">
              <div className="online-no">
                <p>5</p>
              </div>
              <div className="online-para">
                <h6>Expert Assistance</h6>
                <p>
                  Our team of real estate experts is always ready to lend a
                  helping hand. Whether you have questions about the listing
                  process or need advice on pricing your property competitively,
                  our dedicated support team is here to guide you every step of
                  the way. We are committed to ensuring your selling journey is
                  smooth and successful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="freq-que">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center freq-que-main">
              <h2>Frequently Asked Questions</h2>
              <Image src={line} alt="line" className="img-fluid" />
            </div>
            <div className="showdata notshowdata">
              <div className="col-12">
                <div className="freq-quepara">
                  <h6>How to post a property ad on Magicbricks?</h6>
                  <p>
                    To post a property advertisement online, visit the
                    Magicbricks website or the app and follow the below listed
                    quick steps.
                  </p>
                  <ul>
                    <li>
                      Step 1: Look for Post Property for Free on the top
                      right-hand corner and select.
                    </li>
                    <li>
                      Step 2: Fill in details such as property type, accurate
                      location, price, photos, property features, and more
                      details about your property.
                    </li>
                    <li>
                      Step 3: Focus on maximizing the 'Completion Score' by
                      filling in the maximum details available.
                    </li>
                    <li>
                      Step 4: After adding maximum details, you can "Post one
                      Property Ad for FREE".
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="freq-quepara">
                  <h6>Can I rent or sell property online for free?</h6>
                  <p>
                    Yes, you can easily rent, to let or sell your property
                    online for free. It is the most simplified way to sell your
                    home &amp; experience excellence through Magicbricks. It
                    takes less than 10 mins to post your property advertisement
                    on Magicbricks for FREE! After posting your property ad, you
                    allow lakhs of potential buyers to view your property ad on
                    Magicbricks. In this way, you can meet potential buyers and
                    sell your property faster. You can easily post your property
                    ads for rent or sale through the following steps:
                  </p>
                  <ul>
                    <li>Step 1: Register or Login on Magicbricks.</li>
                    <li>
                      Step 2: Fill in all essential details such as property
                      type, accurate location, price, photos, and property
                      features to maximize your Property Completion Score. It
                      will help your property rank higher in search results.
                    </li>
                    <li>
                      Step 3: Post your property for free and connect with
                      buyers/tenants
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12  d-flex gap-2  justify-content-end">
              <button className="showmore">
                <div className="d-flex gap-2 align-items-center justify-content-end">
                  Show More
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
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-testimonial">
        <div className="container testimonial-silder-main">
          <div className="row">
            <div className="col-12 text-center testimonial-header">
              <p>TESTIMONIALS</p>
              <h2>What our clients are saying</h2>
            </div>
            <div className="col-12">
              <div className="testimonalgradient">
                <div className="swiper swiper-initialized swiper-horizontal mySwiper swiper-backface-hidden">
                  <div className="swiper-wrapper">
                    <div
                      className="swiper-slide swiper-slide-active"
                      style={{
                        width: "420.333px",
                        marginRight: "13px",
                      }}
                    >
                      <div className="testimonial">
                        <div className="testimonial-main">
                          <Image
                            alt="img"
                            src={client}
                            className="img-fluid client"
                          />
                          <div className="text-end test-quote">
                            <Image alt="img" src={aerro} className="img-fluid" />
                          </div>
                          <p className="border-bottom test-para">
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
                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{
                        width: "420.333px",
                        marginRight: "13px",
                      }}
                    >
                      <div className="testimonial">
                        <div className="testimonial-main">
                          <Image
                            alt="img"
                            src={client}
                            className="img-fluid client"
                          />
                          <div className="text-end test-quote">
                            <Image alt="img" src={aerro} className="img-fluid" />
                          </div>
                          <p className="border-bottom test-para">
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
                    <div
                      className="swiper-slide"
                      style={{
                        width: "420.333px",
                        marginRight: "13px",
                      }}
                    >
                      <div className="testimonial">
                        <div className="testimonial-main">
                          <Image
                            alt="img"
                            src={client}
                            className="img-fluid client"
                          />
                          <div className="text-end test-quote">
                            <Image alt="img" src={aerro} className="img-fluid" />
                          </div>
                          <p className="border-bottom test-para">
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
                  <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                    <span className="swiper-pagination-bullet"></span>
                    <span className="swiper-pagination-bullet"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
