import CustomHeader from "../components/customHeader";
import React from "react";
import Link from "next/link";
import DefaultPage from "../components/DefaultPage";

const cardData = [
    {
        title: "Heat Treatment",
        description:
            "A process of heating and cooling metals to alter their physical and mechanical properties without changing their shape.",
        buttonText: "Learn More",
        imageUrl: "/tempering.webp",
        link: "/heat-treatment",
    },
    {
        title: "Cnc",
        description:
            "A computer-controlled manufacturing method used to produce highly precise and complex parts from metal or plastic.",
        buttonText: "Learn More",
        imageUrl: "/cnc-machining.webp",
        link: "/cnc",
    },
];

const certificates = [
    {
        id: 1,
        title: "ISO Certificate",
        description: "Enhancing material properties for optimal performance",
        image: "/image/cer2.webp",
    },
];

const CardsPage = () => {
    return (
        <div className="min-h-screen bg-[#EFEDEA] p-6 w-screen overflow-hidden">
            <CustomHeader />
            <h1 className="text-lg text-customBlack mt-28 text-center font-normal sm:text-2xl md:text-5xl mb-2 sm:mb-4">
                Our Services
            </h1>

            {/* ✅ WRAPPER TO CENTER THE GRID */}
            <div className="flex justify-center">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-fit">
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
                                <h2 className="text-3xl text-black font-ftregolaneue mb-2">
                                    {card.title}
                                </h2>
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
            </div>

            {/* Certificates Section */}
            <section id="certificate" className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-ftregolaneue leading-normal tracking-normal mb-12 text-center text-customBlack">
                        Our Certificates
                    </h2>

                    <div className="flex flex-wrap justify-center gap-56">
                        {certificates.map((certificate) => (
                            <div
                                key={certificate.id}
                                className="flex flex-col items-center text-center"
                            >
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full max-w-xs h-auto rounded-lg shadow-md object-contain"
                                />
                                <h3 className="text-xl font-semibold mt-4 text-customBlack">
                                    {certificate.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <DefaultPage />
        </div>
    );
};

export default CardsPage;
