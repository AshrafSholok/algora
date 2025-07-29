import { Fragment, useState } from 'react';
import Landing from '../../components/home/Landing';
import SecondSection from '../../components/home/SecondSection';
import Whyus from '../../components/home/Whyus';
import WhyDifferent from '../../components/home/WhyDifferent';
import BrandSolutions from '../../components/home/BrandSolutions';
import LatestArticles from '../../components/home/LatestArticles';


function Home() {
    return (
        <Fragment>
        <div className="">
            <Landing />
            <SecondSection />
            <Whyus />
            <WhyDifferent />
            <BrandSolutions />
            <LatestArticles />
        </div>
        </Fragment>
    )
}

export default Home