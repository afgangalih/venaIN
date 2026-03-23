import { Activity, ShieldCheck, Database } from "lucide-react";

const features = [
    {
        id: "01",
        title: "Structured Intake",
        desc: "12 clinical variables ingested into a reproducible patient schema, eliminating ambiguity.",
        icon: Database,
    },
    {
        id: "02",
        title: "Signal Analysis",
        desc: "ECG readings, blood pressure, and cholesterol processed against validated thresholds.",
        icon: Activity,
    },
    {
        id: "03",
        title: "Risk Classification",
        desc: "Binary heart disease prediction with confidence scoring, stratified by severity.",
        icon: ShieldCheck,
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="bg-slate-50 border-y border-slate-200 py-20 md:py-24 antialiased"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.45fr] lg:gap-12">
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#0360D9] mb-3">
                            Clinical Pipeline
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                            From Patient Inputs To Actionable Risk Signals.
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                            Our flow is intentionally structured for
                            reproducibility: normalized intake, deterministic
                            signal interpretation, and final classification
                            aligned with clinical review workflows.
                        </p>

                        <div className="mt-7 h-px w-full max-w-sm bg-slate-200" />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:gap-6">
                        {features.map((feature, i) => (
                            <article
                                key={feature.id}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 transition-colors duration-200 hover:bg-slate-50"
                            >
                                <div className="flex items-start justify-between gap-5">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                                            <feature.icon
                                                size={22}
                                                className="text-[#0360D9]"
                                                strokeWidth={1.7}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                                                Stage {feature.id}
                                            </p>
                                            <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-950">
                                                {feature.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <span className="text-sm font-semibold text-slate-300 group-hover:text-[#0360D9] transition-colors duration-200">
                                        0{i + 1}
                                    </span>
                                </div>

                                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
                                    {feature.desc}
                                </p>

                                <div className="mt-5 h-px w-full bg-slate-200" />
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
