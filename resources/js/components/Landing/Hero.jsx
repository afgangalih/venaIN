import { Link } from "@inertiajs/react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="bg-white min-h-[calc(100vh-4rem)] flex items-center border-b border-slate-100 antialiased"
        >
            <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center py-20 md:py-24">
                <h1 className="text-5xl md:text-7xl font-bold text-slate-950 tracking-tighter leading-[1.05] max-w-4xl mx-auto mb-6">
                    Clinical analysis for cardiovascular risk.
                </h1>

                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
                    A deterministic inference engine utilizing 12 validated
                    diagnostic parameters. Built for clinical teams requiring
                    precision, reproducibility, and speed.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/dashboard"
                        className="bg-[#0360D9] text-white font-medium px-8 py-3 rounded-lg shadow-sm hover:bg-[#0247A8] transition-colors duration-150"
                    >
                        Start Assessment
                    </Link>
                    <Link
                        href="/dashboard"
                        className="bg-transparent border border-slate-200 text-slate-950 font-medium px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors duration-150"
                    >
                        View Research
                    </Link>
                </div>
            </div>
        </section>
    );
}
