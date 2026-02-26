"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Location() {
    return (
        <section className="py-24 border-t border-white/5" id="location">
            <div className="container px-4 mx-auto">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="font-outfit text-sm font-bold tracking-[0.2em] text-jrm-steel uppercase mb-3">Find Us</h2>
                    <h3 className="font-outfit text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Our Workshop
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10"
                    >
                        {/* Address Block */}
                        <div className="bg-jrm-surface/20 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-jrm-red" />
                                </div>
                                <div>
                                    <h4 className="font-outfit text-2xl font-bold text-white mb-2">Location</h4>
                                    <p className="text-jrm-light/70 text-lg leading-relaxed max-w-sm">
                                        {siteConfig.address}
                                    </p>
                                </div>
                            </div>
                            <Button className="w-full bg-jrm-surface text-white hover:bg-white/10 border border-white/10 h-14 text-base gap-2" asChild>
                                <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                    <Navigation className="w-5 h-5" />
                                    Get directions
                                </a>
                            </Button>
                        </div>

                        {/* Opening Times */}
                        <div className="bg-jrm-surface/20 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-jrm-steel" />
                                </div>
                                <div>
                                    <h4 className="font-outfit text-2xl font-bold text-white mb-2">Opening Hours</h4>
                                </div>
                            </div>
                            <div className="space-y-3">
                                {siteConfig.openingTimes.map((time, index) => (
                                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                                        <span className={`font-medium ${time.day === 'Sunday' ? 'text-jrm-red/80' : 'text-jrm-light/80'}`}>
                                            {time.day}
                                        </span>
                                        <span className={`font-mono text-sm ${time.hours === 'Closed' ? 'text-jrm-red/80' : 'text-white'}`}>
                                            {time.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-full min-h-[500px] w-full bg-jrm-surface/30 rounded-3xl border border-white/10 overflow-hidden relative"
                    >
                        {/* Using a placeholder interactive map iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35500.587843058814!2d-1.5471922437651036!3d52.4118833075276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b7e9b0476bf%3A0xc3191ee51a13e5!2sCoventry!5e0!3m2!1sen!2suk!4v1716301234567!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(80%) contrast(90%) opacity(0.8)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                            title="JRM Autos Map Location"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
