"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

// Placeholder reviews
const reviews = [
    {
        name: "Thomas W.",
        text: "Absolute professionals. Diagnosed an engine fault that two other garages missed. Fixed within 48 hours. The standard of work here is unmatched.",
        rating: 5,
    },
    {
        name: "Sarah L.",
        text: "Been taking my Audi here for five years. Consistently transparent pricing, excellent communication, and the car always runs perfectly.",
        rating: 5,
    }
];

export function GoogleProfile() {
    return (
        <section className="py-24 relative overflow-hidden" id="reviews">
            <div className="container px-4 mx-auto">
                <div className="bg-gradient-to-br from-jrm-surface/30 to-jrm-dark border border-white/5 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">

                    {/* Abstract geometric background elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jrm-gold/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-jrm-steel/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-6 h-6 text-jrm-gold fill-jrm-gold" />
                                    ))}
                                </div>
                                <span className="text-white font-bold text-xl ml-2">5.0</span>
                            </div>

                            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                                Don&apos;t just take our word for it.
                            </h2>
                            <p className="text-jrm-light/70 text-lg font-light leading-relaxed mb-10 max-w-md">
                                We let our workmanship speak for itself. Read our verified customer reviews, transparent feedback, and see before/after photos on our official Google Business Profile.
                            </p>

                            <Button size="lg" className="h-14 px-8 bg-white text-jrm-dark hover:bg-jrm-light text-base font-bold gap-2 shadow-lg" asChild>
                                <a href={siteConfig.googleProfileUrl} target="_blank" rel="noopener noreferrer">
                                    View our Google profile
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </Button>
                            <p className="mt-4 text-sm text-jrm-light/50 flex items-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                See reviews, photos and directions on Google.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col gap-6"
                        >
                            {reviews.map((review, i) => (
                                <div key={i} className="bg-jrm-dark/60 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="font-outfit font-bold text-white">{review.name}</span>
                                        <div className="flex gap-0.5">
                                            {[...Array(review.rating)].map((_, idx) => (
                                                <Star key={idx} className="w-4 h-4 text-jrm-gold fill-jrm-gold" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-jrm-light/80 italic font-light">&quot;{review.text}&quot;</p>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
