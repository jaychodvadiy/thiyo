// Loging.js
import React from "react";
import "../../../style/thiyo.css";
import Image from "next/image";
import ThiyoLogo from "../../../img/logofooter.25bbaa5d.png";
import Thiyoherder from "../herder/thiyoherder";
import beautiful from "../../../img/beautiful-umbrella-chair-around-swimming-pool-hotel-resort 1.png";

function Loging() {
  return (
    <div>
      {/* <Thiyoherder /> */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 ">
              <Image src={beautiful} alt="Beautiful Scene" />
            </div>
            <div className="col-sm-6 ">
              <div className="iconsloging my-5">
                <Image src={ThiyoLogo} alt="ThiyoLogo" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h6 className="address">Email address</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loging;
