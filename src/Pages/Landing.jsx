import React from "react";
import CryptoTradingBanner from "./CryptoTradingBanner";
import TrendingPage from "./TrendingPage";
import FeaturedPage from "./FeaturedPage";
import SlideBuy from "./SlideBuy";
import AboutCard from "./AboutCard";
import SaleItems from "./SaleItems";
import RecentlyAdded from "./RecentlyAdded";
import Blog from "./Blog";
import Faq from "./Faq";
import PopularLinks from "./PopularLinks";
import SubMailPage from "./SubMailPage";

const Landing = () => {
  return (
    <div>
      <CryptoTradingBanner />
      <TrendingPage />
      <FeaturedPage />
      {/* <SlideBuy/> */}
      <AboutCard/>
      <SaleItems/>
      <RecentlyAdded/>
      <Blog/>
      <Faq/>
      <PopularLinks/>
      <SubMailPage/>
    </div>
  );
};

export default Landing;
