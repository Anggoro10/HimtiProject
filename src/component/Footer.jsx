import React from 'react';
import Logo from '../assets/logo.png'; // Logo Binus
import Himti from '../assets/himti.png'; // Logo HIMTI
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'; // Ikon sosial media

const Footer = () => {
    return (
        <footer className="bg-[#2749AD] text-white text-center p-24">
            <div className="flex flex-col justify-between md:flex-row items-center gap-10">
                {/* Kontainer untuk logo HIMTI */}
                <div className="flex items-center gap-16">
                    <img src={Logo} alt="Logo Binus" className="w-[300px]" />
                    <img src={Himti} alt="Logo HIMTI" className="w-36 md:w-44 lg:w-48" />
                </div>

                {/* Kontainer untuk ikon sosial media */}
                <div className='m-auto '>
                    <div className="grid justify-center gap-6">
                        <div className='flex gap-5'>
                            <a href="https://instagram.com/himti_binus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-2xl"><FaInstagram size={35}/></a>
                            <p className='text-xl'>@himti_binus</p>
                        </div>
                        
                        <div className='flex gap-5'>
                            <a
                            href="https://youtube.com/himti_binus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 text-2xl">
                            <FaYoutube size={35}/>
                            </a>
                            <p className='text-xl'>HIMTI BINUS</p>
                        </div>

                        <div className='flex gap-5'>
                            <a
                                href="https://tiktok.com/@himti_binus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 text-2xl">
                            <FaTiktok size={35}/>
                            </a>
                            <p className='text-xl'>@himtibinus</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Teks Copyright */}
            <div className="mt-16">
                <p className="text-xl">
                    © Copyright 2024 HIMTI BINUS University. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
