import ThiyoLogo from "../../../img/logofooter.25bbaa5d.png";
import instgaram from "../../../img/bx_bxl-instagram-alt.png";
import Faecbook from "../../../img/typcn_social-facebook.png";
import twitter from "../../../img/typcn_social-twitter.png";
import IosApp from "../../../img/image 60.png";
import AndroidApp from "../../../img/image 61.png";
import Image from "next/image";
function Footer() {
  return (
    <div>
      <section className="footerthiyocopy">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="">
                <Image className="fliude" src={ThiyoLogo} alt="ThiyoLogo" />
                <p className="mt-4 nemoenin">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur a odit
                  aut fugit sed consequuntur magni dolores eos qui ratione.
                </p>
                <p className="nemoenin">Follow Us</p>
                <div>
                  <a
                    href="https://www.instagram.com/accounts/login/?hl=en"
                    target="_blank"
                  >
                    <Image
                      className="sociemide"
                      src={instgaram}
                      alt="instagram"
                    />
                  </a>
                  <a href="https://www.facebook.com/login/" target="_blank">
                    <Image
                      className="sociemide"
                      src={Faecbook}
                      alt="facebook"
                    />
                  </a>
                  <a href="https://twitter.com/i/flow/login" target="_blank">
                    <Image className="sociemide" src={twitter} alt="twitter" />
                  </a>
                </div>
                <div className="apios">
                  <a
                    href=" https://support.apple.com/en-in/HT204053"
                    target="_blank"
                  >
                    <Image className="apply" src={IosApp} alt="IosApp" />
                  </a>
                  <a
                    href="https://play.google.com/store/myplayactivity "
                    target="_blank"
                  >
                    <Image
                      className="applye"
                      src={AndroidApp}
                      alt="AndroidApp"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-lg-2">
              <th className="mb-5  explore">Explore</th>
              <p className="footer">About</p>
              <p className="footer">Media Centre</p>
              <p className="footer">Articles</p>
              <p className="footer">Glossary</p>
              <p className="footer">Carrers</p>
              <p className="footer">Contact Us</p>
            </div>
            <div className="col-sm-3 col-lg-3">
              <th className="explore">Services & Tools</th>
              <p className="footer">Property Management</p>
              <p className="footer">Property Valuation</p>
              <p className="footer">Rates & Trends</p>
              <p className="footer">Area Converter</p>
              <p className="footer">Property Worth</p>
              <p className="footer">Holiday Homes & Flight Bookings</p>
            </div>
            <div className="col-sm-3 col-lg-3">
              <th className="explore">More Information</th>
              <p className="footer">Terms & Condition</p>
              <p className="footer">Privacy Policy</p>
              <p className="footer">Cookie Policy</p>
              <p className="footer">Disclaimer</p>
              <p className="footer">Disclosure</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="thiyoshare">
                <p>
                  Thiyo shall neither be responsible nor liable for any
                  inaccuracy in the information provided here and therefore the
                  customers are requested to independently validate the
                  information from the respective developers before making their
                  decisions related to properties displayed here. Thiyo, its
                  directors, employees, agents and other representatives shall
                  not be liable for any action taken, cost / expenses / losses
                  incurred, by you.
                </p>
                <hr />
              </div>
            </div>
          </div>
          <div className="copylink">
            <p>© Thiyo 2023. All Rights Reserved</p>
            <p className="linksvg">
              More Links{" "}
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.17045 0.84375L4.58008 4.25338L7.98971 0.84375L9.03711 1.89858L4.58008 6.35561L0.123047 1.89858L1.17045 0.84375Z"
                  fill="white"
                ></path>
              </svg>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
