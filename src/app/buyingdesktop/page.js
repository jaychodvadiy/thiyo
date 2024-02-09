import React from "react";
import Image from "next/image";
import folder from "../../../img/Folder.png";
import Link from "next/link";
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
                      <span class="d-flex stepcomplte align-items-center justify-content-center"></span>
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
                <form>
                  <div class="princinorder propertylistprofile uploadphothos">
                    <Link href="/property">
                      <button class="border-0 bg-transparent ps-0">
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
                    <div class="profilepage">
                      <div class="profilehomepage">
                        <h6 class="mb-2">Amenities</h6>
                        <div class="selectotherrrom d-flex gap-2 flex-wrap">
                          <button type="button" class="active">
                            Maintenance Staff
                          </button>
                          <button type="button" class="active">
                            Water Storage
                          </button>
                          <button type="button" class="active">
                            Security / Fire Alarm
                          </button>
                          <button type="button" class="active">
                            Feng Shui / Vaastu Compliant
                          </button>
                        </div>
                      </div>
                      <h6 class="">Upload from desktop</h6>
                      <div class="uploadimages pb-3">
                        <div class="image-preview mb-4">
                          <div class="row gy-3"></div>
                        </div>
                        <div class="uploadcard text-center">
                          <Image
                            alt="folder"
                            loading="lazy"
                            width="55"
                            height="55"
                            decoding="async"
                            data-nimg="1"
                            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFolder.f3dbc783.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFolder.f3dbc783.png&amp;w=128&amp;q=75 2x"
                            src={folder}
                            style={{ color: "transparent" }}
                          />
                          <p class="mt-3 mb-2">
                            Drag and drop your photos here
                          </p>
                          <span class="mb-2">
                            Upload 30 photos of max size 10 mb in format png,
                            jpeg, jpg
                          </span>
                          <div class="d-flex my-4 justify-content-center gap-4">
                            <hr class="w-25" />
                            OR
                            <hr class="w-25" />
                          </div>
                          <label for="upload-photo">Upload Photos Now</label>
                          <input
                            id="upload-photo"
                            accept="image/png, image/jpeg, image/jpg"
                            multiple=""
                            type="file"
                            name="photo"
                          />
                        </div>
                      </div>
                      <div class="profilehomepage">
                        <h6 class="mb-2 mt-4">Floor Plans</h6>
                        <div class="mb-3">
                          <div class="areaInput">
                            <div>
                              <input placeholder="Size:" type="text" value="" />
                              <div class="line"></div>
                            </div>
                            <select>
                              <option>Carpet Area</option>
                              <option>sq.ft</option>
                              <option>sq.m.</option>
                              <option>sq. yards</option>
                              <option>acres</option>
                              <option>marla</option>
                              <option>cents</option>
                            </select>
                          </div>
                          <div class="error text-red d-flex justify-content-between"></div>
                        </div>
                        <div class="mb-3">
                          <div class="areaInput">
                            <div>
                              <input
                                placeholder="Bed Size :"
                                type="text"
                                value=""
                              />
                              <div class="line"></div>
                            </div>
                            <select>
                              <option>Carpet Area</option>
                              <option>sq.ft</option>
                              <option>sq.m.</option>
                              <option>sq. yards</option>
                              <option>acres</option>
                              <option>marla</option>
                              <option>cents</option>
                            </select>
                          </div>
                          <div class="error text-red d-flex justify-content-between"></div>
                        </div>
                        <div class="mb-3">
                          <div class="areaInput">
                            <div>
                              <input
                                placeholder="Bath Size :"
                                type="text"
                                value=""
                              />
                              <div class="line"></div>
                            </div>
                            <select>
                              <option>Carpet Area</option>
                              <option>sq.ft</option>
                              <option>sq.m.</option>
                              <option>sq. yards</option>
                              <option>acres</option>
                              <option>marla</option>
                              <option>cents</option>
                            </select>
                          </div>
                          <div class="error d-flex justify-content-between text-red"></div>
                        </div>
                        <div class="mb-3">
                          <input
                            class="form-control floorplaninput w-100"
                            placeholder="Price:"
                            type="text"
                            value=""
                          />
                        </div>
                        <div class="mb-3">
                          <button
                            class="rounded-1 thiyo-btn text-white w-100 fw-bold"
                            type="button"
                          >
                            Save
                          </button>
                        </div>
                        <h6 class="mb-2 mt-4">Floor Plans List</h6>
                        <div class="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Size</th>
                                <th>Bed Size</th>
                                <th>Bath Size</th>
                                <th>Price</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                        <div class="row mt-4">
                          <div class="col-6">
                            <button
                              class="thiyo-btn rounded-1 thiyo-btn-outline text-white w-100 fw-bold d-flex gap-2 align-items-center"
                              type="button"
                            >
                              Save
                            </button>
                          </div>
                          <div class="col-6">
                            <Link href="/Leasehold">
                              <button
                                class="rounded-1 thiyo-btn text-white w-100 fw-bold"
                                type="submit"
                              >
                                Continue
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
