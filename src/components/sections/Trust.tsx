"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
    {
        title: "Two Decades of Excellence",
        description: "Serving Coventry with unparalleled mechanical expertise since 2005.",
    },
    {
        title: "Diagnostics First Approach",
        description: "We pinpoint the exact issue before replacing parts, saving you time and money.",
    },
    {
        title: "Premium Engineering Standards",
        description: "We treat every vehicle with the precision of a high-performance build.",
    },
    {
        title: "Transparent Communication",
        description: "Clear explanations, honest pricing, and no surprise bills. Ever.",
    },
];

export function Trust() {
    return (
        <section className="py-24 bg-jrm-dark/50 border-y border-white/5" id="why-us">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="font-outfit text-sm font-bold tracking-[0.2em] text-jrm-gold uppercase mb-3">Why JRM Autos</h2>
                        <h3 className="font-outfit text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                            The standard for <span className="text-jrm-red">uncompromising</span> quality.
                        </h3>
                        <p className="text-jrm-light/70 text-lg font-light leading-relaxed mb-8 max-w-lg">
                            We don&apos;t just fix cars; we engineer solutions. Our workshop is equipped with the latest diagnostic technology and staffed by mechanics who treat auto repair as an exact science.
                        </p>

                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-jrm-surface/40 to-transparent border border-white/5">
                            <div className="w-16 h-16 rounded-full bg-jrm-red/10 flex items-center justify-center border border-jrm-red/20 shrink-0">
                                <span className="font-outfit text-2xl font-bold text-jrm-red">20<span className="text-lg">+</span></span>
                            </div>
                            <div>
                                <p className="font-outfit font-bold text-white text-lg">Years Experience</p>
                                <p className="text-sm text-jrm-light/60">Trusted by thousands across Coventry</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex gap-4 p-6 rounded-2xl bg-jrm-surface/20 border border-white/5 hover:border-white/10 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-jrm-steel shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-outfit font-bold text-white text-xl mb-2">{reason.title}</h4>
                                    <p className="text-jrm-light/70 font-light leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
