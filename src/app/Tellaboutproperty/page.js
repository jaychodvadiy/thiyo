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
                      <span class="d-flex stepcomplte align-items-center justify-content-center"></span>
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
                <div class="propertylistprofile propertylistprofile-cs">
                  <form>
                    <div class="profilepage">
                      <Link href="/otpverifydetails">
                        <button class="border-0 p-0" type="button">
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
                      <h3 class="propertytitle">Tell us about your property</h3>
                      <div>
                        <p class="fw-normal addanotherdetail">
                          You Apartment is a
                        </p>
                        <div class="mb-4">
                          <div class="d-flex gap-3">
                            <button type="button" class="selectbhk">
                              2 BHK
                            </button>
                            <button type="button" class="selectbhk">
                              others
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="profilehomepage">
                        <h6 class="mb-1">Add room details</h6>
                        <p me="fw-normal addanotherdetail">No. of Bedrooms</p>
                        <div class="roomdetail d-flex align-items-center gap-2 mt-2">
                          <div class="roomselection">
                            <input
                              class="cursor-pointer"
                              id="bed-1"
                              type="radio"
                              name="bedroom"
                            />
                            <label class="">1</label>
                          </div>
                          <div class="roomselection">
                            <input
                              class="cursor-pointer"
                              id="bed-2"
                              type="radio"
                              name="bedroom"
                            />
                            <label class="">2</label>
                          </div>
                          <div class="roomselection">
                            <input
                              class="cursor-pointer"
                              id="bed-3"
                              type="radio"
                              name="bedroom"
                            />
                            <label class="">3</label>
                          </div>
                          <div class="roomselection">
                            <input
                              class="cursor-pointer"
                              id="bed-4"
                              type="radio"
                              name="bedroom"
                            />
                            <label class="">4</label>
                          </div>
                          <button
                            type="button"
                            class="edit-button my-2 thiyo-btn text-white rounded py-1"
                          >
                            Add
                          </button>
                        </div>
                        <div class="d-flex align-items-center gap-3 mt-3"></div>
                        <p class="fw-normal addanotherdetail mb-3">
                          No. of Bathrooms
                        </p>
                        <div class="roomdetail d-flex align-items-center gap-2 mt-2">
                          <div class="roomselection">
                            <input
                              class="cursor-pointer"
                              id="bath-0"
                              type="radio"
                              name="bathRoom"
                            />
                            <label class="">0</label>
                          </div>
                          <div class="roomselection">
                            <input
                              class="cursor-pointer"
                              id="bath-1"
                              type="radio"
                              name="bathRoom"
                            />
                            <label class="">1</label>
                          </div>
                          <div class="roomselection">
                            <input
                              class="cursor-pointer"
                              id="bath-2"
                              type="radio"
                              name="bathRoom"
                            />
                            <label class="">2</label>
                          </div>
                          <div class="roomselection">
                            <input
                              class="cursor-pointer"
                              id="bath-3"
                              type="radio"
                              name="bathRoom"
                            />
                            <label class="">3</label>
                          </div>
                          <div class="roomselection">
                            <input
                              class="cursor-pointer"
                              id="bath-4"
                              type="radio"
                              name="bathRoom"
                            />
                            <label class="">4</label>
                          </div>
                          <div class="roomselection">
                            <input
                              class="cursor-pointer"
                              id="bath-5"
                              type="radio"
                              name="bathRoom"
                            />
                            <label class="">5</label>
                          </div>
                          <div class="roomselection">
                            <input
                              class="cursor-pointer"
                              id="bath-6"
                              type="radio"
                              name="bathRoom"
                            />
                            <label class="">6</label>
                          </div>
                        </div>
                      </div>
                      <div class="profilehomepage">
                        <h6 class="mb-2">Add Area Details</h6>
                        <p class="mb-3 fw-normal addanotherdetail">
                          Atleast one area type is mandatory
                        </p>
                        <div class="mb-3">
                          <div class="">
                            <div class="areaInput">
                              <div>
                                <input
                                  placeholder="Carpet Area"
                                  type="number"
                                  value=""
                                />
                                <div class="line"></div>
                              </div>
                              <select>
                                <option>Carpet Area</option>
                                <option>sqft</option>
                                <option>sqm</option>
                                <option>sqyards</option>
                                <option>acres</option>
                                <option>marla</option>
                                <option>cents</option>
                              </select>
                            </div>
                            <div class="d-flex errorhigh justify-content-between position-relative"></div>
                          </div>
                          <div class="d-flex errorhigh justify-content-between"></div>
                          <div class="d-flex errorhigh justify-content-between"></div>
                        </div>
                      </div>
                      <div class="d-flex gap-2 gap-md-3 m-0 profilehomepage">
                        <div class="profilehomepage-text">
                          + Add Built-up Area
                        </div>
                        <div class="profilehomepage-text">
                          + Add Super Built-up Area
                        </div>
                      </div>
                      <div class="profilehomepage">
                        <h6 class="mb-2">
                          Other rooms <span>(Optional)</span>
                        </h6>
                        <div class="selectotherrrom d-flex gap-2 flex-wrap">
                          <button type="button" class="">
                            + PoojaRoom
                          </button>
                          <button type="button" class="">
                            + StudyRoom
                          </button>
                          <button type="button" class="">
                            + ServantRoom
                          </button>
                          <button type="button" class="">
                            + StoreRoom
                          </button>
                        </div>
                      </div>
                      <div class="profilehomepage">
                        <h6 class="mb-2">
                          Furnishing <span>(Optional)</span>
                        </h6>
                        <div class="selectotherrrom profilehomepage">
                          <div class="d-flex flex-wrap gap-2">
                            <button type="button" class="">
                              Furnished
                            </button>
                            <button type="button" class="">
                              Semi-Furnished
                            </button>
                            <button type="button" class="">
                              Un-Furnished
                            </button>
                          </div>
                        </div>
                        <div class="Furnished">
                          <div class="title">
                            At least three furnisings are mandatory for
                            furnished
                          </div>
                          <div class="items-grid">
                            <div class="items">
                              <div class="items-btn">
                                <button type="button">-</button>
                                <div class="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div class="value">Light</div>
                            </div>
                            <div class="items">
                              <div class="items-btn">
                                <button type="button">-</button>
                                <div class="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div class="value">AC</div>
                            </div>
                            <div class="items">
                              <div class="items-btn">
                                <button type="button">-</button>
                                <div class="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div class="value">Beds</div>
                            </div>
                            <div class="items">
                              <div class="items-btn">
                                <button type="button">-</button>
                                <div class="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div class="value">Geyser</div>
                            </div>
                            <div class="items">
                              <div class="items-btn">
                                <button type="button">-</button>
                                <div class="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div class="value">Fans</div>
                            </div>
                            <div class="items">
                              <div class="items-btn">
                                <button type="button">-</button>
                                <div class="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div class="value">TV</div>
                            </div>
                            <div class="items">
                              <div class="items-btn">
                                <button type="button">-</button>
                                <div class="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div class="value">Wardrobe</div>
                            </div>
                            <div class="items checkbox">
                              <div class="items-btn"></div>
                              <div class="value">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefaultsofa"
                                  >
                                    Sofa
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="items checkbox">
                              <div class="items-btn"></div>
                              <div class="value">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefaultwashingMachine"
                                  >
                                    WashingMachine
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="items checkbox">
                              <div class="items-btn"></div>
                              <div class="value">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefaultstove"
                                  >
                                    Stove
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="items checkbox">
                              <div class="items-btn"></div>
                              <div class="value">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefaultfridge"
                                  >
                                    Fridge
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="items checkbox">
                              <div class="items-btn"></div>
                              <div class="value">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefaultwaterPurifier"
                                  >
                                    WaterPurifier
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="items checkbox">
                              <div class="items-btn"></div>
                              <div class="value">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefaultmicrowave"
                                  >
                                    Microwave
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="items checkbox">
                              <div class="items-btn"></div>
                              <div class="value">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefaultmodularKitchen"
                                  >
                                    ModularKitchen
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="items checkbox">
                              <div class="items-btn"></div>
                              <div class="value">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefaultchimney"
                                  >
                                    Chimney
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="items checkbox">
                              <div class="items-btn"></div>
                              <div class="value">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefaultdiningTable"
                                  >
                                    DiningTable
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="items checkbox">
                              <div class="items-btn"></div>
                              <div class="value">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefaultcurtains"
                                  >
                                    Curtains
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="items checkbox">
                              <div class="items-btn"></div>
                              <div class="value">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexCheckDefaultexhaustFan"
                                  >
                                    ExhaustFan
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="profilehomepage">
                          <h6 class="mb-2">
                            Reserved Parking <span>(Optional)</span>
                          </h6>
                          <div class="roomdetail-grid">
                            <div class="d-flex roomdetail align-items-center gap-2">
                              <p class="addanotherdetail">Covered Parking</p>
                              <div class="roomdetail_btn">
                                <button type="button" class="rounded-circle">
                                  -
                                </button>
                                <div class="roomdetail_value">0</div>
                                <button type="button" class="rounded-circle">
                                  +
                                </button>
                              </div>
                            </div>
                            <div class="d-flex roomdetail align-items-center gap-2">
                              <p class="addanotherdetail">Open Parking</p>
                              <div class="roomdetail_btn">
                                <button type="button" class="rounded-circle">
                                  -
                                </button>
                                <div class="roomdetail_value">0</div>
                                <button type="button" class="rounded-circle">
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="profilehomepage">
                          <h6 class="mb-2">Floor Details</h6>
                          <p class="mb-3 fw-normal addanotherdetail">
                            Total no. of floors and your floor details
                          </p>
                          <div class="mb-3 addanotherdetail-cs row">
                            <div class="col-lg-6">
                              <input
                                placeholder="Total floors"
                                class="floorplaninput"
                                type="number"
                                value=""
                                name="totalFloors"
                              />
                            </div>
                            <div class="col-lg-6 mt-3 mt-lg-0">
                              <input
                                placeholder="Property on floors"
                                class="floorplaninput"
                                type="text"
                                value=""
                                name="propertyOnFloor"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="profilehomepage">
                          <h6 class="mb-2">Availability Status</h6>
                          <div class="selectotherrrom d-flex gap-2">
                            <button type="button" class="">
                              Ready to move
                            </button>
                            <button type="button" class="">
                              Under Construction
                            </button>
                          </div>
                        </div>
                        <div class="profilehomepage">
                          <h6 class="mb-2">Age of property</h6>
                          <div class="selectotherrrom d-flex gap-2 flex-wrap">
                            <button type="button" class="">
                              0-1 years
                            </button>
                            <button type="button" class="">
                              1-5 years
                            </button>
                            <button type="button" class="">
                              5-10 years
                            </button>
                            <button type="button" class="">
                              10+ years
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <button
                          type="button"
                          class="thiyo-btn thiyo-btn-outline text-white w-100 fw-bold"
                          name="save"
                        >
                          Save
                        </button>
                      </div>
                      <div class="col-6">
                        <Link href="/property">
                          <button
                            type="submit"
                            class="thiyo-btn text-white w-100 fw-bold"
                            name="Continues"
                          >
                            Continue
                          </button>
                        </Link>
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
