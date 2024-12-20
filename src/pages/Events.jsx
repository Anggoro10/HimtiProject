import React from 'react';
import Jalan from '../assets/jalan.jpg'
import Santai from '../assets/santai.png'

const Events = () => {
    return (
        <div className='bg-[#B3EEF5] h-screen w-screen'>
            <div className='grid grid-cols-2 bg-[#B3EEF5]'>
                {/* kolom kiri */}
                <div className='p-16 grid justify-start'>
                    <div className='font-bold text-6xl'>
                        <h1 className='text-[#4C64AB]'>EVENTS</h1>
                    </div>

                    <div className='justify-start mt-16'>
                        <div className='flex gap-2 text-4xl'>
                            <h1 className='font-semibold text-[#2749AD]'>Domestic</h1>
                            <h1 className='font-semibold text-[#2749AD]'>Study</h1>
                            <h1 className='font-semibold text-[#2749AD]'>Tour</h1>
                        </div>

                        <div className='w-[225px] border-b-4 border-[#4DA9E5] mt-2'></div>

                        <div className='mt-4 text-[#3974D3] text-xl'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed </p>
                            <p>do eiusmod tempor incididunt ut labore et dolore magna </p>
                            <p>aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                            <p>ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>

                        <div className='relative top-12 mt-10 p-10'>
                            <img src={Jalan} alt="" className='w-[70%]'/>
                        </div>
                    </div>
                </div>

                {/* kolom kanan */}
                <div className='grid justify-end'>
                    <div className='place-items-center'>
                        <img src={Santai} alt="" className='w-[60%]'/>
                    </div>

                    <div className='grid justify-end mb-10'>
                        <div className='flex gap-2 font-bold text-4xl justify-center relative'>
                            <h1 className='font-semibold text-[#2749AD]'>International Study Tour</h1>
                        </div>

                        <div className='flex justify-around relative bottom-[80px]'>
                            <div className='border-b-4 border-[#4DA9E5] relative left-[85px] w-[222px] mt-4'></div>
                        </div>

                        <div className='items-center text-center mr-[120px] relative bottom-[65px] text-[#3A75D4] text-xl'>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default Events;