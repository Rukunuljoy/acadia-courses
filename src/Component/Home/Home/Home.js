import React from 'react';
import CardDetails from '../../../Pages/Items/CardDetails/CardDetails';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import CompanyRate from '../CompanyRate/CompanyRate';
import CourseOffer from '../CourseOffer/CourseOffer';
import EducationHub from '../EducationHub/EducationHub';
import Event from '../Events/Event';
import Feedback from '../FeedBack/Feedback';
import JoinUs from '../JoinUs/JoinUs';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import Viewer from '../Viewer/Viewer';
import WorkingStrategy from '../WorkingStrategy/WorkingStrategy';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <EducationHub></EducationHub>
            <WorkingStrategy></WorkingStrategy>
            <Projects></Projects>
            <CourseOffer></CourseOffer>
            <CompanyRate></CompanyRate>
            <Viewer></Viewer>
            <Skill></Skill>
            <JoinUs></JoinUs>
            <Event></Event>
            <Feedback></Feedback>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;