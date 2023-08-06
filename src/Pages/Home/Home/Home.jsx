import React from 'react';
import Banner from '../Banner/Banner';
import EventCalendar from '../EventCalendar/EventCalendar';
import Testimonials from '../Testimonials/Testimonials';
import NewsAndUpdates from '../NewsAndUpdates/NewsAndUpdates';
import CoachingStaffAndFacilities from '../CoachingStaffAndFacilities/CoachingStaffAndFacilities';
import SocialMediaIntegration from '../SocialMediaIntegration/SocialMediaIntegration';
import ContactAndSupport from '../ContactAndSupport/ContactAndSupport';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Banner />

            <Slider />
            <PopularClasses />
            <PopularInstructors />


            <EventCalendar />
            <Testimonials />
            <NewsAndUpdates />
            <CoachingStaffAndFacilities />
            <SocialMediaIntegration />
            <ContactAndSupport />
        </div>
    );
};

export default Home;