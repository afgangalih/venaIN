const trustSignals = [
    {
        metric: "12",
        label: "Validated Inputs",
        detail: "Structured variables mapped into a deterministic schema before inference.",
    },
    {
        metric: "< 2s",
        label: "Average Response",
        detail: "Fast screening-ready output designed for clinical workflow continuity.",
    },
    {
        metric: "Audit-Ready",
        label: "Traceable Logic",
        detail: "Every score can be reviewed through transparent input-to-output reasoning.",
    },
];

const parameters = [
    { id: "01", name: "Age", type: "Numeric", unit: "Years" },
    { id: "02", name: "Sex", type: "Binary", unit: "M/F" },
    {
        id: "03",
        name: "Chest Pain Type",
        type: "Categorical",
        unit: "4 Classes",
    },
    {
        id: "04",
        name: "Resting Blood Pressure",
        type: "Numeric",
        unit: "mm Hg",
    },
    { id: "05", name: "Serum Cholesterol", type: "Numeric", unit: "mg/dl" },
    {
        id: "06",
        name: "Fasting Blood Sugar",
        type: "Binary",
        unit: ">120 mg/dl",
    },
    { id: "07", name: "Resting ECG", type: "Categorical", unit: "3 Classes" },
    { id: "08", name: "Max Heart Rate", type: "Numeric", unit: "bpm" },
    {
        id: "09",
        name: "Exercise Induced Angina",
        type: "Binary",
        unit: "Yes/No",
    },
    { id: "10", name: "ST Depression", type: "Numeric", unit: "Oldpeak" },
    { id: "11", name: "ST Slope", type: "Categorical", unit: "3 Classes" },
    { id: "12", name: "Major Vessels", type: "Numeric", unit: "0-4" },
];

export default function TrustSection() {
    return (
        <section
            id="trust"
            className="bg-white py-20 md:py-24 border-t border-slate-100 antialiased"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#0360D9] mb-3">
                                Trust Layer
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                                Transparent Clinical Inputs, Structured For
                                Decision Support.
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed mt-4">
                                Vena.ai evaluates each patient through a fixed
                                and validated input framework so teams can move
                                from raw values to explainable risk output with
                                confidence.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0360D9]" />
                        <div className="h-px flex-1 bg-slate-200" />
                        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-500">
                            Clinical input matrix
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {trustSignals.map((signal) => (
                            <div
                                key={signal.label}
                                className="rounded-2xl border border-slate-200 bg-white p-5"
                            >
                                <p className="text-2xl font-bold text-slate-950 tracking-tight">
                                    {signal.metric}
                                </p>
                                <p className="text-sm font-semibold text-[#0360D9] mt-1">
                                    {signal.label}
                                </p>
                                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                                    {signal.detail}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                        <div className="hidden sm:grid sm:grid-cols-[3rem_1.8fr_1fr_1fr] border-b border-slate-200 bg-slate-100 px-6 py-4 text-[11px] font-bold tracking-[0.16em] uppercase text-slate-500">
                            <span>ID</span>
                            <span>Parameter</span>
                            <span>Type</span>
                            <span>Unit</span>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {parameters.map((param) => (
                                <div
                                    key={param.id}
                                    className="grid grid-cols-1 gap-2 px-6 py-4 sm:grid-cols-[3rem_1.8fr_1fr_1fr] sm:items-center sm:gap-4 hover:bg-slate-50 transition-colors duration-150"
                                >
                                    <span className="text-[11px] font-mono tracking-widest text-slate-400">
                                        {param.id}
                                    </span>
                                    <span className="text-sm font-semibold text-slate-900">
                                        {param.name}
                                    </span>
                                    <span className="text-sm text-slate-600">
                                        {param.type}
                                    </span>
                                    <span className="text-sm text-slate-600">
                                        {param.unit}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
