import { Link } from "gatsby"
import React from "react"

import logo from "../images/IMG-20250531-WA0266.jpg"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div>
              <img className="max-h-28 max-w-xs" src={logo} alt="Holo"></img>
              <p className="text-black opacity-70 text-sm mt-5 ">
                Maisha bila Dawa za kulevya<br></br>
                Inawezekana
                <br></br>
                Kwa Leo tu.
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()}. Haki zote zimehifadhiwa.
                </span>
              </p>
              <div className="text-black font-bold block-inline">
                <p>
                  <a className="text-black font-bold block-inline" href="/">
                    PILI MISSANA Foundation 
                  </a>

                  <a
                    className="text-black font-semibold ml-1"
                    target="_blank"
                    href="https://pilimissanasoberhouse.co.tz"
                  >
                    +255715744464
                  </a>
                  </p>
                  <div className="flex gap-3 mt-2">
                  <a
                    href="https://www.instagram.com/pillimissanah_sober_house?igsh=dnQ2cGZ0Yzc5dWxw"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5 mt-1"
                      src="/img/vecteezy_instagram-logo-png-instagram-icon-transparent_18930415.png"
                      alt="Instagram"
                    ></img>
                  </a>
                    <a
                    href="https://www.facebook.com/share/16TDxGCNeM/"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5 mt-1"
                      src="/img/vecteezy_facebook-logo-png-facebook-icon-transparent-white-background_41643208.png"
                      alt="Facebook"
                    ></img>
                  </a>
                    <a
                    href="https://m.youtube.com/channel/UCNTQZkF8taHOpV6FyPRDzOA?fbclid=PAY2xjawK0vfhleHRuA2FlbQIxMAABpy68FK1cMm3XSzqF1l3ryK9QvIkw-MEkcYUo2Ke8Q1XY_4wTw5lkElctvYgC_aem_o7cvPuYt75m0-WBd-9xcXA"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5 mt-1"
                      src="/img/3146788_youtube_logo_icon.png"
                      alt="YouTube"
                    ></img>
                  </a>        
                        
                </div>
              </div>
            </div>

            <div className="place-self-end self-center xxs:hidden lg:block">
              <ul className="text-xl font-montserrat font-medium">
                <li>
                  <Link to="/">Nyumbani</Link>
                </li>
                <li>
                  <Link to="/about">Kuhusu Sisi</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>{" "}
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Wasiliana Nasi</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
