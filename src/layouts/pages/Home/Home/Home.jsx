import React from 'react';
import Banner from './Banner/Banner';
import SummerCampSection from '../../Home/Home/SummerCampSection/SummerCampSection';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ESA | Home</title>
            </Helmet>
            <div className="pt-20">
                <SummerCampSection />
            </div>
            <Banner />

            <div>category</div>
            <div>class</div>
            <div>extra</div>
        </div>
    );
};

export default Home;

