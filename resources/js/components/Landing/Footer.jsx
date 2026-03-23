export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 py-16 antialiased">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
                    <div>
                        <div className="text-2xl font-bold tracking-tight">
                            <span className="text-slate-950">Vena</span>
                            <span className="text-[#0360D9]">.ai</span>
                        </div>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
                            Clinical intelligence platform for consistent
                            cardiovascular risk interpretation across modern
                            care teams.
                        </p>
                        <p className="mt-6 text-sm font-medium text-slate-500">
                            © 2026 Vena Intelligence. All rights reserved.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                                Platform
                            </p>
                            <div className="mt-4 space-y-2 text-sm">
                                <a
                                    href="#"
                                    className="block text-slate-700 hover:text-slate-950 transition-colors duration-150"
                                >
                                    Technology
                                </a>
                                <a
                                    href="#"
                                    className="block text-slate-700 hover:text-slate-950 transition-colors duration-150"
                                >
                                    Methodology
                                </a>
                                <a
                                    href="#"
                                    className="block text-slate-700 hover:text-slate-950 transition-colors duration-150"
                                >
                                    Dashboard
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                                Company
                            </p>
                            <div className="mt-4 space-y-2 text-sm">
                                <a
                                    href="#"
                                    className="block text-slate-700 hover:text-slate-950 transition-colors duration-150"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="block text-slate-700 hover:text-slate-950 transition-colors duration-150"
                                >
                                    Compliance
                                </a>
                                <a
                                    href="#"
                                    className="block text-slate-700 hover:text-slate-950 transition-colors duration-150"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                                Legal
                            </p>
                            <div className="mt-4 space-y-2 text-sm">
                                <a
                                    href="#"
                                    className="block text-slate-700 hover:text-slate-950 transition-colors duration-150"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="#"
                                    className="block text-slate-700 hover:text-slate-950 transition-colors duration-150"
                                >
                                    Terms of Use
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-6">
                    <p className="max-w-4xl text-[11px] font-semibold uppercase tracking-[0.12em] leading-relaxed text-slate-400">
                        Medical disclaimer: Vena.ai is a clinical
                        decision-support tool and does not replace professional
                        medical judgment. All predictions must be validated by a
                        licensed healthcare provider before intervention.
                    </p>
                </div>
            </div>
        </footer>
    );
}
