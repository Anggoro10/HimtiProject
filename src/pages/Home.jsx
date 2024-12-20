import React from 'react';
import Button from '../component/Button';
import Gedung from '../assets/gedung.jpg';
import Events from './Events';
import About from './About';
import Contact from './Contact';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <div className='w-full bg-[#DEDEDE]'>
            {/* Header Section */}
            <div className='text-center px-4 md:px-10 lg:px-20 py-10'>
                <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>HIMTI STUDY TOUR</h1>
                <div className='text-slate-500 font-semibold text-sm sm:text-base md:text-lg mt-4'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
                    <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                    <p>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                    <p>aliquip ex ea commodo consequat.</p>
                </div>
                <div className='mt-6'>
                    <Button />
                </div>
            </div>

            {/* Image and Events Section */}
            <div className='relative'>
                {/* Full-Width Background Image */}
                <img
                    src={Gedung}
                    alt="Gedung"
                    className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen object-cover'
                />
                {/* Overlay Content */}
                <div className='relative top-16 bg-white md:mt-5 lg:-mt-20'>
                    <Events />
                </div>

                <div className='mt-16 sm:mt-20 md:mt-24'>
                    <About />
                </div>

                <div className=''>
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default Home;
