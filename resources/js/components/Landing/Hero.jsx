import { Link } from "@inertiajs/react";
import { Heart, Activity, Shield } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative bg-white min-h-[calc(100vh-4rem)] flex items-center border-b border-slate-100 antialiased overflow-hidden"
        >
            <div className="absolute inset-0 opacity-[0.02]">
                <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="medical-grid"
                            x="0"
                            y="0"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="20" cy="20" r="1" fill="#0360D9" />
                            <line
                                x1="0"
                                y1="20"
                                x2="40"
                                y2="20"
                                stroke="#0360D9"
                                strokeWidth="0.5"
                            />
                            <line
                                x1="20"
                                y1="0"
                                x2="20"
                                y2="40"
                                stroke="#0360D9"
                                strokeWidth="0.5"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#medical-grid)"
                    />
                </svg>
            </div>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-10 w-px h-32 bg-linear-to-b from-[#0360D9]/20 to-transparent rotate-12" />
                <div className="absolute bottom-20 right-10 w-px h-24 bg-linear-to-t from-[#0360D9]/20 to-transparent -rotate-12" />
                <div className="absolute top-1/2 left-1/4 w-px h-16 bg-linear-to-b from-slate-300/30 to-transparent rotate-45" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 w-full py-20 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-950 tracking-tighter leading-[1.05] mb-6">
                            Clinical analysis for
                            <span className="block text-[#0360D9]">
                                cardiovascular risk.
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
                            A deterministic inference engine utilizing 12
                            validated diagnostic parameters. Built for clinical
                            teams requiring precision, reproducibility, and
                            speed.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="/dashboard"
                                className="bg-[#0360D9] text-white font-medium px-8 py-3 rounded-lg shadow-sm hover:bg-[#0247A8] transition-all duration-200 hover:shadow-md"
                            >
                                Start Assessment
                            </Link>
                            <Link
                                href="/dashboard"
                                className="bg-transparent border border-slate-200 text-slate-950 font-medium px-8 py-3 rounded-lg hover:bg-slate-50 transition-all duration-200"
                            >
                                View Research
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:flex justify-center">
                        <div className="relative">
                            <div className="w-80 h-80 bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <span className="text-sm font-semibold text-slate-700">
                                            ECG Signal
                                        </span>
                                    </div>
                                    <Activity
                                        size={20}
                                        className="text-[#0360D9]"
                                    />
                                </div>

                                <div className="h-32 flex items-end justify-center gap-1 mb-6">
                                    {[...Array(20)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-1 bg-[#0360D9] rounded-full"
                                            style={{
                                                height: `${Math.sin(i * 0.5) * 20 + 40}px`,
                                                opacity:
                                                    Math.random() > 0.3
                                                        ? 1
                                                        : 0.3,
                                            }}
                                        />
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 rounded-lg p-3">
                                        <p className="text-xs text-slate-500 uppercase tracking-wide">
                                            Heart Rate
                                        </p>
                                        <p className="text-lg font-bold text-slate-900">
                                            72 BPM
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-3">
                                        <p className="text-xs text-slate-500 uppercase tracking-wide">
                                            Risk Level
                                        </p>
                                        <p className="text-lg font-bold text-green-600">
                                            Low
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#0360D9] rounded-full opacity-20" />
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 border border-slate-300 rounded-full opacity-30" />
                            <div className="absolute top-1/2 -left-4 w-px h-12 bg-linear-to-b from-[#0360D9]/30 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
