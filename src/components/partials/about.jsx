import React from "react";
import about from "../../images/about.png"; 
import chevron from "../../images/chevron.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
<Helmet>
    <title>sartaj about</title>
</Helmet>

const About =()=> {

    return(
        <div>

<div className="about-bac">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
<img src={about} className="img-fluid about" alt="about"/>
            </div>
            <div className="col-lg-6">
                {/*
            <h6 className="about-intro">WHAT IS A CRYPTO AGGREGATOR?</h6>
    */}
<h3 className="about-header">About EdaFace</h3>
<p className="about-body">EdaFace is the face of the crypto world.</p>  
<p className="about-body">On EdaFace, you can track your favorite cryptos, Cex and Dex, and engage in DeFi. You can check, trade, and mint NFTs, monitor the metaverse world, transact in all forms of digital products such as digital music and books, as well as track crypto news, etc.</p>         
<p className="about-body">You can advertise, launch and crowdfund your crypto project via EdaFace Launchpad.</p>
<p className="about-body">But if you want to scam others, EdaFace has bad news for you! EdaFace does identify crypto scams via its Crypto Verification Centre, especially rug pulls, long before they occur. In other words, EdaFace helps all crypto lovers to avoid scams. This is the first of its kind in the crypto industry.</p>
<Link to="/tokenomics"><button className="btn-edaface">Whitepaper <span><img src={chevron} className="img-fluid" alt="button-icon"/></span></button></Link>
<a href = "https://launchpad.edaface.com/white-paper"  target="_blank" rel="noreferrer noopener"><button className="btn-edaface">Litepaper <span><img src={chevron} className="img-fluid" alt="button-icon"/></span></button></a>
            </div>
        </div>
    </div>
</div>
        </div>
    )


}


export default About ; 

