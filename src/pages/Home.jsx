import React from 'react';
import Button from '../component/Button';
import Gedung from '../assets/gedung.png';
import Events from './Events';

const Home = () => {
    return (
        <div className='grid items-center h-auto bg-[#DEDEDE]'>
            <div className=''>
                <div className='justify-center'>
                    <div className='text-center mt-16'>
                            <h1 className='font-bold text-6xl'>HIMTI STUDY TOUR</h1>
                        <div className='text-slate-500 font-semibold text-m'>
                            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do </h1>
                            <h1>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</h1>
                            <h1>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </h1>
                            <h1>aliquip ex ea commodo consequat.</h1>
                        </div>
                        <Button />
                    </div>

                    <div className=''> {/* Pastikan tidak ada margin di sini */}
                        <img src={Gedung} alt="Gedung" className='w-full h-auto' />
                        <Events />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;