"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Settings2, ShieldAlert, Navigation, Compass, ActivitySquare } from "lucide-react";

const services = [
    {
        title: "Engine Rebuilds",
        description: "Complete tear-down, inspection, and precision reconstruction to factory or enhanced specifications.",
        icon: Settings2,
    },
    {
        title: "Diagnostics",
        description: "State-of-the-art computer fault finding covering modern complex electrical and engine systems.",
        icon: ActivitySquare,
    },
    {
        title: "Clutch Replacements",
        description: "High-performance and OEM standard clutch fitting for smooth, reliable power delivery.",
        icon: Compass,
    },
    {
        title: "Suspension",
        description: "Component upgrades and replacements for ultimate vehicle handling and ride comfort.",
        icon: Navigation,
    },
    {
        title: "Brake Repairs",
        description: "Pad, disc, and hydraulic system servicing ensuring maximum stopping power and safety.",
        icon: ShieldAlert,
    },
    {
        title: "MOTs",
        description: "Comprehensive annual inspections and necessary repairs to keep you legally compliant and safe.",
        icon: Wrench,
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
                    {services.map((service, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="group h-full bg-jrm-surface/20 border-white/5 hover:border-jrm-gold/30 hover:bg-jrm-surface/40 transition-all duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-jrm-surface/50 border border-white/10 flex items-center justify-center mb-4 group-hover:border-jrm-gold/50 group-hover:scale-110 transition-all duration-300">
                                        <service.icon className="w-6 h-6 text-jrm-steel group-hover:text-jrm-gold transition-colors" />
                                    </div>
                                    <CardTitle className="font-outfit text-xl text-white group-hover:text-jrm-gold transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-jrm-light/70 font-light leading-relaxed line-clamp-2">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
