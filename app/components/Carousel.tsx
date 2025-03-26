import React from "react";

const images = [
    "./carousel/img2.webp",
    "./carousel/img1.webp",
    "./carousel/img3.webp",
    "./carousel/img4.webp",
    "./carousel/img6.webp",
    "./carousel/img5.webp",
    "./carousel/img7.webp",
    "./carousel/img8.webp",
    "./carousel/img9.webp",
    "./carousel/img10.webp",
    "./carousel/img12.webp",
    "./carousel/img17.webp",
    "./carousel/img14.webp",
    "./carousel/img15.webp",
    "./carousel/img16.webp",
];

const Carousel: React.FC = () => {
    return (
        <div className="overflow-hidden relative w-full bg-customBlack py-4 h-[600px]"> 
            <h1 className="text-center text-4xl md:text-7xl font-extrabold text-customYellow my-8 relative  mt-24">
                <span className="relative inline-block text-customYellow-400">
                    Trusted by Leading Brands
                    <span className="absolute inset-0 blur-md opacity-75 animate-pulse text-customYellow-400">
                        Trusted by Leading Brands
                    </span>
                </span>
            </h1>

            <div className="flex w-max animate-marquee flex-nowrap gap-x-10 mt-28">
                {[...images, ...images].map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Image ${i + 1}`}
                        className="h-40 w-40 object-contain mx-7"
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
