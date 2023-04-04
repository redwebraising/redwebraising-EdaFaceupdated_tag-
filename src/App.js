import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/pages/landing";
import Vision from "./components/partials/vision";
import Mission from "./components/partials/mission";
import Core from "./components/partials/core";
import Tokenomics from "./components/pages/tokenomics";
import Utility from "./components/pages/utility";
import Character from "./components/pages/character";
import Stakability from "./components/pages/stakability";
import Ico from "./components/pages/ico";
import Airdrops from "./components/pages/airdrops";
import Disclaimer from "./components/pages/disclaimer";
import Introduction from "./components/pages/introduction";
import Edafacecharacteristics from "./components/pages/edafacecharacteristics";
import Structure from "./components/pages/structure";
import Founders from "./components/pages/founders";
import Eda from "./components/pages/eda";
import Edaface from "./components/pages/edaface";
import Edatoken from "./components/pages/edatoken";

import Branding from "./components/pages/branding";
import Executive from "./components/pages/executive";
import Finance from "./components/pages/finance";
import Marketing from "./components/pages/marketing";
import Labs from "./components/pages/labs";
import Logistics from "./components/pages/logistics";
import Tc from "./components/pages/tc";
import Privacy from "./components/pages/privacy";
import Terms from "./components/pages/terms";
import Contact from "./components/pages/contact";
import Roadmap2 from "./components/pages/roadmap2";
import CryptoReflector from "./components/pages/component1";
import CentralizedReflector from "./components/pages/component2";
import AdvertSubmissionForm from "./components/partials/advert_submission_form";
import AdvertisementPlatform from "./components/partials/advertisement_platform";
import ArchitectureOfEdafaceMall from "./components/partials/architecture_of_edaface_mall";
import BlockchainEcosystem from "./components/partials/blockchain_ecosystem";
import CategoryPlatformsOfEdafaceMall from "./components/partials/category_platforms_of_edaface_mall";
import CharacteristicsOfEdafaceNFTMarketplace from "./components/partials/characteristics_of_edaface_nft_marketplaces";
import CompartmentsOfEdafaceDigitalLiterature from "./components/partials/compartments_of_edaface_digital_literature";
import CompartmentsOfEdafaceNFTMarketplace from "./components/partials/compartments_of_edaface_nft_marketplace";
import Component9EdafaceClinic from "./components/partials/component-9-edaface-clinic";
import ContinentalShoppingRegions from "./components/partials/continental_shopping_regions";
import DerivativesExchangePlatform from "./components/partials/derivatives_exchange_platform";
import DexListingPlatform from "./components/partials/dex_listing_platform";
import EdafaceMallSafetyTips from "./components/partials/edaface_mall_safety_tips";
import EdafaceNewsfeedPlatform from "./components/partials/edaface_newsfeed_platform";
import EdafacePlantation from "./components/partials/edaface_plantation";
import EdaLaunchpad from "./components/partials/edalaunchpad";
import ExpiredShopRental from "./components/partials/expired_shop_rental_fee";
import HowBuyersCanMakeAPurchase from "./components/partials/how_buyers_can_make_a_purchase";
import ItemsIsDisplayedInTheRelaventPlaces from "./components/partials/items_is_displayed_in_the_relevent_places";
import ListingPlatform from "./components/partials/listing_platform";
import MiscellaneousDetailsAboutTheSoc from "./components/partials/miscellaneous_details_about_the_soc";
import Miscellaneous from "./components/partials/miscellaneous";
import PurposeOfEdafaceDigitalLiterature from "./components/partials/purpose_of_edaface_digital_literature";
import RugPullDetection from "./components/partials/rug_pull_detection";
import SchoolOfCryptocurrencies from "./components/partials/school_of_crytocurrencies";
import SellerRegistersAnItemForSale from "./components/partials/seller_registers_an_item_for_sale";
import SellerRentsAShop from "./components/partials/seller_rents_a_shop";
import SellerSubmitsTheItemForDisplay from "./components/partials/seller_submits_the_item_for_display";
import SellingOnEdafaceMall from "./components/partials/selling_on_edaface_mall";
import ShopRentalFee from "./components/partials/shop_rental_fee";
import SOCInterpretations from "./components/partials/soc_interpretation";
import SOCScorecard from "./components/partials/soc_scorecard";
import SpotExchangePlatform from "./components/partials/spot_exchange_platform";
import ThreeKindsOfNFT from "./components/partials/three_kinds_of_nft";
import ThreeLevelsOfSoc from "./components/partials/three_levels_of_soc";
import TrendingPlatform from "./components/partials/trending_platform";
import UserRights from "./components/partials/user_rights";
import Directors from "./components/pages/boardofdirectors";
import Welfare from "./components/partials/welfare";
import PeerToPeer from "./components/partials/peer_to_peer";
import DecentralizedExchangeReflector from "./components/pages/component3";
import CryptoVerificationCentre from "./components/pages/component4";
import ComponentsOfProductivity from "./components/partials/components_productivity";
import EdafaceTwoLevelsVerificcation from "./components/partials/edaface_two_levels_verification";
import NFTMarketplace from "./components/pages/component5";
import DigitalLiteratureReflector from "./components/pages/component6";
import EdafaceDigitalMall from "./components/pages/component7";
import EdafaceAcademy from "./components/pages/component8";
import DigitalClinic from "./components/pages/component9";
import CompartmentsOfDigitalClinic from "./components/partials/edaface-compartments-digital-clinic";
import SignificanceOfDigitalClinic from "./components/partials/significance-of-digital-clinic";
import MiscellaneosDigitalClinic from "./components/partials/miscellaneous-digital-clinic";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/vision" component={Vision} />
        <Route exact path="/mission" component={Mission} />
        <Route exact path="/core" component={Core} />
        <Route exact path="/tokenomics" component={Tokenomics} />
        <Route exact path="/utility" component={Utility} />
        <Route exact path="/character" component={Character} />
        <Route exact path="/stakability" component={Stakability} />
        <Route exact path="/ico" component={Ico} />
        <Route exact path="/airdrops" component={Airdrops} />
        <Route exact path="/disclaimer" component={Disclaimer} />
        <Route exact path="/introduction" component={Introduction} />
        <Route
          exact
          path="/edafacecharacteristics"
          component={Edafacecharacteristics}
        />
        <Route exact path="/structure" component={Structure} />

        <Route exact path="/founders" component={Founders} />
        <Route exact path="/eda" component={Eda} />
        <Route exact path="/edaface" component={Edaface} />
        <Route exact path="/edatoken" component={Edatoken} />
        <Route exact path="/roadmap" component={Roadmap2} />
        <Route exact path="/branding" component={Branding} />
        <Route exact path="/executive" component={Executive} />
        <Route exact path="/finance" component={Finance} />
        <Route exact path="/marketing" component={Marketing} />
        <Route exact path="/labs" component={Labs} />
        <Route exact path="/logistics" component={Logistics} />
        <Route exact path="/tc" component={Tc} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/component1" component={CryptoReflector} />
        <Route exact path="/component2" component={CentralizedReflector} />
        <Route
          exact
          path="/component3"
          component={DecentralizedExchangeReflector}
        />
        <Route exact path="/component4" component={CryptoVerificationCentre} />
        <Route exact path="/component5" component={NFTMarketplace} />
        <Route
          exact
          path="/component6"
          component={DigitalLiteratureReflector}
        />
        <Route exact path="/component7" component={EdafaceDigitalMall} />
        <Route exact path="/component8" component={EdafaceAcademy} />
        <Route exact path="/component9" component={DigitalClinic} />
        <Route
          exact
          path="/compartment-of-digital-clinic"
          component={CompartmentsOfDigitalClinic}
        />
        <Route
          exact
          path="/significance-of-digital-clinic"
          component={SignificanceOfDigitalClinic}
        />
        <Route
          exact
          path="/miscellaneous-of-digital-clinic"
          component={MiscellaneosDigitalClinic}
        />
        {/* Routes for How to use edaface components */}
        <Route
          exact
          path="/advert-submision"
          component={AdvertSubmissionForm}
        />
        <Route
          exact
          path="/components-of-productivity"
          component={ComponentsOfProductivity}
        />
        <Route
          exact
          path="/advertisement-platform"
          component={AdvertisementPlatform}
        />
        <Route
          exact
          path="/architecture-of-edaface-mall"
          component={ArchitectureOfEdafaceMall}
        />
        <Route
          exact
          path="/blockchain-ecosystem"
          component={BlockchainEcosystem}
        />
        <Route
          exact
          path="/category-platform-of-edaface-mall"
          component={CategoryPlatformsOfEdafaceMall}
        />
        <Route
          exact
          path="/characteristics-of-edaface-marketplace"
          component={CharacteristicsOfEdafaceNFTMarketplace}
        />
        <Route
          exact
          path="/compartments-of-edaface-digital-literature"
          component={CompartmentsOfEdafaceDigitalLiterature}
        />
        <Route
          exact
          path="/compartments-of-edaface-nft-marketplace"
          component={CompartmentsOfEdafaceNFTMarketplace}
        />
        <Route
          exact
          path="/edaface-clinic"
          component={Component9EdafaceClinic}
        />
        <Route
          exact
          path="/continental-shopping-regions"
          component={ContinentalShoppingRegions}
        />
        <Route
          exact
          path="/derivatives-exchange-platform"
          component={DerivativesExchangePlatform}
        />
        <Route
          exact
          path="/dex-listing-platform"
          component={DexListingPlatform}
        />
        <Route
          exact
          path="/edaface-mall-safety-tips"
          component={EdafaceMallSafetyTips}
        />
        <Route
          exact
          path="/edaface-mall-safety-tips"
          component={EdafaceMallSafetyTips}
        />
        <Route
          exact
          path="/edaface-newsfeed-platform"
          component={EdafaceNewsfeedPlatform}
        />
        <Route exact path="/edaface-plantation" component={EdafacePlantation} />
        <Route
          exact
          path="/edaface-two-levels-verification"
          component={EdafaceTwoLevelsVerificcation}
        />
        <Route
          exact
          path="/edaface-two-levels-verification"
          component={EdafacePlantation}
        />
        <Route exact path="/edalaunchpad" component={EdaLaunchpad} />
        <Route
          exact
          path="/expired-shop-rental"
          component={ExpiredShopRental}
        />
        <Route
          exact
          path="/how-buyers-can-make-a-purchase"
          component={HowBuyersCanMakeAPurchase}
        />
        <Route
          exact
          path="/items-is-displayed-in-the-relavent-places"
          component={ItemsIsDisplayedInTheRelaventPlaces}
        />
        <Route
          exact
          path="/items-is-displayed-in-the-relavent-places"
          component={ItemsIsDisplayedInTheRelaventPlaces}
        />
        <Route exact path="/listing-platform" component={ListingPlatform} />
        <Route
          exact
          path="/miscellaneous-details-about-the-soc"
          component={MiscellaneousDetailsAboutTheSoc}
        />
        <Route exact path="/miscellaneous" component={Miscellaneous} />
        <Route
          exact
          path="/purpose-of-edaface-digital-literature"
          component={PurposeOfEdafaceDigitalLiterature}
        />
        <Route exact path="/rug-pull-detection" component={RugPullDetection} />
        <Route
          exact
          path="/school-of-cryptocurrencies"
          component={SchoolOfCryptocurrencies}
        />
        <Route
          exact
          path="/seller-registers-an-item-for-sale"
          component={SellerRegistersAnItemForSale}
        />
        <Route exact path="/seller-rents-a-shop" component={SellerRentsAShop} />
        <Route
          exact
          path="/seller-submits-the-item"
          component={SellerSubmitsTheItemForDisplay}
        />
        <Route
          exact
          path="/seller-submits-the-item"
          component={SellerSubmitsTheItemForDisplay}
        />
        <Route
          exact
          path="/selling-on-edaface-mall"
          component={SellingOnEdafaceMall}
        />
        <Route exact path="/shop-rental-fee" component={ShopRentalFee} />
        <Route
          exact
          path="/soc-interpretations"
          component={SOCInterpretations}
        />
        <Route exact path="/soc-scorecard" component={SOCScorecard} />
        <Route
          exact
          path="/spot-exchange-platform"
          component={SpotExchangePlatform}
        />
        <Route exact path="/three-kinds-of-nft" component={ThreeKindsOfNFT} />
        <Route exact path="/three-levels-of-soc" component={ThreeLevelsOfSoc} />
        <Route exact path="/trending-platforms" component={TrendingPlatform} />
        <Route exact path="/user-rights" component={UserRights} />
        <Route exact path="/board-of-advisors" component={Directors} />
        <Route exact path="/welfare-donations" component={Welfare} />
        <Route exact path="/peer-to-peer" component={PeerToPeer} />
      </Switch>
    </Router>
  );
}

export default App;
