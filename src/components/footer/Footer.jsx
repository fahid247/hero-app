import React from "react";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div>
      <footer className="foot grid-cols-4  bg-[rgb(205,223,229)] text-black p-5 text-[min(2vw,16px)]">
  <div>
    <img className="h-[min(6vw,32px)]" src={logo} alt="" />
    <p>
      HERO.IO@Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </div>
  <nav>
    <h6 className="footer-title">Services</h6>
    <li><a className="link link-hover">Branding</a></li>
    <li><a className="link link-hover">Design</a></li>
    <li><a className="link link-hover">Marketing</a></li>
    <li><a className="link link-hover">Advertisement</a></li>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <li><a className="link link-hover">About us</a></li>
    <li><a className="link link-hover">Contact</a></li>
    <li><a className="link link-hover">Jobs</a></li>
    <li><a className="link link-hover">Press kit</a></li>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <li><a className="link link-hover">Terms of use</a></li>
    <li><a className="link link-hover">Privacy policy</a></li>
    <li><a className="link link-hover">Cookie policy</a></li>
  </nav>
</footer>
    </div>
  );
};

export default Footer;
