import React from "react";
import Himti from "../assets/himti.png"


const About = () => {
    return (
        <div className="items-center text-center bg-[#4DA9E5] h-screen">
    
            <div className="font-bold text p-32 text-5xl text-white font-poppins">
                <h1>ABOUT US</h1>
            </div>

            <div className="flex text-white mr-10 flex-cols-2 gap-16 justify-center items-center align-center">
                <div>
                    <img src={Himti} alt="" />
                </div>

                <div className="text-2xl font-montserrat text-left">
                    <p>Himpunanan Mahasiswa Teknik Informatika </p>
                    <p>(HIMTI) Universitas Bina Nusantara adalah </p>
                    <p>Organisasi Kemahasiswaan di Universitas Bina </p>
                    <p>Nusantara yang berbentuk Himpunan Mahasiswa</p>
                    <p>Jurusan (HMJ) untuk mahasiswa School of </p>
                    <p>Computer Science (SOCS), BINUS UNIVERSITY.</p>
                </div>
            </div>

        </div>
    )
}

export default About;