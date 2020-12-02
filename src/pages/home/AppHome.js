import React from 'react';
import AppBanner from '../../wrappers/banner/BannerOne';
import HeroSliderOne from '../../wrappers/HeroSliderOne';
import TabProduct from '../../wrappers/product/TabProduct';

const AppHome = () => {
    return ( 
        <React.Fragment>
            <HeroSliderOne/>
            <AppBanner spaceTopClass="pt-60" spaceBottomClass="pb-65" />
            <TabProduct  spaceBottomClass="pb-60" category="fashion"/>
        </React.Fragment>
     );
}
 
export default AppHome;