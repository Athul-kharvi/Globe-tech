import CustomHeader from "../components/customHeader";
import React from "react";
import Link from "next/link";
import DefaultPage from "../components/DefaultPage";



const cardData = [
    {
        title: "Cold Forging",
        description: "A metal forming technique where materials are shaped at room temperature, increasing strength through strain hardening.",
        buttonText: "Learn More",
        imageUrl: "/mini-hero.webp",
        link: "/cold-forging",
    },
    {
        title: "Cnc",
        description: "A computer-controlled manufacturing method used to produce highly precise and complex parts from metal or plastic.",
        buttonText: "Learn More",
        imageUrl: "/cnc-machining.webp",
        link: "/cnc"
    },
];

const CardsPage = () => {
    return (
        <div className="min-h-screen bg-[#EFEDEA] p-6">
            <CustomHeader />
            {/* <h1 className="text-3xl font-bold text-center  mb-1 0"></h1> */}
             <h1 className="text-lg text-customBlack  mt-28 text-center font-normal sm:text-2xl md:text-5xl  mb-2 sm:mb-4">
                Gee Pee Services
            </h1>
            <div className="grid gap-6 mt-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
                    >
                        {card.imageUrl && (
                            <img
                                src={card.imageUrl}
                                alt={card.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-6">
                            <h2 className="text-3xl font-ftregolaneue text-black mb-2">{card.title}</h2>
                            <p className="text-gray-600 mb-4">{card.description}</p>
                            <Link
                                href={card.link}
                                className="mt-4 inline-block px-6 py-3 bg-orange-500 text-black font-bold rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                            >
                                {card.buttonText}
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
             {/* Contact Form and Information */}
            <DefaultPage />
        </div>
    );
};

export default CardsPage;
