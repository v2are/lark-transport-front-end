import "../../Css/App.css";
import logo from "../../Images/Common/Favicon.svg";
import uparrow from "../../Images/Common/Uparrow.gif";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="Footer">
            <div className="up-arrow">
              <i className="fa-solid fa-square-up"></i>
            </div>
            <div className="container">
              <div className="footer-head">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src={logo} alt="" />
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <h5>Quick Links</h5>
                    <p>Hotel</p>
                    <p>Activities</p>
                    <p>Transfers</p>
                    <p>Combo Tours</p>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <h5>Terms and Policy</h5>
                    <p>Privacy Policy</p>
                    <p> Refund Policy</p>
                    <p>Cancellation</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <h5>Subscribe Newsletter</h5>
                    <div className="footer-subscribe">
                      <form>
                        <input type="mail" placeholder="Your email address" />
                        <button>Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_bg">
                <div className="footer_bg_one"></div>
                <div className="footer_bg_two"></div>
              </div>
              <div className="footer-copy-right">
                <div className="container">
                  <span>
                    Copyright © 2023. <b>Lark Holidays.</b> All Rights Reserved.
                  </span>
                  <span>
                    Powered by
                    <a href="https://eximho.com/">
                      {" "}
                      <b>Eximho Private Limited.</b>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="uparrow">
          <img onClick={scrollToTop} src={uparrow} alt="" />
        </div>
      </footer>
    </div>
  );
}
