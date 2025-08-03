import { Fragment, useState } from 'react';
import Landing from '../../components/home/Landing';
import SecondSection from '../../components/home/SecondSection';
import Whyus from '../../components/home/Whyus';
import WhyDifferent from '../../components/home/WhyDifferent';
import BrandSolutions from '../../components/home/BrandSolutions';
import LatestArticles from '../../components/home/LatestArticles';
import OurServices from '../../components/home/OurServices';


function Home() {
    return (
        <Fragment>
            <Landing />
            <OurServices />
            <SecondSection />
            <Whyus />
            <WhyDifferent />
            <BrandSolutions />
            <LatestArticles />
        </Fragment>
    )
}

export default Home