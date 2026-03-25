import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Landing/Navbar";
import Hero from "@/Components/Landing/Hero";
import Features from "@/Components/Landing/Features";
import TrustSection from "@/Components/Landing/TrustSection";
import CtaSection from "@/Components/Landing/CtaSection";
import Footer from "@/Components/Landing/Footer";

export default function Landing() {
    return (
        <div
            className="min-h-screen bg-white"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
            <Head title="Vena.ai — Clinical Heart Intelligence" />
            <Navbar />
            <main>
                <Hero />
                <TrustSection />
                <Features />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
}
