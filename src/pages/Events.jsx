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
                <div className=''>
                    <div className='grid gap-20 place-items-center'>
                        <img src={Santai} alt="" className='w-[70%]'/>
                    </div>

                    <div className='grid justify-start mt-6 text-[#3974D3] text-xl text-right'>
                    <h1 className='text-3xl text-[#4C64AB] font-bold'>International Study Tour</h1>
                    <div className="w-full h-12  font-extrabold text-2xl">_____________</div>
                        
                        <div className='mb-10'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed </p>
                                <p>do eiusmod tempor incididunt ut labore et dolore magna </p>
                                <p>aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                                <p>ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
         
                        </div>

                </div>
                
            </div>
        </div>
    );
}

export default Events;