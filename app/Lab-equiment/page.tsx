import CustomHeader from "../components/customHeader";
import React from "react";
import DefaultPage from "../components/DefaultPage";


const LabEquiment = () => {
    const equipmentList = [
        { name: "Micro Hardness Tester", make: "Matsuzawa, Japan" },
        { name: "Microscope", make: "Metji, Japan" },
        { name: "Sample Cutting Machine", make: "Chennai Metco" },
        { name: "Specimen Mounting Machine", make: "Metji" },
        { name: "Polishing Machine", make: "Chennai Metco" },
    ];

    return (
        <div className="min-h-screen bg-[#EFEDEA] p-6">
            <CustomHeader />
            <h1 className="text-lg text-customBlack mt-28 text-center font-normal sm:text-2xl md:text-5xl mb-2 sm:mb-4">
                Laboratory Equipment's
            </h1>

            <p className="text-center max-w-3xl mx-auto text-gray-700 text-md sm:text-lg mb-10">
                Our in-house metallurgical laboratory is equipped with advanced instruments to ensure precise quality control and
                material verification. With industry-grade testing tools and reliable measurement standards, we are committed to
                delivering excellence in every component we manufacture.
            </p>

            <div className="flex flex-col mx-20 md:flex-row items-center justify-center gap-10 px-4">
                {/* Equipment Details */}
                <div className="md:w-1/2 w-full">
                    <ul className="space-y-4 text-lg text-gray-800">
                        {equipmentList.map((item, index) => (
                            <li key={index} className="border-l-4 border-orange-500 pl-4">
                                <span className="font-semibold uppercase">{item.name}</span>
                                <br />
                                <span className="text-sm text-gray-600">Make: {item.make}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Lab Image */}
                <div className="md:w-1/2 w-full flex justify-center">
                    <img
                        src="/image/lab1.jpg" // <-- Replace with your actual image path
                        alt="Laboratory Equipment"
                        className="rounded-lg shadow-md max-w-full h-auto object-cover"
                    />
                </div>
            </div>
            {/* Contact Form and Information */}
            <DefaultPage />
        </div>
    );
};

export default LabEquiment;
