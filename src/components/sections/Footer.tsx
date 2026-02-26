import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-jrm-dark border-t border-white/5 pt-16 pb-8 md:pb-16 mt-auto">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16">

                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/images/logo yellow hype.png"
                                alt="JRM Auto Coventry"
                                width={160}
                                height={64}
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-jrm-light/60 text-sm leading-relaxed max-w-md mb-6">
                            {siteConfig.tagline} Providing expert diagnostic, repair, and rebuilding services to the Coventry area for over 20 years.
                        </p>
                        <div className="flex items-center gap-4">
                            {/* Optional social icons could go here */}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-outfit font-bold text-white mb-6 tracking-wide">Contact</h4>
                        <ul className="space-y-4 text-sm text-jrm-light/60">
                            <li>
                                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-jrm-gold transition-colors block">
                                    {siteConfig.phone}
                                </a>
                            </li>
                            <li className="leading-relaxed">
                                {siteConfig.address}
                            </li>
                            <li>
                                <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-jrm-steel hover:text-white transition-colors">
                                    Get Directions →
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-outfit font-bold text-white mb-6 tracking-wide">Legal & Links</h4>
                        <ul className="space-y-4 text-sm text-jrm-light/60">
                            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-jrm-light/40">
                    <p>© {currentYear} {siteConfig.businessName}. All rights reserved.</p>
                    <p>
                        Designed & Engineered by <a href="#" className="hover:text-white transition-colors border-b border-white/10 pb-0.5">WTK Studio</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
