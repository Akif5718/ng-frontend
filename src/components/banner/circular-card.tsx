// components/banner/CircularCard.tsx
import React from 'react';

const CircularCard: React.FC = () => {
    return (
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[35rem] lg:h-[35rem] rounded-full overflow-hidden animate-spin-slow">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('circular-food.png')" }}
            ></div>
        </div>
    );
};

export default CircularCard;
