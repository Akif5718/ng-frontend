import React from 'react';
import CircularCard from "@/components/banner/circular-card";

const Banner: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center h-[44rem] w-full text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('background.jpg')" }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

            {/* Content Wrapper */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full h-[42rem] px-8 md:px-16 z-20">
                {/* Left Side - Content */}
                <div className="flex-1 w-full md:w-1/2 flex items-center justify-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Enjoy Our Delicious Meal</h1>
                        <p className="text-lg md:text-xl mb-8 max-w-lg">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                        </p>
                        <button className="px-6 py-3 bg-[#FEA116] hover:bg-opacity-80 text-lg font-semibold rounded-sm transition">
                            BOOK A TABLE
                        </button>
                    </div>
                </div>

                {/* Right Side - Rotating Circular Div */}
                <div className="flex-1 w-full md:w-1/2 flex items-center justify-center">
                    <CircularCard />
                </div>
            </div>
        </div>
    );
};

export default Banner;
