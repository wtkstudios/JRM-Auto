import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
    title: "Privacy Policy - JRM Autos",
    description: "Privacy policy for JRM Autos.",
};

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className="flex-1 w-full pt-32 pb-24">
                <div className="container px-4 mx-auto max-w-3xl">
                    <h1 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>

                    <div className="space-y-8 text-jrm-light/80 leading-relaxed font-light">
                        <p>
                            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">1. Introduction</h2>
                            <p>
                                At JRM Autos, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">2. The data we collect about you</h2>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Identity Data</strong> includes first name, last name.</li>
                                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                                <li><strong>Vehicle Data</strong> includes vehicle registration marks provided for service inquiries.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">3. How we use your personal data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking your vehicle for service).</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal obligation.</li>
                            </ul>
                        </section>

                        <p className="pt-8 text-sm text-jrm-light/50 border-t border-white/10">
                            Disclaimer: This is a placeholder privacy policy. Please consult with legal counsel to ensure compliance with GDPR and other applicable data protection regulations.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
