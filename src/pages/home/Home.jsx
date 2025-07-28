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
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
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