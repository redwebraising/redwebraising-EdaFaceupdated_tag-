import React from "react";
import { Link } from "react-router-dom";
import edafacelogo from "../../images/edafacelogo.png";
import chevronright from "../../images/chevronright.svg";
import breadcrum from "../../images/breadcrum.svg";
// import devModal from "./devmodal";

const Nav = () => {
  return (
    <div>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark bac-nav">
          <div className="container-fluid">
            <a href="https://www.edaface.com" className="navbar-brand logo">
              {" "}
              <img src={edafacelogo} className="img-fluid" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                src={breadcrum}
                className="navbar-toggler-icon"
                alt="breadcrum"
              />
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Cryptocurrencies{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="https://app.edaface.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="dropdown-item"
                      >
                        {" "}
                        Classification{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://app.edaface.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="dropdown-item"
                      >
                        {" "}
                        Trending{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://launchpad.edaface.com/login"
                        className="dropdown-item"
                      >
                        {" "}
                        Eda Token{" "}
                      </a>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#devModal"
                      >
                        {" "}
                        P2P Trading{" "}
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Exchanges{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="https://app.edaface.com/exchanges/spots"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="dropdown-item"
                      >
                        {" "}
                        Spot{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://app.edaface.com/exchanges/derivatives"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="dropdown-item"
                      >
                        {" "}
                        Derivatives{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://app.edaface.com/exchanges/dex"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="dropdown-item"
                      >
                        {" "}
                        Dex{" "}
                      </a>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#devModal"
                      >
                        {" "}
                        Eda Plantation
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Verification Centre{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to=""
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#devModal"
                      >
                        {" "}
                        Rug Pull Check{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#devModal"
                      >
                        {" "}
                        Blockchain Ecosystem{" "}
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://launchpad.edaface.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="dropdown-item"
                      >
                        {" "}
                        Launchpad{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <Link
                    to=""
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Market Places{" "}
                  </Link>
                  <ul class="dropdown-menu">
                    <li>
                      <Link
                        to=""
                        class="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#devModal"
                      >
                        {" "}
                        NFTs{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        class="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#devModal"
                      >
                        {" "}
                        Digital Literature
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        class="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#devModal"
                      >
                        {" "}
                        Digital Mall{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        class="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#devModal"
                      >
                        {" "}
                        Metaverse{" "}
                      </Link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <Link
                    to=""
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    EDA Academy
                  </Link>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        href="https://school.edaface.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        class="dropdown-item"
                      >
                        {" "}
                        SOC{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://news.edaface.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        class="dropdown-item"
                      >
                        {" "}
                        Cryto News{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://clinic.edaface.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        class="dropdown-item"
                      >
                        {" "}
                        Digital Clinic{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <Link
                    to=""
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Resources{" "}
                  </Link>
                  <ul class="dropdown-menu adjust">
                    <li class="has-megasubmenu">
                      <Link to="" class="dropdown-item">
                        {" "}
                        About Us{" "}
                        <img
                          src={chevronright}
                          className="img-fluid chev"
                          alt="chevron"
                        />{" "}
                      </Link>
                      <div class="megasubmenu dropdown-menu">
                        <div class="row">
                          <div class="col-6">
                            <ul class="list-unstyled">
                              <li>
                                <Link to="/vision" className="link-to-nav">
                                  Vision
                                </Link>
                              </li>
                              <li>
                                <Link to="/mission" className="link-to-nav">
                                  Mission
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <ul class="list-unstyled">
                              <li>
                                <Link to="/core" className="link-to-nav">
                                  Core Values
                                </Link>
                              </li>
                              <li>
                                <Link to="/branding" className="link-to-nav">
                                  Branding
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <a
                        href="https://launchpad.edaface.com/white-paper"
                        class="dropdown-item"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {" "}
                        Litepaper{" "}
                      </a>
                    </li>

                    <li class="has-megasubmenu">
                      <Link to="" class="dropdown-item">
                        {" "}
                        How to use Edaface{" "}
                        <img
                          src={chevronright}
                          className="img-fluid chev"
                          alt="chevron"
                        />{" "}
                      </Link>
                      <div class="megasubmenu dropdown-menu">
                        <div class="row">
                          <div class="col-6">
                            <ul class="list-unstyled">
                              <li>
                                <Link
                                  to="/introduction"
                                  className="link-to-nav"
                                >
                                  Introduction
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/edafacecharacteristics"
                                  className="link-to-nav"
                                >
                                  4 Characteristics of Edaface
                                </Link>
                              </li>
                              <li>
                                <Link to="/structure" className="link-to-nav">
                                  Edaface Structure
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <li className="nav-item dropdown">
                              <Link
                                to=""
                                className=" nav-link adjust-colo-nav dropdown-toggle"
                                data-bs-toggle="dropdown"
                              >
                                Components
                              </Link>

                              <ul className="dropdown-menu dropend">
                                <li>
                                  <Link
                                    to="/component1"
                                    className="dropdown-item dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                  >
                                    {" "}
                                    Component 1
                                  </Link>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <Link to="/component1" className="">
                                        {" "}
                                        Introduction
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/listing-platform" className="">
                                        {" "}
                                        Listing Platform
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/peer-to-peer" className="">
                                        {" "}
                                        Peer-to-Peer trading platform
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/advertisement-platform"
                                        className=""
                                      >
                                        {" "}
                                        Advertisement Platform
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/trending-platforms"
                                        className=""
                                      >
                                        {" "}
                                        Trending Platform
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    to="/component2"
                                    className="dropdown-item dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                  >
                                    {" "}
                                    Component 2
                                  </Link>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <Link to="/component2" className="">
                                        {" "}
                                        Introduction
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/spot-exchange-platform"
                                        className=""
                                      >
                                        {" "}
                                        Spot Exchange Platform
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/derivatives-exchange-platform"
                                        className=""
                                      >
                                        {" "}
                                        Derivatives Exchange Platform
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/edalaunchpad" className="">
                                        {" "}
                                        Launchpad
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    to="/component3"
                                    className="dropdown-item dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                  >
                                    {" "}
                                    Component 3
                                  </Link>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <Link to="/component3" className="">
                                        {" "}
                                        Introduction
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/dex-listing-platform"
                                        className=""
                                      >
                                        {" "}
                                        Dex Listing Platform
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/edaface-plantation"
                                        className=""
                                      >
                                        {" "}
                                        EdaFace Plantation
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    to="/component3"
                                    className="dropdown-item dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                  >
                                    {" "}
                                    Component 4
                                  </Link>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <Link to="/component4" className="">
                                        {" "}
                                        Introduction
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/rug-pull-detection"
                                        className=""
                                      >
                                        {" "}
                                        Rugpull Detection Centre
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/soc-scorecard" className="">
                                        {" "}
                                        SOC Scorecard for Rugpull Detection
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/components-of-productivity"
                                        className=""
                                      >
                                        {" "}
                                        The Eight Components of Productivity
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/soc-interpretations"
                                        className=""
                                      >
                                        {" "}
                                        SOC Interpretation of the 4-year
                                        Scorecard
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/edaface-two-levels-verification"
                                        className=""
                                      >
                                        {" "}
                                        Edaface Two-Levels of Verification
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/blockchain-ecosystem"
                                        className=""
                                      >
                                        {" "}
                                        Blockchain Ecosystem
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    to="/component3"
                                    className="dropdown-item dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                  >
                                    {" "}
                                    Component 5
                                  </Link>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <Link to="/component5" className="">
                                        {" "}
                                        Introduction
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/three-kinds-of-nft"
                                        className=""
                                      >
                                        {" "}
                                        Three Kinds of NFT on Edaface
                                        Marketplace
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/compartments-of-edaface-nft-marketplace"
                                        className=""
                                      >
                                        {" "}
                                        Compartments of Edaface NFT Marketplace
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/characteristics-of-edaface-marketplace"
                                        className=""
                                      >
                                        {" "}
                                        Characteristics of Edaface NFT
                                        Marketplace
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    to="/component3"
                                    className="dropdown-item dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                  >
                                    {" "}
                                    Component 6
                                  </Link>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <Link to="/component6" className="">
                                        {" "}
                                        Introduction
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/purpose-of-edaface-digital-literature"
                                        className=""
                                      >
                                        {" "}
                                        Purpose of Edaface Digital Literature
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/compartments-of-edaface-digital-literature"
                                        className=""
                                      >
                                        {" "}
                                        Compartments of Edaface Literature
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    to="/component3"
                                    className="dropdown-item dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                  >
                                    {" "}
                                    Component 7
                                  </Link>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <Link to="/component7" className="">
                                        {" "}
                                        Introduction
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/category-platform-of-edaface-mall"
                                        className=""
                                      >
                                        {" "}
                                        Category Platforms of Edaface
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/continental-shopping-regions"
                                        className=""
                                      >
                                        {" "}
                                        Continental Shopping Regions
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/architecture-of-edaface-mall"
                                        className=""
                                      >
                                        {" "}
                                        Architecture of Edaface Mall
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/selling-on-edaface-mall"
                                        className=""
                                      >
                                        {" "}
                                        Selling on Edaface Mall
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/seller-rents-a-shop"
                                        className=""
                                      >
                                        {" "}
                                        Seller Rents a Shop
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/seller-registers-an-item-for-sale"
                                        className=""
                                      >
                                        {" "}
                                        Seller Register an Item
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/seller-submits-the-item"
                                        className=""
                                      >
                                        {" "}
                                        Seller Submits the Item for Display
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/items-is-displayed-in-the-relavent-places"
                                        className=""
                                      >
                                        {" "}
                                        Items is Diplayed in the relevant places
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/expired-shop-rental"
                                        className=""
                                      >
                                        {" "}
                                        Expired Shop Rental Fee
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/how-buyers-can-make-a-purchase"
                                        className=""
                                      >
                                        {" "}
                                        How Buyers can make a Purchase
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/user-rights" className="">
                                        {" "}
                                        User Rights
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/shop-rental-fee" className="">
                                        {" "}
                                        Shop Rental Fee
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/edaface-mall-safety-tips"
                                        className=""
                                      >
                                        {" "}
                                        Edaface Mall Safety Tips
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/miscellaneous" className="">
                                        {" "}
                                        Miscellaneous
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    to="/component3"
                                    className="dropdown-item dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                  >
                                    {" "}
                                    Component 8
                                  </Link>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <Link to="/component8" className="">
                                        {" "}
                                        Introduction
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/edaface-newsfeed-platform"
                                        className=""
                                      >
                                        {" "}
                                        Edaface Newsfeed Platform
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/advert-submision" className="">
                                        {" "}
                                        Advert Submission Form
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/school-of-cryptocurrencies"
                                        className=""
                                      >
                                        {" "}
                                        School of Crypocurrencies
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="three-levels-of-soc"
                                        className=""
                                      >
                                        {" "}
                                        Three Levels of SOC
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/miscellaneous-details-about-the-soc"
                                        className=""
                                      >
                                        {" "}
                                        Miscellaneos Details about the SOC
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link
                                    to="/component2"
                                    className="dropdown-item dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                  >
                                    {" "}
                                    Component 9
                                  </Link>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <Link to="/component9" className="">
                                        {" "}
                                        Introduction
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/compartment-of-digital-clinic"
                                        className=""
                                      >
                                        {" "}
                                        Compartments of Digital Clinic
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/significance-of-digital-clinic"
                                        className=""
                                      >
                                        {" "}
                                        Significance of Digital Clinic
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="/miscellaneous-of-digital-clinic"
                                        className=""
                                      >
                                        {" "}
                                        Miscellany
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="has-megasubmenu">
                      <Link
                        to="https://www.edaface.com/tokenomics"
                        class="dropdown-item"
                      >
                        {" "}
                        Whitepaper{" "}
                        <img
                          src={chevronright}
                          className="img-fluid chev"
                          alt="chevron"
                        />{" "}
                      </Link>
                      <div class="megasubmenu dropdown-menu">
                        <div class="row">
                          <div class="col-6">
                            <ul class="list-unstyled">
                              <li>
                                <Link to="/tokenomics" className="link-to-nav">
                                  Tokenamics
                                </Link>
                              </li>
                              <li>
                                <Link to="/utility" className="link-to-nav">
                                  Utility Cases
                                </Link>
                              </li>
                              <li>
                                <Link to="/character" className="link-to-nav">
                                  Token Characteristics
                                </Link>
                              </li>
                              <li>
                                <Link to="/stakability" className="link-to-nav">
                                  Stakability
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <ul class="list-unstyled">
                              <li>
                                <Link to="/ico" className="link-to-nav">
                                  ICO Details
                                </Link>
                              </li>
                              <li>
                                <Link to="/airdrops" className="link-to-nav">
                                  Airdrops/Bonuses
                                </Link>
                              </li>
                              <li>
                                <Link to="/roadmap" className="link-to-nav">
                                  Road Map
                                </Link>
                              </li>
                              <li>
                                <Link to="/disclaimer" className="link-to-nav">
                                  Disclaimer
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="has-megasubmenu">
                      <Link to="" class="dropdown-item">
                        {" "}
                        Team{" "}
                        <img
                          src={chevronright}
                          className="img-fluid chev"
                          alt="chevron"
                        />{" "}
                      </Link>
                      <div class="megasubmenu dropdown-menu">
                        <div class="row">
                          <div class="col-6">
                            <li className="nav-item dropdown">
                              <Link
                                to=""
                                className=" nav-link adjust-colo-nav dropdown-toggle"
                                data-bs-toggle="dropdown"
                              >
                                Departments
                              </Link>
                              <ul className="dropdown-menu">
                                <li>
                                  <Link to="/executive" className="link-to-nav">
                                    Chief Executive Department
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/finance" className="link-to-nav">
                                    Department of Finance
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/logistics" className="link-to-nav">
                                    Department of Logistics
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/marketing" className="link-to-nav">
                                    Department of Marketing
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/labs" className="link-to-nav">
                                    Eda Labs
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </div>

                          <div class="col-6">
                            <ul class="list-unstyled">
                              <li>
                                <Link to="/founders" className="link-to-nav">
                                  Board of Founders
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/board-of-advisors"
                                  className="link-to-nav"
                                >
                                  Board of Advisors
                                </Link>
                              </li>
                              <li>
                                <Link to="" className="link-to-nav">
                                  Partners
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="has-megasubmenu">
                      <Link to="" class="dropdown-item">
                        {" "}
                        FAQ{" "}
                        <img
                          src={chevronright}
                          className="img-fluid chev"
                          alt="chevron"
                        />{" "}
                      </Link>
                      <div class="megasubmenu dropdown-menu">
                        <div class="row">
                          <div class="col-6">
                            <ul class="list-unstyled">
                              <li>
                                <Link to="/eda" className="link-to-nav">
                                  FAQ on EDA
                                </Link>
                              </li>
                              <li>
                                <Link to="/edaface" className="link-to-nav">
                                  FAQ on EdaFace
                                </Link>
                              </li>
                              <li>
                                <Link to="/edatoken" className="link-to-nav">
                                  FAQ on Eda Token
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <Link to="/contact" class="dropdown-item">
                      Contact us
                    </Link>
                  </ul>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    href="https://launchpad.edaface.com/login"
                    className="nav-link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {" "}
                    Log In
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://launchpad.edaface.com/register "
                    className="nav-link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {" "}
                    <button className="btn-eda-reg">Register</button>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Pop up Modal to be accessible from all pages */}
      <div
        className="modal fade"
        id="devModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header token-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Under Development
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              **This component is still under development**
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-edaface-intro"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Pop up modal for Welfare Donations */}
      <div
        className="modal fade"
        id="donationsModal"
        tabIndex={-1}
        aria-labelledby="donationsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header token-header">
              <h5 className="modal-title" id="donationsModalLabel">
                Welfare Donations
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body donations">
              Please, join us in sponsoring orphans and the homeless children in
              Africa by donating to this noble and God-inspired course.{" "}
              <br></br>
              <br></br>You can donate Eda Token, BNB Smartchain (BEP20) or USDT
              Smartchain (BEP20) to: Welfare wallet address:
              0xd08C7af87c2a25cc650610427B6e59Fec58484D8.
              <br></br>
              <br></br>God bless you for helping the poor child to feed and go
              to school.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-edaface-intro"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
