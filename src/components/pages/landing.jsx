import React from "react";
import Intro from "../partials/intro";
import How from "../partials/how";
import Edafacecomponents from "../partials/edafacecomponents";
import Footer2 from "../partials/footer2";
import About from "../partials/about";
import Nav from "../partials/nav";
import EdafaceVideo from "../partials/edavideo";
import { Helmet } from "react-helmet";

const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>EdaFace - Aggregator Crypto, Metamask Token, Smart Contract Coins, Bitcoin Trustless & Permissionless </title>
        <meta name="description" content="EdaFace is the face of the crypto world. We are a user interface aggregator that brings all the various functionalities of the crypto industry onto a single platform!" />
      </Helmet>
      <Nav></Nav>
      <Intro></Intro>
      <EdafaceVideo></EdafaceVideo>
      <How></How>
      <About></About>
      <Edafacecomponents></Edafacecomponents>

      <Footer2></Footer2>
    </div>
  );
};

export default Landing;
