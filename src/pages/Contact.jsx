import React from "react";
import Button from "../component/Button"; // Jika kamu punya komponen Button

const Contact = () => {
    return (
        <div className="bg-[#3A75D4] min-h-screen">
            <div className="h-screen flex justify-center items-center">
                <div className="p-6 sm:p-10 md:p-12 rounded-lg w-full max-w-3xl">
                    <div className="text-center mb-16">
                        <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl">
                            CONTACT US
                        </h1>
                    </div>

                    <div className="space-y-6">
                        {/* Form Input with gap */}
                        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 mb-8"> 
                            <input
                                className="shadow-lg border border-gray-300 rounded-lg p-4 text-lg"
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                className="shadow-lg border border-gray-300 rounded-lg p-4 text-lg"
                                type="email"
                                placeholder="Email"
                            />
                            <textarea
                                className="shadow-lg border border-gray-300 rounded-lg p-4 text-lg h-64 resize-none"
                                placeholder="Message..."
                            ></textarea>
                        </div>

                        {/* Button Kirim with margin-top */}
                        <div className="flex justify-center mt-8">
                            <button className="shadow-lg w-full sm:w-[200px] md:w-[250px] text-center border border-gray-300 rounded-lg p-4 bg-white text-lg font-semibold">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
