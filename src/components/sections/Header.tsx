import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Phone, Calendar } from "lucide-react";
import Image from "next/image";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-jrm-dark/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Brand - Centered on Mobile, Left on Desktop */}
                <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 h-full flex items-center z-50">
                    <Link href="/" className="h-full py-1 flex items-center relative">
                        <Image
                            src="/images/logo yellow hype.png"
                            alt="JRM Auto Coventry"
                            width={240}
                            height={96}
                            className="h-full w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 z-50 relative">
                    <Link href="#services" className="text-sm font-medium text-jrm-light/80 hover:text-white transition-colors">Services</Link>
                    <Link href="#why-us" className="text-sm font-medium text-jrm-light/80 hover:text-white transition-colors">Why Us</Link>
                    <Link href="#location" className="text-sm font-medium text-jrm-light/80 hover:text-white transition-colors">Location</Link>
                    <div className="flex items-center gap-4 ml-4">
                        <Button variant="outline" className="border-jrm-surface text-white hover:bg-jrm-surface hover:text-white gap-2" asChild>
                            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
                                <Phone className="w-4 h-4" />
                                Call Now
                            </a>
                        </Button>
                        <Button className="bg-jrm-gold text-jrm-dark hover:bg-jrm-gold/90 font-semibold gap-2" asChild>
                            <Link href="#contact">
                                <Calendar className="w-4 h-4" />
                                Book Consultation
                            </Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Nav - Hamburger on the Left */}
                <div className="md:hidden z-50 relative">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-jrm-surface">
                                <Menu className="w-6 h-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-jrm-dark border-r-jrm-surface/50 w-[300px] p-0 flex flex-col">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="p-6 border-b border-white/5 flex items-center justify-center">
                                <Image
                                    src="/images/logo yellow hype.png"
                                    alt="JRM Auto Coventry"
                                    width={160}
                                    height={64}
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                            <div className="flex flex-col p-4 gap-2 flex-grow">
                                <Link href="#services" className="px-4 py-3 rounded-lg text-lg text-white hover:bg-white/5 active:bg-white/10 transition-colors">Services</Link>
                                <Link href="#why-us" className="px-4 py-3 rounded-lg text-lg text-white hover:bg-white/5 active:bg-white/10 transition-colors">Why Us</Link>
                                <Link href="#location" className="px-4 py-3 rounded-lg text-lg text-white hover:bg-white/5 active:bg-white/10 transition-colors">Location</Link>
                                <Link href="#reviews" className="px-4 py-3 rounded-lg text-lg text-white hover:bg-white/5 active:bg-white/10 transition-colors">Reviews</Link>
                            </div>
                            <div className="p-6 border-t border-white/5 flex flex-col gap-3 pb-8">
                                <Button variant="outline" className="w-full border-jrm-surface h-12 text-base gap-2" asChild>
                                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
                                        <Phone className="w-4 h-4" />
                                        Call {siteConfig.phone}
                                    </a>
                                </Button>
                                <Button className="w-full bg-jrm-gold text-jrm-dark hover:bg-white h-12 text-base font-bold gap-2" asChild>
                                    <Link href="#contact">
                                        <Calendar className="w-4 h-4" />
                                        Book Now
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Spacer to balance the flex-between when hamburger is left and logo is absolute center */}
                <div className="w-10 md:hidden pointer-events-none" aria-hidden="true" />
            </div>
        </header>
    );
}
