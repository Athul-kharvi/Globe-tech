"use client";

import { motion } from "framer-motion";
import DefaultPage from "../components/DefaultPage";
import FeatureHeader from "../components/FeatureHeader";

const cards = [
    {
        title: "350T Hydraulic Press",
        imgSrc: "/cold-forging/350t.jpg",
    },
    {
        title: "400T Hydraulic Press",
        imgSrc: "/cold-forging/400t.jpg",
    },
    {
        title: "650T Hydraulic Press",
        imgSrc: "/cold-forging/650t.jpg",
    },
    {
        title: "400T Mechanical Press",
        imgSrc: "/cold-forging/400t-mechanical.jpg",
    },
];



export default function ColdForgingPage() {
    const machineryList = [
        {
            title: "Cnc Turning Machine - 6nos (Ace Super Jobber XL)",
            description:
                "CNC TURNING MACHINE ACE-JOBBER XL : Ø10 mm to 250 mm & length 400 mm - 4 No’s \n\nCNC TURNING MACHINE MAZZAK : Ø25 mm to 500 mm & length 1600 mm – 1No.",
        },
        {
            title: "VERTICAL  MACHINING CENTRE(VMC) - BFW-BMV-45 AXIS.",
            description:
                "VERTICAL  MACHINING CENTRE(VMC) AMS-MCV-300 x-300 * Y-450* Z-300 MM WITH DOUBLE PALLET – 1No.\n \n CYLINDRICAL GRINDING MACHINE - ACE-ECO200E -  ONLY OD GRINDING Ø 75 * 200 long – 2 No’s.\n\n",
        },
        {
            title: "CNC Turning Machine - 6nos (Ace Super Jobber XL)",
            description:
                "PLASTIC INJECTION MOULDING MACHINE -SHINEWELL-THIVAN – 1No. (FROM 25 GRAMS TO UPTO 90 GRAM CAPACITY WITH ALL ENGINEERING PLASTICS MATERIAL ).\n",
        },
    ];

    const text = "Machinery";

    return (
        <div className="w-full h-full bg-[#898b8b] text-white font-inter overflow-x-hidden overflow-hidden">
            <FeatureHeader />

            {/* Hero Section */}
            <section className="text-center mt-40 px-6 h-full">
                <div className="w-full flex justify-start md:justify-center text-center">
                    <h1 className="text-6xl sm:ml-0 ml-10 text-center sm:text-7xl md:text-8xl lg:text-9xl font-semibold whitespace-nowrap tracking-tight max-w-[100%] pl-0 mt-12 text-slate-800">
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </h1>
                </div>

            </section>



                 <h2 className="text-5xl font-ftregolaneue tracking-tight leading-normal text-center mt-4">
                        Machinery Details
                    </h2>
            <div className="flex justify-center items-start gap-10 mt-14 px-4 mb-10">
                {/* Grid Section */}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:max-w-[50rem] md:flex-row">
                    {machineryList.map((machine, idx) => (
                        <div
                            key={idx}
                            className="relative overflow-hidden rounded-3xl border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
                        >
                            <div className="flex h-[400px] flex-col justify-between rounded-2xl p-6">
                                <div className="space-y-2">
                                    <h3 className="font-ftregolaneue font-medium text-xl text-left text-black">
                                        {machine.title}
                                    </h3>
                                    <div className="w-16 h-1 bg-black my-2 rounded-full"></div>
                                    <p className="text-xs whitespace-pre-line tracking-normal leading-normal text-black text-left">
                                        {machine.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Section (Right Side) */}
                <div className="hidden md:flex sm:flex flex-col items-center gap-6 bg-gray-50 py-5 px-8 rounded-xl ">
                    <img
                        src="/cnc-machine.jpg"
                        alt="Pit Type Small"
                        className="w-64 h-auto object-contain rounded-2xl"
                    />
                </div>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <DefaultPage />
            </motion.div>
        </div>
    );
}
