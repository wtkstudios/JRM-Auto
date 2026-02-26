"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal("")),
    vehicleReg: z.string().optional(),
    serviceNeeded: z.string().min(1, { message: "Please select a service." }),
    message: z.string().optional(),
    // Honeypot for spam
    middleName: z.string().max(0, { message: "Must be empty" }).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            vehicleReg: "",
            serviceNeeded: "",
            message: "",
            middleName: "",
        }
    });

    const onSubmit = async (data: FormValues) => {
        // Spam bot check
        if (data.middleName) return;

        setIsSubmitting(true);

        try {
            // Simulate API call
            // TODO: Replace with actual endpoint (e.g., Next.js Route Handler + Resend)
            // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Form submitted:", data);
            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error("Submission failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 relative" id="contact">
            <div className="container px-4 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-outfit text-sm font-bold tracking-[0.2em] text-jrm-red uppercase mb-3">Get in Touch</h2>
                    <h3 className="font-outfit text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Book a Consultation
                    </h3>
                    <p className="mt-4 text-jrm-light/70 text-lg font-light max-w-2xl mx-auto">
                        Fill out the form below and our team will get back to you within 24 hours to confirm your booking or discuss your vehicle&apos;s needs.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-jrm-surface/20 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm"
                >
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="w-20 h-20 bg-jrm-gold/10 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-10 h-10 text-jrm-gold" />
                            </div>
                            <h4 className="font-outfit text-3xl font-bold text-white mb-4">Request Received</h4>
                            <p className="text-jrm-light/70 text-lg max-w-md mb-8">
                                Thank you for choosing JRM Autos. One of our specialists will be in touch shortly to confirm your consultation.
                            </p>
                            <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-white/10 hover:bg-white/5">
                                Send another request
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Honeypot field (hidden) */}
                            <div className="hidden" aria-hidden="true">
                                <input type="text" {...register("middleName")} tabIndex={-1} autoComplete="off" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName" className="text-jrm-light/80">Full Name *</Label>
                                    <Input
                                        id="fullName"
                                        {...register("fullName")}
                                        className="bg-jrm-dark/50 border-white/10 h-14 focus-visible:ring-jrm-gold rounded-xl px-4"
                                        placeholder="John Doe"
                                    />
                                    {errors.fullName && <span className="text-jrm-red text-xs mt-1 block">{errors.fullName.message}</span>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-jrm-light/80">Phone Number *</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        {...register("phone")}
                                        className="bg-jrm-dark/50 border-white/10 h-14 focus-visible:ring-jrm-gold rounded-xl px-4"
                                        placeholder="07xxx xxxxxx"
                                    />
                                    {errors.phone && <span className="text-jrm-red text-xs mt-1 block">{errors.phone.message}</span>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-jrm-light/80">Email Address (Optional)</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        {...register("email")}
                                        className="bg-jrm-dark/50 border-white/10 h-14 focus-visible:ring-jrm-gold rounded-xl px-4"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <span className="text-jrm-red text-xs mt-1 block">{errors.email.message}</span>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="vehicleReg" className="text-jrm-light/80">Vehicle Registration (Optional)</Label>
                                    <Input
                                        id="vehicleReg"
                                        {...register("vehicleReg")}
                                        className="bg-jrm-dark/50 border-white/10 h-14 focus-visible:ring-jrm-gold rounded-xl uppercase font-mono px-4"
                                        placeholder="AB12 CDE"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="serviceNeeded" className="text-jrm-light/80">Service Needed *</Label>
                                <select
                                    id="serviceNeeded"
                                    {...register("serviceNeeded")}
                                    className="flex h-14 w-full items-center justify-between rounded-xl border border-white/10 bg-jrm-dark/50 px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-jrm-gold disabled:cursor-not-allowed disabled:opacity-50 appearance-none text-white"
                                >
                                    <option value="" disabled className="text-gray-500">Select a service...</option>
                                    <option value="Engine Rebuild">Engine Rebuild</option>
                                    <option value="Diagnostics">Diagnostics</option>
                                    <option value="Clutch Replacement">Clutch Replacement</option>
                                    <option value="Suspension">Suspension</option>
                                    <option value="Brake Repairs">Brake Repairs</option>
                                    <option value="MOT">MOT Preparation / Arranging</option>
                                    <option value="General Servicing">General Servicing</option>
                                    <option value="Other">Other / Unsure</option>
                                </select>
                                {errors.serviceNeeded && <span className="text-jrm-red text-xs mt-1 block">{errors.serviceNeeded.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-jrm-light/80">Message / Fault Description (Optional)</Label>
                                <Textarea
                                    id="message"
                                    {...register("message")}
                                    className="bg-jrm-dark/50 border-white/10 min-h-[120px] focus-visible:ring-jrm-gold rounded-xl p-4 resize-y"
                                    placeholder="Tell us what you're experiencing..."
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-14 bg-jrm-gold text-jrm-dark hover:bg-white text-base font-bold rounded-xl mt-4"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animation-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Request Booking
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>
                            <p className="text-xs text-center text-jrm-light/50 mt-4 leading-relaxed">
                                By submitting this form, you agree to our <a href="/privacy" className="underline hover:text-white transition-colors">Privacy Policy</a>. We never share your data.
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
