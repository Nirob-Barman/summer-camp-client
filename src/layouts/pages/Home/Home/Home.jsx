import React from 'react';
import Banner from './Banner/Banner';
// import SummerCampSection from '../../Home/Home/SummerCampSection/SummerCampSection';
import { Helmet } from 'react-helmet';
import ContactAndSupport from './ContactAndSupport/ContactAndSupport';
import EventCalendar from './EventCalendar/EventCalendar';
import NewsAndUpdates from './NewsAndUpdates/NewsAndUpdates';
import SocialMediaIntegration from './SocialMediaIntegration/SocialMediaIntegration';
import CoachingStaffAndFacilities from './CoachingStaffAndFacilities/CoachingStaffAndFacilities';
import Testimonials from './Testimonials/Testimonials';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructors from './PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ESA | Home</title>
            </Helmet>


            {/* <div className="py-2">
                <SummerCampSection />
            </div> */}



            <Banner />

            <PopularClasses />

            <PopularInstructors />


            <hr />


            <EventCalendar />

            <hr />

            <Testimonials />

            <hr />
            <NewsAndUpdates />

            <hr />

            <CoachingStaffAndFacilities />

            <hr />

            <SocialMediaIntegration />

            <hr />

            <ContactAndSupport />


        </div>
    );
};

export default Home;

