import { Link } from "@inertiajs/react";

export default function CtaSection() {
    return (
        <section className="py-24 px-6 lg:px-12 w-full max-w-[85rem] mx-auto">
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-10 sm:p-16 lg:p-20 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                
                {/* Left Side - Typography with clear hierarchy */}
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]">
                        Ready to assess your <br className="hidden md:block" />
                        heart health?
                    </h2>
                    <p className="mt-5 text-lg md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        Start your clinical-grade analysis using our Random Forest intelligence in seconds.
                    </p>
                </div>
                
                {/* Right Side - Modern Accessible CTA */}
                <div className="flex-shrink-0 w-full sm:max-w-xs lg:w-auto lg:max-w-none">
                    <Link
                        href="/analyze"
                        className="group flex w-full lg:w-auto items-center justify-center gap-3 rounded-lg bg-[#0360D9] px-10 py-5 text-lg font-medium text-white shadow-sm ring-1 ring-inset ring-black/10 transition-all duration-200 hover:bg-[#024eb0] hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0360D9] focus:ring-offset-2 active:scale-95 active:translate-y-0"
                    >
                        <span>Start Analysis Now</span>
                        <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>

            </div>
        </section>
    );
}
