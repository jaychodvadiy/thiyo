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
                      <span class="d-flex stepcomplte align-items-center justify-content-center">
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
                      <h5 class="fw-normal">Location Details</h5>
                      <span class="fw-normal">Step 2</span>{" "}
                      <button class="editBtn">Edit</button>
                    </div>
                  </div>
                  <div class="sidebarstep d-flex gap-3">
                    <div class="sidebarstepline mt-1">
                      <span class="d-flex stepcomplte align-items-center justify-content-center">
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
                      <h5 class="fw-normal">Property Profile</h5>
                      <span class="fw-normal">Step 3</span>{" "}
                      <button class="editBtn">Edit</button>
                    </div>
                  </div>
                  <div class="sidebarstep d-flex gap-3">
                    <div class="sidebarstepline mt-1">
                      <span class="d-flex stepcomplte align-items-center justify-content-center">
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
                      <h5 class="fw-normal">Photos </h5>
                      <span class="fw-normal">Step 4</span>{" "}
                      <button class="editBtn">Edit</button>
                    </div>
                  </div>
                  <div class="sidebarstep d-flex gap-3">
                    <div class="sidebarstepline mt-1">
                      <span class="d-flex stepcomplte align-items-center justify-content-center">
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
                      <h5 class="fw-normal">Floor Details</h5>
                      <span class="fw-normal">Step 5</span>{" "}
                      <button class="editBtn">Edit</button>
                    </div>
                  </div>
                  <div class="sidebarstep d-flex gap-3 mb-0">
                    <div class="sidebarstepline mt-1">
                      <span class="d-flex stepcomplte align-items-center justify-content-center"></span>
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
                <div class="">
                  <form>
                    <div class="princinorder propertylistprofile">
                      <Link href="/buyingdesktop">
                        <button
                          type="button"
                          class="border-0 bg-transparent ps-0"
                        >
                          <svg
                            width="45"
                            height="45"
                            viewBox="0 0 45 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.2807 11.7539L7.15234 22.8822L18.2807 34.0106M38.319 22.8822H7.46401"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </Link>
                      <h3 class="mt-3 mb-3">Add pricing and details...</h3>
                      <div class="profilehomepage">
                        <h6 class="mb-2 d-flex align-items-center gap-2">
                          Ownership<span class="ownership fw-bold">?</span>
                        </h6>
                        <div class="selectotherrrom d-flex gap-2 flex-wrap">
                          <button type="button" class="active">
                            Freehold
                          </button>
                          <button type="button" class="">
                            Leasehold
                          </button>
                          <button type="button" class="">
                            Co-operative society
                          </button>
                        </div>
                      </div>
                      <div class="profilehomepage">
                        <h6 class="mb-2">Price Details</h6>
                        <div class="price_details d-flex">
                          <div>
                            <div>
                              <input
                                class="form-control"
                                placeholder="₹ Expected Price"
                                type="number"
                                value=""
                              />
                            </div>
                          </div>
                          <div>
                            <div>
                              <input
                                class="form-control"
                                placeholder="₹ Price per sq.ft."
                                type="number"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                        <span class="text-mute price_text ps-3 mb-3">
                          ₹ Price in words
                        </span>
                      </div>
                      <div class="mb-3 d-flex flex-wrap gap-3">
                        <div class=" form-check d-flex flex-wrap gap-2">
                          <input
                            class="form-check-input"
                            id="0"
                            type="checkbox"
                          />
                          <label class="form-check-label price_label" for="0">
                            All inclusive price
                          </label>
                        </div>
                        <div class=" form-check d-flex flex-wrap gap-2">
                          <input
                            class="form-check-input"
                            id="1"
                            type="checkbox"
                          />
                          <label class="form-check-label price_label" for="1">
                            Tax and Govt. charges excluded
                          </label>
                        </div>
                        <div class=" form-check d-flex flex-wrap gap-2">
                          <input
                            class="form-check-input"
                            id="2"
                            type="checkbox"
                          />
                          <label class="form-check-label price_label" for="2">
                            Price Negotiable
                          </label>
                        </div>
                      </div>
                      <div class="additional mb-3">
                        <p class="mb-4 title cursor-pointer">
                          + Add more pricing details<span>(Optional)</span>
                        </p>
                      </div>
                      <div class="profilehomepage">
                        <h6 class="mb-2">What makes your property unique</h6>
                        <p class="description">
                          Adding desciption will increase your listing
                          visibility 22911
                        </p>
                      </div>
                      <div class="mb-4">
                        <textarea
                          placeholder="Share some details your propert like sparcious rooms, well maintained facilities"
                          spellcheck="false"
                        ></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <button
                          type="button"
                          class="thiyo-btn rounded-1 thiyo-btn-outline text-white w-100 fw-bold"
                          name="Continues"
                        >
                          Save
                        </button>
                      </div>
                      <div class="col-6">
                        <button
                          type="submit"
                          class="rounded-1 thiyo-btn text-white w-100 fw-bold"
                          name="Continues"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </form>
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
