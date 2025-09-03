import { Fragment, useState } from 'react';
import Landing from '../../components/home/Landing';
import SecondSection from '../../components/home/SecondSection';
import Whyus from '../../components/home/Whyus';
import WhyDifferent from '../../components/home/WhyDifferent';
import BrandSolutions from '../../components/home/BrandSolutions';
import LatestArticles from '../../components/home/LatestArticles';
import OurServices from '../../components/home/OurServices';
import Cta from '../../components/home/Cta';


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
            <Cta />
        </Fragment>
    )
}

export default Home