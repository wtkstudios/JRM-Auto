"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Phone, Star, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden" id="home">
            {/* Background exploded engine image with dark gradient overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/wires.jpg" // Using wires as a stand-in for exploded engine until we verify
                    alt="JRM Autos Coventry"
                    fill
                    className="object-cover opacity-30 mix-blend-luminosity"
                    priority
                />
                {/* Dark overlay gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-jrm-dark via-jrm-dark/80 to-jrm-dark/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-jrm-dark via-jrm-dark/60 to-transparent" />
            </div>

            <div className="container relative z-10 px-4 py-20 mx-auto">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-outfit text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                    >
                        Premium vehicle care in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-jrm-steel">heart of Coventry.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="flex flex-wrap gap-2 mb-6"
                    >
                        <Badge variant="outline" className="bg-jrm-surface/50 text-jrm-light border-white/10 backdrop-blur-sm py-1.5 px-3">
                            <Star className="w-3.5 h-3.5 mr-1.5 text-jrm-gold fill-jrm-gold" />
                            20+ Years in Coventry
                        </Badge>
                        <Badge variant="outline" className="bg-jrm-surface/50 text-jrm-light border-white/10 backdrop-blur-sm py-1.5 px-3">
                            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-jrm-steel" />
                            Quality Workmanship
                        </Badge>
                        <Badge variant="outline" className="bg-jrm-surface/50 text-jrm-light border-white/10 backdrop-blur-sm py-1.5 px-3">
                            <Wrench className="w-3.5 h-3.5 mr-1.5 text-jrm-red" />
                            Diagnostics First
                        </Badge>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-jrm-light/80 mb-10 max-w-2xl font-light leading-relaxed"
                    >
                        Trusted local mechanics for nearly two decades — engine rebuilds, diagnostics, MOTs and more. Engineered precision for your peace of mind.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="h-14 px-8 bg-jrm-gold text-jrm-dark hover:bg-white text-base font-bold gap-2 transition-all shadow-[0_0_20px_rgba(240,162,2,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]" asChild>
                            <Link href="#contact">
                                <Calendar className="w-5 h-5" />
                                Book Consultation
                            </Link>
                        </Button>

                        <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 bg-jrm-surface/30 backdrop-blur-sm text-white hover:bg-white/10 text-base gap-2" asChild>
                            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
                                <Phone className="w-5 h-5" />
                                Call Now
                            </a>
                        </Button>

                        <Button size="lg" variant="ghost" className="h-14 px-6 text-jrm-steel hover:text-white hover:bg-white/5 text-base gap-2" asChild>
                            <a href={siteConfig.googleProfileUrl} target="_blank" rel="noopener noreferrer">
                                View on Google
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Sticky Bottom Mobile Bar (visible only on very small screens) */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-jrm-dark/90 backdrop-blur-lg border-t border-white/10 p-4 pb-safe flex gap-3">
                <Button className="flex-1 bg-jrm-surface text-white hover:bg-white/10 h-12" asChild>
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                    </a>
                </Button>
                <Button className="flex-1 bg-jrm-gold text-jrm-dark hover:bg-white h-12 font-bold" asChild>
                    <Link href="#contact">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book
                    </Link>
                </Button>
            </div>
        </section>
    );
}
