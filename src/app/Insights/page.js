import React from "react";
import Image from "next/image";
import driving from "../../../img/driving-green-neon-color-motorcycle-road.jpg"
function Page() {
  return (
    <div>
      <section>
        <div className="blog">
          <div className="breadCrumb">
            <h1>Our Blogs</h1>
            <h6>Home - Blog Page</h6>
          </div>
          <div className="container">
            <div className="pt-4 blog-content">
              <div className="leftContent">
                <div className="blogListContent">
                  <Image
                    src={driving}
                    alt="driving"
                    className="img-fluid pb-3"
                  />
                  <div className="d-flex align-items-center justify-content-between gap-2 auther flex-wrap">
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.8834 9.23555H10.3846V7.73675C10.3846 7.32234 10.0489 6.98736 9.63519 6.98736C9.22153 6.98736 8.8858 7.32234 8.8858 7.73675V9.98494C8.8858 10.3994 9.22153 10.7343 9.63519 10.7343H11.8834C12.297 10.7343 12.6328 10.3994 12.6328 9.98494C12.6328 9.57053 12.297 9.23555 11.8834 9.23555ZM9.63519 15.0434C6.84594 15.0434 4.57677 12.7742 4.57677 9.98494C4.57677 7.19569 6.84594 4.92652 9.63519 4.92652C12.4244 4.92652 14.6936 7.19569 14.6936 9.98494C14.6936 12.7742 12.4244 15.0434 9.63519 15.0434ZM10.3756 3.28384C10.3771 3.2681 10.3846 3.25611 10.3846 3.24038V2.49098H11.134C11.5477 2.49098 11.8834 2.156 11.8834 1.74158C11.8834 1.32717 11.5477 0.992188 11.134 0.992188H8.1364C7.72273 0.992188 7.387 1.32717 7.387 1.74158C7.387 2.156 7.72273 2.49098 8.1364 2.49098H8.8858V3.24038C8.8858 3.25611 8.89329 3.2681 8.89479 3.28384C5.52325 3.65404 2.89062 6.51674 2.89062 9.98494C2.89062 13.7042 5.91669 16.7295 9.63519 16.7295C13.3537 16.7295 16.3798 13.7042 16.3798 9.98494C16.3798 6.51674 13.7471 3.65404 10.3756 3.28384Z"
                          fill="#7B7B7B"
                        ></path>
                        <mask
                          id="mask0_8952_8014"
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="0"
                          width="15"
                          height="17"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.8834 9.23555H10.3846V7.73675C10.3846 7.32234 10.0489 6.98736 9.63519 6.98736C9.22153 6.98736 8.8858 7.32234 8.8858 7.73675V9.98494C8.8858 10.3994 9.22153 10.7343 9.63519 10.7343H11.8834C12.297 10.7343 12.6328 10.3994 12.6328 9.98494C12.6328 9.57053 12.297 9.23555 11.8834 9.23555ZM9.63519 15.0434C6.84594 15.0434 4.57677 12.7742 4.57677 9.98494C4.57677 7.19569 6.84594 4.92652 9.63519 4.92652C12.4244 4.92652 14.6936 7.19569 14.6936 9.98494C14.6936 12.7742 12.4244 15.0434 9.63519 15.0434ZM10.3756 3.28384C10.3771 3.2681 10.3846 3.25611 10.3846 3.24038V2.49098H11.134C11.5477 2.49098 11.8834 2.156 11.8834 1.74158C11.8834 1.32717 11.5477 0.992188 11.134 0.992188H8.1364C7.72273 0.992188 7.387 1.32717 7.387 1.74158C7.387 2.156 7.72273 2.49098 8.1364 2.49098H8.8858V3.24038C8.8858 3.25611 8.89329 3.2681 8.89479 3.28384C5.52325 3.65404 2.89062 6.51674 2.89062 9.98494C2.89062 13.7042 5.91669 16.7295 9.63519 16.7295C13.3537 16.7295 16.3798 13.7042 16.3798 9.98494C16.3798 6.51674 13.7471 3.65404 10.3756 3.28384Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_8952_8014)">
                          <rect
                            x="0.642578"
                            y="0.242188"
                            width="17.9855"
                            height="17.9855"
                            fill="#7B7B7B"
                          ></rect>
                        </g>
                      </svg>
                      <h6>January 25, 2021</h6>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.9887 5.48977C10.9887 4.66319 10.3165 3.99098 9.48991 3.99098C8.66333 3.99098 7.99112 4.66319 7.99112 5.48977C7.99112 6.31636 8.66333 6.98857 9.48991 6.98857C10.3165 6.98857 10.9887 6.31636 10.9887 5.48977ZM12.4875 5.48977C12.4875 7.14294 11.1431 8.48736 9.48991 8.48736C7.83675 8.48736 6.49233 7.14294 6.49233 5.48977C6.49233 3.8366 7.83675 2.49219 9.48991 2.49219C11.1431 2.49219 12.4875 3.8366 12.4875 5.48977ZM4.24414 15.2319C4.24414 12.3393 6.59799 9.98615 9.48991 9.98615C12.3818 9.98615 14.7357 12.3393 14.7357 15.2319C14.7357 15.6456 14.4007 15.9813 13.9863 15.9813C13.5719 15.9813 13.2369 15.6456 13.2369 15.2319C13.2369 13.1658 11.556 11.4849 9.48991 11.4849C7.42383 11.4849 5.74293 13.1658 5.74293 15.2319C5.74293 15.6456 5.40795 15.9813 4.99354 15.9813C4.57912 15.9813 4.24414 15.6456 4.24414 15.2319Z"
                          fill="#7B7B7B"
                        ></path>
                        <mask
                          id="mask0_8952_8017"
                          maskUnits="userSpaceOnUse"
                          x="4"
                          y="2"
                          width="11"
                          height="14"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.9887 5.48977C10.9887 4.66319 10.3165 3.99098 9.48991 3.99098C8.66333 3.99098 7.99112 4.66319 7.99112 5.48977C7.99112 6.31636 8.66333 6.98857 9.48991 6.98857C10.3165 6.98857 10.9887 6.31636 10.9887 5.48977ZM12.4875 5.48977C12.4875 7.14294 11.1431 8.48736 9.48991 8.48736C7.83675 8.48736 6.49233 7.14294 6.49233 5.48977C6.49233 3.8366 7.83675 2.49219 9.48991 2.49219C11.1431 2.49219 12.4875 3.8366 12.4875 5.48977ZM4.24414 15.2319C4.24414 12.3393 6.59799 9.98615 9.48991 9.98615C12.3818 9.98615 14.7357 12.3393 14.7357 15.2319C14.7357 15.6456 14.4007 15.9813 13.9863 15.9813C13.5719 15.9813 13.2369 15.6456 13.2369 15.2319C13.2369 13.1658 11.556 11.4849 9.48991 11.4849C7.42383 11.4849 5.74293 13.1658 5.74293 15.2319C5.74293 15.6456 5.40795 15.9813 4.99354 15.9813C4.57912 15.9813 4.24414 15.6456 4.24414 15.2319Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_8952_8017)">
                          <rect
                            x="0.498047"
                            y="0.242188"
                            width="17.9855"
                            height="17.9855"
                            fill="#7B7B7B"
                          ></rect>
                        </g>
                      </svg>
                      <h6>Cristofer Westervelt</h6>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.07916 8.4856C6.07916 8.07194 6.41489 7.73621 6.82856 7.73621C7.24223 7.73621 7.57796 8.07194 7.57796 8.4856C7.57796 8.89927 7.24223 9.235 6.82856 9.235C6.41489 9.235 6.07916 8.89927 6.07916 8.4856ZM9.82614 7.73621C9.41248 7.73621 9.07675 8.07194 9.07675 8.4856C9.07675 8.89927 9.41248 9.235 9.82614 9.235C10.2398 9.235 10.5755 8.89927 10.5755 8.4856C10.5755 8.07194 10.2398 7.73621 9.82614 7.73621ZM12.8237 7.73621C12.4101 7.73621 12.0743 8.07194 12.0743 8.4856C12.0743 8.89927 12.4101 9.235 12.8237 9.235C13.2374 9.235 13.5731 8.89927 13.5731 8.4856C13.5731 8.07194 13.2374 7.73621 12.8237 7.73621ZM15.7452 9.456C15.3652 11.8945 13.3996 13.9172 10.9648 14.3735C9.78897 14.5954 8.59144 14.4687 7.50481 14.0086C7.19681 13.8782 6.87832 13.8122 6.56582 13.8122C6.42344 13.8122 6.28255 13.8257 6.14391 13.8535L4.03661 14.2746L4.45852 12.1636C4.54695 11.7252 4.49299 11.256 4.30339 10.8072C3.84326 9.72054 3.71737 8.52375 3.93844 7.3472C4.39482 4.91241 6.41669 2.94674 8.85598 2.5668C10.7969 2.26479 12.6951 2.8763 14.065 4.24619C15.4357 5.61684 16.0479 7.51581 15.7452 9.456ZM15.1254 3.18655C13.4131 1.47493 11.045 0.711292 8.62516 1.08524C5.56987 1.56186 3.03691 4.02288 2.46512 7.07067C2.18935 8.53799 2.34822 10.0323 2.92301 11.3909C2.9957 11.564 3.01818 11.7252 2.9897 11.8698L2.34672 15.0832C2.29726 15.329 2.37445 15.5831 2.55205 15.7599C2.69369 15.9023 2.88479 15.9795 3.08188 15.9795C3.13059 15.9795 3.1793 15.975 3.22876 15.9653L6.43842 15.323C6.62277 15.2878 6.80113 15.3395 6.92029 15.389C8.28044 15.9638 9.77474 16.1219 11.2406 15.8469C14.2891 15.2751 16.7501 12.7421 17.2267 9.68681C17.6029 7.26851 16.8378 4.89892 15.1254 3.18655Z"
                          fill="#7B7B7B"
                        ></path>
                        <mask
                          id="mask0_8952_8020"
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.07916 8.4856C6.07916 8.07194 6.41489 7.73621 6.82856 7.73621C7.24223 7.73621 7.57796 8.07194 7.57796 8.4856C7.57796 8.89927 7.24223 9.235 6.82856 9.235C6.41489 9.235 6.07916 8.89927 6.07916 8.4856ZM9.82614 7.73621C9.41248 7.73621 9.07675 8.07194 9.07675 8.4856C9.07675 8.89927 9.41248 9.235 9.82614 9.235C10.2398 9.235 10.5755 8.89927 10.5755 8.4856C10.5755 8.07194 10.2398 7.73621 9.82614 7.73621ZM12.8237 7.73621C12.4101 7.73621 12.0743 8.07194 12.0743 8.4856C12.0743 8.89927 12.4101 9.235 12.8237 9.235C13.2374 9.235 13.5731 8.89927 13.5731 8.4856C13.5731 8.07194 13.2374 7.73621 12.8237 7.73621ZM15.7452 9.456C15.3652 11.8945 13.3996 13.9172 10.9648 14.3735C9.78897 14.5954 8.59144 14.4687 7.50481 14.0086C7.19681 13.8782 6.87832 13.8122 6.56582 13.8122C6.42344 13.8122 6.28255 13.8257 6.14391 13.8535L4.03661 14.2746L4.45852 12.1636C4.54695 11.7252 4.49299 11.256 4.30339 10.8072C3.84326 9.72054 3.71737 8.52375 3.93844 7.3472C4.39482 4.91241 6.41669 2.94674 8.85598 2.5668C10.7969 2.26479 12.6951 2.8763 14.065 4.24619C15.4357 5.61684 16.0479 7.51581 15.7452 9.456ZM15.1254 3.18655C13.4131 1.47493 11.045 0.711292 8.62516 1.08524C5.56987 1.56186 3.03691 4.02288 2.46512 7.07067C2.18935 8.53799 2.34822 10.0323 2.92301 11.3909C2.9957 11.564 3.01818 11.7252 2.9897 11.8698L2.34672 15.0832C2.29726 15.329 2.37445 15.5831 2.55205 15.7599C2.69369 15.9023 2.88479 15.9795 3.08188 15.9795C3.13059 15.9795 3.1793 15.975 3.22876 15.9653L6.43842 15.323C6.62277 15.2878 6.80113 15.3395 6.92029 15.389C8.28044 15.9638 9.77474 16.1219 11.2406 15.8469C14.2891 15.2751 16.7501 12.7421 17.2267 9.68681C17.6029 7.26851 16.8378 4.89892 15.1254 3.18655Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_8952_8020)">
                          <rect
                            x="0.833984"
                            y="0.242188"
                            width="17.9855"
                            height="17.9855"
                            fill="#7B7B7B"
                          ></rect>
                        </g>
                      </svg>
                      <h6>10 Comment</h6>
                    </div>
                  </div>
                  <div className="bloglist">
                    <h2>
                      OYO: Disrupting the Hospitality Industry with Phenomenal
                      Growth &amp; Global Expansion
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ultrices facilisi sed tincidunt mauris duis pulvinar
                      convallis eu. Lobortis scelerisque aliquam massa arcu,
                      eget. Sociis odio quis eget lacus. Dolor at enim viverra
                      laoreet molestie amet cursus et. Sed lacus, viverra
                      lacinia scelerisque cras aliquam blandit.
                    </p>
                    <button className="mt-4">Read More</button>
                  </div>
                </div>
                <div className="blogListContent">
                <Image
                    src={driving}
                    alt="driving"
                    className="img-fluid pb-3"
                  />
                  <div className="d-flex align-items-center justify-content-between gap-2 auther flex-wrap">
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.8834 9.23555H10.3846V7.73675C10.3846 7.32234 10.0489 6.98736 9.63519 6.98736C9.22153 6.98736 8.8858 7.32234 8.8858 7.73675V9.98494C8.8858 10.3994 9.22153 10.7343 9.63519 10.7343H11.8834C12.297 10.7343 12.6328 10.3994 12.6328 9.98494C12.6328 9.57053 12.297 9.23555 11.8834 9.23555ZM9.63519 15.0434C6.84594 15.0434 4.57677 12.7742 4.57677 9.98494C4.57677 7.19569 6.84594 4.92652 9.63519 4.92652C12.4244 4.92652 14.6936 7.19569 14.6936 9.98494C14.6936 12.7742 12.4244 15.0434 9.63519 15.0434ZM10.3756 3.28384C10.3771 3.2681 10.3846 3.25611 10.3846 3.24038V2.49098H11.134C11.5477 2.49098 11.8834 2.156 11.8834 1.74158C11.8834 1.32717 11.5477 0.992188 11.134 0.992188H8.1364C7.72273 0.992188 7.387 1.32717 7.387 1.74158C7.387 2.156 7.72273 2.49098 8.1364 2.49098H8.8858V3.24038C8.8858 3.25611 8.89329 3.2681 8.89479 3.28384C5.52325 3.65404 2.89062 6.51674 2.89062 9.98494C2.89062 13.7042 5.91669 16.7295 9.63519 16.7295C13.3537 16.7295 16.3798 13.7042 16.3798 9.98494C16.3798 6.51674 13.7471 3.65404 10.3756 3.28384Z"
                          fill="#7B7B7B"
                        ></path>
                        <mask
                          id="mask0_8952_8014"
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="0"
                          width="15"
                          height="17"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.8834 9.23555H10.3846V7.73675C10.3846 7.32234 10.0489 6.98736 9.63519 6.98736C9.22153 6.98736 8.8858 7.32234 8.8858 7.73675V9.98494C8.8858 10.3994 9.22153 10.7343 9.63519 10.7343H11.8834C12.297 10.7343 12.6328 10.3994 12.6328 9.98494C12.6328 9.57053 12.297 9.23555 11.8834 9.23555ZM9.63519 15.0434C6.84594 15.0434 4.57677 12.7742 4.57677 9.98494C4.57677 7.19569 6.84594 4.92652 9.63519 4.92652C12.4244 4.92652 14.6936 7.19569 14.6936 9.98494C14.6936 12.7742 12.4244 15.0434 9.63519 15.0434ZM10.3756 3.28384C10.3771 3.2681 10.3846 3.25611 10.3846 3.24038V2.49098H11.134C11.5477 2.49098 11.8834 2.156 11.8834 1.74158C11.8834 1.32717 11.5477 0.992188 11.134 0.992188H8.1364C7.72273 0.992188 7.387 1.32717 7.387 1.74158C7.387 2.156 7.72273 2.49098 8.1364 2.49098H8.8858V3.24038C8.8858 3.25611 8.89329 3.2681 8.89479 3.28384C5.52325 3.65404 2.89062 6.51674 2.89062 9.98494C2.89062 13.7042 5.91669 16.7295 9.63519 16.7295C13.3537 16.7295 16.3798 13.7042 16.3798 9.98494C16.3798 6.51674 13.7471 3.65404 10.3756 3.28384Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_8952_8014)">
                          <rect
                            x="0.642578"
                            y="0.242188"
                            width="17.9855"
                            height="17.9855"
                            fill="#7B7B7B"
                          ></rect>
                        </g>
                      </svg>
                      <h6>January 25, 2021</h6>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.9887 5.48977C10.9887 4.66319 10.3165 3.99098 9.48991 3.99098C8.66333 3.99098 7.99112 4.66319 7.99112 5.48977C7.99112 6.31636 8.66333 6.98857 9.48991 6.98857C10.3165 6.98857 10.9887 6.31636 10.9887 5.48977ZM12.4875 5.48977C12.4875 7.14294 11.1431 8.48736 9.48991 8.48736C7.83675 8.48736 6.49233 7.14294 6.49233 5.48977C6.49233 3.8366 7.83675 2.49219 9.48991 2.49219C11.1431 2.49219 12.4875 3.8366 12.4875 5.48977ZM4.24414 15.2319C4.24414 12.3393 6.59799 9.98615 9.48991 9.98615C12.3818 9.98615 14.7357 12.3393 14.7357 15.2319C14.7357 15.6456 14.4007 15.9813 13.9863 15.9813C13.5719 15.9813 13.2369 15.6456 13.2369 15.2319C13.2369 13.1658 11.556 11.4849 9.48991 11.4849C7.42383 11.4849 5.74293 13.1658 5.74293 15.2319C5.74293 15.6456 5.40795 15.9813 4.99354 15.9813C4.57912 15.9813 4.24414 15.6456 4.24414 15.2319Z"
                          fill="#7B7B7B"
                        ></path>
                        <mask
                          id="mask0_8952_8017"
                          maskUnits="userSpaceOnUse"
                          x="4"
                          y="2"
                          width="11"
                          height="14"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.9887 5.48977C10.9887 4.66319 10.3165 3.99098 9.48991 3.99098C8.66333 3.99098 7.99112 4.66319 7.99112 5.48977C7.99112 6.31636 8.66333 6.98857 9.48991 6.98857C10.3165 6.98857 10.9887 6.31636 10.9887 5.48977ZM12.4875 5.48977C12.4875 7.14294 11.1431 8.48736 9.48991 8.48736C7.83675 8.48736 6.49233 7.14294 6.49233 5.48977C6.49233 3.8366 7.83675 2.49219 9.48991 2.49219C11.1431 2.49219 12.4875 3.8366 12.4875 5.48977ZM4.24414 15.2319C4.24414 12.3393 6.59799 9.98615 9.48991 9.98615C12.3818 9.98615 14.7357 12.3393 14.7357 15.2319C14.7357 15.6456 14.4007 15.9813 13.9863 15.9813C13.5719 15.9813 13.2369 15.6456 13.2369 15.2319C13.2369 13.1658 11.556 11.4849 9.48991 11.4849C7.42383 11.4849 5.74293 13.1658 5.74293 15.2319C5.74293 15.6456 5.40795 15.9813 4.99354 15.9813C4.57912 15.9813 4.24414 15.6456 4.24414 15.2319Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_8952_8017)">
                          <rect
                            x="0.498047"
                            y="0.242188"
                            width="17.9855"
                            height="17.9855"
                            fill="#7B7B7B"
                          ></rect>
                        </g>
                      </svg>
                      <h6>Cristofer Westervelt</h6>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.07916 8.4856C6.07916 8.07194 6.41489 7.73621 6.82856 7.73621C7.24223 7.73621 7.57796 8.07194 7.57796 8.4856C7.57796 8.89927 7.24223 9.235 6.82856 9.235C6.41489 9.235 6.07916 8.89927 6.07916 8.4856ZM9.82614 7.73621C9.41248 7.73621 9.07675 8.07194 9.07675 8.4856C9.07675 8.89927 9.41248 9.235 9.82614 9.235C10.2398 9.235 10.5755 8.89927 10.5755 8.4856C10.5755 8.07194 10.2398 7.73621 9.82614 7.73621ZM12.8237 7.73621C12.4101 7.73621 12.0743 8.07194 12.0743 8.4856C12.0743 8.89927 12.4101 9.235 12.8237 9.235C13.2374 9.235 13.5731 8.89927 13.5731 8.4856C13.5731 8.07194 13.2374 7.73621 12.8237 7.73621ZM15.7452 9.456C15.3652 11.8945 13.3996 13.9172 10.9648 14.3735C9.78897 14.5954 8.59144 14.4687 7.50481 14.0086C7.19681 13.8782 6.87832 13.8122 6.56582 13.8122C6.42344 13.8122 6.28255 13.8257 6.14391 13.8535L4.03661 14.2746L4.45852 12.1636C4.54695 11.7252 4.49299 11.256 4.30339 10.8072C3.84326 9.72054 3.71737 8.52375 3.93844 7.3472C4.39482 4.91241 6.41669 2.94674 8.85598 2.5668C10.7969 2.26479 12.6951 2.8763 14.065 4.24619C15.4357 5.61684 16.0479 7.51581 15.7452 9.456ZM15.1254 3.18655C13.4131 1.47493 11.045 0.711292 8.62516 1.08524C5.56987 1.56186 3.03691 4.02288 2.46512 7.07067C2.18935 8.53799 2.34822 10.0323 2.92301 11.3909C2.9957 11.564 3.01818 11.7252 2.9897 11.8698L2.34672 15.0832C2.29726 15.329 2.37445 15.5831 2.55205 15.7599C2.69369 15.9023 2.88479 15.9795 3.08188 15.9795C3.13059 15.9795 3.1793 15.975 3.22876 15.9653L6.43842 15.323C6.62277 15.2878 6.80113 15.3395 6.92029 15.389C8.28044 15.9638 9.77474 16.1219 11.2406 15.8469C14.2891 15.2751 16.7501 12.7421 17.2267 9.68681C17.6029 7.26851 16.8378 4.89892 15.1254 3.18655Z"
                          fill="#7B7B7B"
                        ></path>
                        <mask
                          id="mask0_8952_8020"
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.07916 8.4856C6.07916 8.07194 6.41489 7.73621 6.82856 7.73621C7.24223 7.73621 7.57796 8.07194 7.57796 8.4856C7.57796 8.89927 7.24223 9.235 6.82856 9.235C6.41489 9.235 6.07916 8.89927 6.07916 8.4856ZM9.82614 7.73621C9.41248 7.73621 9.07675 8.07194 9.07675 8.4856C9.07675 8.89927 9.41248 9.235 9.82614 9.235C10.2398 9.235 10.5755 8.89927 10.5755 8.4856C10.5755 8.07194 10.2398 7.73621 9.82614 7.73621ZM12.8237 7.73621C12.4101 7.73621 12.0743 8.07194 12.0743 8.4856C12.0743 8.89927 12.4101 9.235 12.8237 9.235C13.2374 9.235 13.5731 8.89927 13.5731 8.4856C13.5731 8.07194 13.2374 7.73621 12.8237 7.73621ZM15.7452 9.456C15.3652 11.8945 13.3996 13.9172 10.9648 14.3735C9.78897 14.5954 8.59144 14.4687 7.50481 14.0086C7.19681 13.8782 6.87832 13.8122 6.56582 13.8122C6.42344 13.8122 6.28255 13.8257 6.14391 13.8535L4.03661 14.2746L4.45852 12.1636C4.54695 11.7252 4.49299 11.256 4.30339 10.8072C3.84326 9.72054 3.71737 8.52375 3.93844 7.3472C4.39482 4.91241 6.41669 2.94674 8.85598 2.5668C10.7969 2.26479 12.6951 2.8763 14.065 4.24619C15.4357 5.61684 16.0479 7.51581 15.7452 9.456ZM15.1254 3.18655C13.4131 1.47493 11.045 0.711292 8.62516 1.08524C5.56987 1.56186 3.03691 4.02288 2.46512 7.07067C2.18935 8.53799 2.34822 10.0323 2.92301 11.3909C2.9957 11.564 3.01818 11.7252 2.9897 11.8698L2.34672 15.0832C2.29726 15.329 2.37445 15.5831 2.55205 15.7599C2.69369 15.9023 2.88479 15.9795 3.08188 15.9795C3.13059 15.9795 3.1793 15.975 3.22876 15.9653L6.43842 15.323C6.62277 15.2878 6.80113 15.3395 6.92029 15.389C8.28044 15.9638 9.77474 16.1219 11.2406 15.8469C14.2891 15.2751 16.7501 12.7421 17.2267 9.68681C17.6029 7.26851 16.8378 4.89892 15.1254 3.18655Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_8952_8020)">
                          <rect
                            x="0.833984"
                            y="0.242188"
                            width="17.9855"
                            height="17.9855"
                            fill="#7B7B7B"
                          ></rect>
                        </g>
                      </svg>
                      <h6>10 Comment</h6>
                    </div>
                  </div>
                  <div className="bloglist">
                    <h2>
                      OYO: Disrupting the Hospitality Industry with Phenomenal
                      Growth &amp; Global Expansion
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ultrices facilisi sed tincidunt mauris duis pulvinar
                      convallis eu. Lobortis scelerisque aliquam massa arcu,
                      eget. Sociis odio quis eget lacus. Dolor at enim viverra
                      laoreet molestie amet cursus et. Sed lacus, viverra
                      lacinia scelerisque cras aliquam blandit.
                    </p>
                    <button className="mt-4">Read More</button>
                  </div>
                </div>
              </div>
              <div className="rightSidebar">
                <div className="blog-search">
                  <input placeholder="Search here..." type="text" />
                  <div className="cursor-pointer">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.25977 11.8945C5.25977 8.58553 7.95077 5.89453 11.2598 5.89453C14.5688 5.89453 17.2598 8.58553 17.2598 11.8945C17.2598 15.2035 14.5688 17.8945 11.2598 17.8945C7.95077 17.8945 5.25977 15.2035 5.25977 11.8945ZM20.9668 20.1875L17.5718 16.7915C18.6248 15.4375 19.2598 13.7405 19.2598 11.8945C19.2598 7.48353 15.6708 3.89453 11.2598 3.89453C6.84877 3.89453 3.25977 7.48353 3.25977 11.8945C3.25977 16.3055 6.84877 19.8945 11.2598 19.8945C13.1058 19.8945 14.8028 19.2595 16.1568 18.2065L19.5528 21.6015C19.7478 21.7965 20.0038 21.8945 20.2598 21.8945C20.5158 21.8945 20.7718 21.7965 20.9668 21.6015C21.3578 21.2105 21.3578 20.5785 20.9668 20.1875Z"
                        fill="#7B7B7B"
                      ></path>
                      <mask
                        id="mask0_8952_8029"
                        maskUnits="userSpaceOnUse"
                        x="3"
                        y="3"
                        width="19"
                        height="19"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.25977 11.8945C5.25977 8.58553 7.95077 5.89453 11.2598 5.89453C14.5688 5.89453 17.2598 8.58553 17.2598 11.8945C17.2598 15.2035 14.5688 17.8945 11.2598 17.8945C7.95077 17.8945 5.25977 15.2035 5.25977 11.8945ZM20.9668 20.1875L17.5718 16.7915C18.6248 15.4375 19.2598 13.7405 19.2598 11.8945C19.2598 7.48353 15.6708 3.89453 11.2598 3.89453C6.84877 3.89453 3.25977 7.48353 3.25977 11.8945C3.25977 16.3055 6.84877 19.8945 11.2598 19.8945C13.1058 19.8945 14.8028 19.2595 16.1568 18.2065L19.5528 21.6015C19.7478 21.7965 20.0038 21.8945 20.2598 21.8945C20.5158 21.8945 20.7718 21.7965 20.9668 21.6015C21.3578 21.2105 21.3578 20.5785 20.9668 20.1875Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_8952_8029)">
                        <rect
                          x="0.259766"
                          y="0.894531"
                          width="24"
                          height="24"
                          fill="#7B7B7B"
                        ></rect>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="card">
                  <h2>Latest Post</h2>
                  <div className="post-list">
                    <div className="post-item">
                      <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1624535948032-f6f24ab1f319"
                        alt="Image"
                      />
                      <p>Minimal Post With A Preview Image</p>
                    </div>
                    <div className="post-item">
                      <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1624535948032-f6f24ab1f319"
                        alt="Image"
                      />
                      <p>Good Design Makes Me Happy</p>
                    </div>
                    <div className="post-item">
                      <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1624535948032-f6f24ab1f319"
                        alt="Image"
                      />
                      <p>Best 27 Design Blogs for 2021</p>
                    </div>
                    <div className="post-item">
                      <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1624535948032-f6f24ab1f319"
                        alt="Image"
                      />
                      <p>Creative Ways To Use Infographics For Your Business</p>
                    </div>
                    <div className="post-item">
                      <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1624535948032-f6f24ab1f319"
                        alt="Image"
                      />
                      <p>
                        Tumblr Banner Templates : Tips To Get Better Engagement
                      </p>
                    </div>
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
