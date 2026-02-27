"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Settings2, ActivitySquare, Disc, Activity, Octagon, ChevronDown } from "lucide-react";
import Image from "next/image";

const services = [
    {
        title: "Engine Rebuilds",
        description: "Complete tear-down, inspection, and precision reconstruction to factory or enhanced specifications.",
        details: "Every rebuild begins with a full strip-down and meticulous inspection of the block, crankshaft, and cylinder heads. We measure bearing clearances, check for cracks, and hone cylinders before fitting new piston rings, gaskets, and timing components. Valve seats are re-cut, camshafts checked for wear, and everything is torqued to manufacturer spec — delivering an engine that runs like new.",
        icon: Settings2,
        image: "/images/engine.jpg",
    },
    {
        title: "Diagnostics",
        description: "State-of-the-art computer fault finding covering modern complex electrical and engine systems.",
        details: "Using manufacturer-level OBD-II scanners and oscilloscope diagnostics, we read and interpret fault codes across the ECU, ABS, airbag, and transmission modules. Live data analysis lets us trace intermittent faults in sensors, injectors, lambda probes, and CAN-bus wiring — pinpointing the root cause rather than just clearing codes.",
        icon: ActivitySquare,
        image: "/images/diagnosis.jpg",
    },
    {
        title: "Clutch Replacements",
        description: "High-performance and OEM standard clutch fitting for smooth, reliable power delivery.",
        details: "We replace the full clutch assembly — friction plate, pressure plate, and release bearing — along with inspecting the flywheel for heat spots and scoring. Dual-mass flywheels are checked for excessive play, slave and master cylinders tested for hydraulic integrity, and the system is bled to ensure a clean, precise pedal feel every time.",
        icon: Disc,
        image: "/images/clutch .jpg",
    },
    {
        title: "Suspension",
        description: "Component upgrades and replacements for ultimate vehicle handling and ride comfort.",
        details: "From worn shock absorbers and coil springs to anti-roll bar bushes, drop links, and ball joints — we diagnose and replace every component affecting your ride. Track rod ends and wheel bearings are inspected for play, and a full four-wheel alignment is carried out post-repair to ensure even tyre wear and precise steering response.",
        icon: Activity,
        image: "/images/suspention.png",
    },
    {
        title: "Brake Repairs",
        description: "Pad, disc, and hydraulic system servicing ensuring maximum stopping power and safety.",
        details: "We measure disc thickness and run-out, inspect caliper pistons and slide pins for seizure, and replace pads and rotors as needed. Brake fluid is tested for moisture content and the full hydraulic circuit — master cylinder, flexi-hoses, and ABS pump — is checked for leaks. Every job includes a bedding-in procedure for confident, fade-free braking.",
        icon: Octagon,
        image: "/images/brakes.jpg",
    },
    {
        title: "MOTs",
        description: "Comprehensive annual inspections and necessary repairs to keep you legally compliant and safe.",
        details: "Our DVSA-approved testers carry out the full inspection covering emissions, braking efficiency, suspension integrity, lighting, steering, and structural corrosion. We check everything from headlamp aim and tyre tread depth to seatbelt condition and exhaust leaks — and if advisories or failures arise, we can carry out the repairs on-site to get you back on the road quickly.",
        icon: Wrench,
        image: "/images/mot.jpg",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Services() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggle = useCallback((index: number) => {
        const isClosing = expandedIndex === index;
        setExpandedIndex(isClosing ? null : index);

        if (!isClosing) {
            // Scroll the card into view after the expand animation starts
            setTimeout(() => {
                cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 450);
        }
    }, [expandedIndex]);

    return (
        <section className="py-24 relative overflow-hidden" id="services">
            {/* Decorative subtle wrench/spanner watermark */}
            <div
                className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-[url('/images/spanner.jpg')] bg-contain bg-no-repeat bg-center opacity-5 mix-blend-screen pointer-events-none rotate-45 transform"
                aria-hidden="true"
            />

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="font-outfit text-sm font-bold tracking-[0.2em] text-jrm-red uppercase mb-3">Our Expertise</h2>
                        <h3 className="font-outfit text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Engineered for <span className="text-jrm-steel">excellence.</span>
                        </h3>
                        <p className="mt-4 text-jrm-light/70 text-lg font-light">
                            Comprehensive mechanical solutions delivered with absolute precision.
                        </p>
                    </div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {services.map((service, index) => {
                        const isExpanded = expandedIndex === index;

                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className={isExpanded ? "md:col-span-2 lg:col-span-2" : ""}
                                ref={(el: HTMLDivElement | null) => { cardRefs.current[index] = el; }}
                                style={{ scrollMarginTop: "6rem" }}
                            >
                                <div
                                    onClick={() => toggle(index)}
                                    className={`
                                        group cursor-pointer rounded-lg overflow-hidden
                                        bg-jrm-surface/20 border transition-all duration-300
                                        ${isExpanded
                                            ? "border-jrm-gold/40 bg-jrm-surface/40"
                                            : "border-white/5 hover:border-jrm-gold/30 hover:bg-jrm-surface/40"
                                        }
                                    `}
                                >
                                    {/* Card header */}
                                    <div className="p-0">
                                        {/* Thumbnail image at top — hidden when expanded */}
                                        {!isExpanded && (
                                            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-jrm-dark/80 via-jrm-dark/20 to-transparent" />
                                            </div>
                                        )}

                                        {/* Title row */}
                                        <div className="flex items-center gap-3 p-5 pb-3">
                                            <div className="w-9 h-9 rounded-md bg-jrm-surface/50 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-jrm-gold/50 transition-colors">
                                                <service.icon className="w-4 h-4 text-jrm-steel group-hover:text-jrm-gold transition-colors" />
                                            </div>
                                            <h4 className="font-outfit text-lg md:text-xl text-white group-hover:text-jrm-gold transition-colors font-semibold flex-1">
                                                {service.title}
                                            </h4>
                                            <motion.div
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex-shrink-0"
                                            >
                                                <ChevronDown className="w-5 h-5 text-jrm-light/40 group-hover:text-jrm-gold transition-colors" />
                                            </motion.div>
                                        </div>

                                        {/* Short description — only visible when collapsed */}
                                        {!isExpanded && (
                                            <p className="px-5 pb-5 text-jrm-light/70 font-light leading-relaxed text-sm line-clamp-2">
                                                {service.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Expanded Content */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 space-y-4">
                                                    {/* Full-width image */}
                                                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden border border-white/10">
                                                        <Image
                                                            src={service.image}
                                                            alt={service.title}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 100vw, 80vw"
                                                            priority
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-jrm-dark/60 via-transparent to-transparent" />
                                                    </div>

                                                    {/* All copy below the image */}
                                                    <p className="text-jrm-light/70 font-light leading-relaxed text-sm">
                                                        {service.description}
                                                    </p>
                                                    <p className="text-jrm-light/80 font-light leading-relaxed text-sm md:text-base max-w-3xl">
                                                        {service.details}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
