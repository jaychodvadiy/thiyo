import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      <section>
        <div class="container">
          <div class="py-5 listing_grid">
            <div class="listing_grid_left">
              <div class="propertylistsidebar d-flex align-items-center justify-content-start gap-3">
                <div class="sidebar z-99 position-relative">
                  <div class="sidebarstep d-flex gap-3">
                    <div class="sidebarstepline mt-1">
                      <span class="d-flex stepcomplte  align-items-center justify-content-center">
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.71094 3.81437L4.54094 6.64437L10.2109 0.984375"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h5 class="fw-normal">Basic Details</h5>
                      <span class="me-1">
                        Flat/Apartment for Sale
                        <button class="editBtn ms-1">Edit</button>
                      </span>
                    </div>
                  </div>
                  <div class="sidebarstep d-flex gap-3">
                    <div class="sidebarstepline mt-1">
                      <span class="d-flex stepcomplte align-items-center justify-content-center"></span>
                    </div>
                    <div>
                      <h5 class="fw-normal">Location Details</h5>
                      <span class="fw-normal">Step 2</span>
                    </div>
                  </div>
                  <div class="sidebarstep d-flex gap-3">
                    <div class="sidebarstepline mt-1">
                      <span class="d-flex pendingstep align-items-center justify-content-center"></span>
                    </div>
                    <div>
                      <h5 class="fw-normal">Property Profile</h5>
                      <span class="fw-normal">Step 3</span>
                    </div>
                  </div>
                  <div class="sidebarstep d-flex gap-3">
                    <div class="sidebarstepline mt-1">
                      <span class="d-flex pendingstep align-items-center justify-content-center"></span>
                    </div>
                    <div>
                      <h5 class="fw-normal">Photos </h5>
                      <span class="fw-normal">Step 4</span>
                    </div>
                  </div>
                  <div class="sidebarstep d-flex gap-3">
                    <div class="sidebarstepline mt-1">
                      <span class="d-flex pendingstep align-items-center justify-content-center"></span>
                    </div>
                    <div>
                      <h5 class="fw-normal">Floor Details</h5>
                      <span class="fw-normal">Step 5</span>
                    </div>
                  </div>
                  <div class="sidebarstep d-flex gap-3 mb-0">
                    <div class="sidebarstepline mt-1">
                      <span class="d-flex pendingstep align-items-center justify-content-center"></span>
                    </div>
                    <div>
                      <h5 class="fw-normal">Pricing &amp; Orders</h5>
                      <span class="fw-normal">Step 6</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="listing_grid_right">
              <div>
                <div class="propertyLogin">
                  <div class="PropertyBackArrow">
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.0815 11.7539L6.95312 22.8822L18.0815 34.0106M38.1198 22.8822H7.26479"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h2>
                    Welcome 🙂
                    <br />
                    Enter OTP, Received on your Email ID
                  </h2>
                  <div class="CTPUT">
                    <p id="editText" contenteditable="true">
                      item@gmail.com
                    </p>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7203 3.71252L5.5103 12.4025C5.2003 12.7325 4.9003 13.3825 4.8403 13.8325L4.4703 17.0725C4.3403 18.2425 5.1803 19.0425 6.3403 18.8425L9.5603 18.2925C10.0103 18.2125 10.6403 17.8825 10.9503 17.5425L19.1603 8.85252C20.5803 7.35252 21.2203 5.64252 19.0103 3.55252C16.8103 1.48252 15.1403 2.21252 13.7203 3.71252Z"
                        stroke="#AF824A"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M12.3509 5.16406C12.5606 6.50492 13.2095 7.7382 14.196 8.67031C15.1824 9.60242 16.4504 10.1806 17.8009 10.3141M3.46094 22.1141H21.4609"
                        stroke="#AF824A"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h6>Enter your 4 digit OTP</h6>
                  <div class="otp-verification-main">
                    <input
                      class="tab-class outline-none"
                      id=""
                      maxlength="1"
                      type="text"
                      name=""
                    />
                    <input
                      class="tab-class outline-none"
                      id=""
                      maxlength="1"
                      type="text"
                      name=""
                    />
                    <input
                      class="tab-class outline-none"
                      id=""
                      maxlength="1"
                      type="text"
                      name=""
                    />
                    <input
                      class="tab-class outline-none"
                      id=""
                      maxlength="1"
                      type="text"
                      name=""
                    />
                  </div>
                  <p class="resend mt-3">
                    Haven’t recieved yet?<span>Resend OTP</span>
                  </p>
                  <Link href='/otpverifydetails'>
                  <button class="verify">Verify &amp; Login</button>
                  </Link>
                  <p class="login mt-3">
                    or <span>Login via Email / Username</span>
                  </p>
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
