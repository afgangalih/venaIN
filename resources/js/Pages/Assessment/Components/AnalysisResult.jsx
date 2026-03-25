import { Download, AlertTriangle, CheckCircle2, HeartPulse, RefreshCcw, ArrowLeft, Activity } from "lucide-react";
import AssessmentHeader from "./AssessmentHeader";
import { Head, Link } from "@inertiajs/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { 
    RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer, Tooltip as RechartsTooltip, 
    ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid 
} from "recharts";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const analyzeVitals = (inputs) => {
    let drivers = [];
    let positives = [];

    if (inputs.trestbps > 130) drivers.push({ label: "Elevated BP", val: `${inputs.trestbps} mmHg`, desc: `Above optimal 120/80 range.` });
    else if (inputs.trestbps) positives.push({ label: "Optimal BP", val: `${inputs.trestbps} mmHg`, desc: `Resting pressure is clinically healthy.` });

    if (inputs.chol > 240) drivers.push({ label: "High Cholesterol", val: `${inputs.chol} mg`, desc: `Elevated arterial plaque risk.` });
    else if (inputs.chol) positives.push({ label: "Healthy Lipids", val: `${inputs.chol} mg`, desc: `Cholesterol within safe limits.` });

    if (inputs.thalach < 120) drivers.push({ label: "Low Max HR", val: `${inputs.thalach} bpm`, desc: `Diminished exertion capacity.` });
    else if (inputs.thalach) positives.push({ label: "Strong Exertion", val: `${inputs.thalach} bpm`, desc: `Good cardiovascular performance.` });

    if (inputs.oldpeak > 1.5) drivers.push({ label: "ST Depression", val: inputs.oldpeak, desc: `Electrocardiographic stress indicated.` });
    else if (inputs.oldpeak !== '' && inputs.oldpeak <= 1.5) positives.push({ label: "Normal ST Seg.", val: inputs.oldpeak, desc: `No significant exercise depression.` });

    return { drivers, positives };
};

const CustomRadialTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_10px_20px_-3px_rgb(0_0_0_/_0.08)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Global Risk Index</p>
                <p className="text-3xl font-bold tracking-tight text-[#0360D9] leading-none mb-2">{payload[0].value}%</p>
                <div className="w-full h-[1px] bg-slate-100 mb-2"></div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0360D9]/70">Reference: 0-100%</p>
            </div>
        );
    }
    return null;
};

const BenchmarkTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const unit = payload[0].payload.unit;
        return (
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_10px_20px_-3px_rgb(0_0_0_/_0.08)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <p className="text-sm font-bold text-slate-950 mb-4">{label}</p>
                <div className="space-y-3">
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#0360D9]"></span>
                            <span className="text-xs font-bold text-slate-500">Your Profile</span>
                        </div>
                        <span className="text-sm font-bold text-slate-900">{payload[0].value} {unit}</span>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                            <span className="text-xs font-bold text-slate-500">Clinical Avg</span>
                        </div>
                        <span className="text-sm font-bold text-slate-900">{payload[1]?.value || payload[0].payload.avg} {unit}</span>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default function AnalysisResult({ result }) {
    const { drivers, positives } = analyzeVitals(result.inputs);
    const isCritical = result.riskScore >= 60;
    
    const benchmarkData = [
        { name: "Resting BP", user: Number(result.inputs.trestbps) || 0, avg: 131, unit: "mmHg" },
        { name: "Cholesterol", user: Number(result.inputs.chol) || 0, avg: 246, unit: "mg/dL" },
        { name: "Max HR", user: Number(result.inputs.thalach) || 0, avg: 149, unit: "bpm" }
    ];

    const radialData = [{ name: 'Score', value: result.riskScore, fill: isCritical ? '#E11D48' : '#0360D9' }];

    return (
        <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Head title="Clinical Insight Report — Vena.ai" />
            <AssessmentHeader />
            
            <main className="mx-auto max-w-[85rem] px-6 py-12 lg:px-8 mt-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex items-center gap-4 mb-10">
                    <Link href="/analyze" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-950">Clinical Insight Report</h1>
                        <p className="text-sm text-slate-500 font-medium">Analysis complete. Interactive data mapping below.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
                    <div className="lg:col-span-3 space-y-8">
                        <div className="bg-white border border-slate-100 rounded-[2rem] p-10 lg:p-14 shadow-[0_2px_10px_-3px_rgb(0_0_0_/_0.02)] flex flex-col items-center justify-center text-center relative overflow-hidden">
                            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 z-10">Calculated Risk Index</h2>
                            
                            <div className="h-[280px] w-full relative z-10 flex justify-center mt-[-20px]">
                                <ResponsiveContainer width="100%" height={320}>
                                    <RadialBarChart 
                                        cx="50%" cy="85%" 
                                        innerRadius="75%" outerRadius="100%" 
                                        barSize={24} 
                                        data={radialData} 
                                        startAngle={180} endAngle={0}
                                    >
                                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                                        <RadialBar 
                                            background={{ fill: '#f1f5f9' }} 
                                            dataKey="value" 
                                            cornerRadius={12}
                                            isAnimationActive={true}
                                            animationBegin={0}
                                            animationDuration={1500}
                                            animationEasing="ease-out"
                                        />
                                        <RechartsTooltip content={<CustomRadialTooltip />} cursor={{ fill: 'transparent' }} />
                                    </RadialBarChart>
                                </ResponsiveContainer>
                                
                                <div className="absolute bottom-8 flex flex-col items-center pointer-events-none">
                                    <span className="text-7xl md:text-[6rem] font-bold tracking-[-.04em] text-slate-950 leading-none">{result.riskScore}%</span>
                                </div>
                            </div>

                            <div className="mt-2 z-10">
                                <span className={cn("inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold tracking-wide", 
                                    isCritical ? "bg-red-50 text-red-600 border border-red-100" : "bg-blue-50 text-[#0360D9] border border-blue-100"
                                )}>
                                    <Activity className="h-4 w-4" />
                                    {result.status} Classification
                                </span>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-[2rem] p-10 lg:p-12 shadow-[0_2px_10px_-3px_rgb(0_0_0_/_0.02)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                                <HeartPulse className="h-48 w-48" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-slate-950 mb-6 flex items-center gap-3 relative z-10">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0360D9]/10 text-[#0360D9]">
                                    <HeartPulse className="h-5 w-5" />
                                </span>
                                Next Steps
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-10 max-w-2xl relative z-10 text-[15px]">
                                This intelligence architecture provides proactive health insights based on clinical datasets, but is <strong className="font-semibold text-slate-900">not a final medical diagnosis</strong>. We mandate sharing these interactive findings with a certified physician for an exhaustive clinical review.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                                <button type="button" className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-slate-950 px-8 text-sm font-bold tracking-wide text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
                                    <Download className="h-4 w-4" /> Download PDF Report
                                </button>
                                <Link href="/analyze" className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 text-sm font-bold tracking-wide text-slate-700 transition-all hover:bg-slate-50 active:scale-95">
                                    <RefreshCcw className="h-4 w-4" /> Reset Assessment
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white border border-slate-100 rounded-[2rem] p-8 lg:p-10 shadow-[0_2px_10px_-3px_rgb(0_0_0_/_0.02)]">
                            <h3 className="text-lg font-bold tracking-tight text-slate-950 mb-8 flex items-center justify-between">
                                Contextual Benchmarking
                            </h3>
                            <div className="h-[260px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <ComposedChart data={benchmarkData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }} barGap={6}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }} dy={12} />
                                        <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                        <RechartsTooltip content={<BenchmarkTooltip />} cursor={{ fill: 'rgba(241, 245, 249, 0.4)' }} />
                                        <Bar dataKey="user" name="Your Profile" radius={[6, 6, 0, 0]} maxBarSize={32} fill="#0360D9" animationDuration={1500} />
                                        <Bar dataKey="avg" name="Clinical Average" radius={[6, 6, 0, 0]} maxBarSize={32} fill="#E2E8F0" animationDuration={1500} />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-[2rem] p-8 lg:p-10 shadow-[0_2px_10px_-3px_rgb(0_0_0_/_0.02)]">
                            <h3 className="text-lg font-bold tracking-tight text-slate-950 mb-8">Clinical Insights</h3>
                            
                            {drivers.length > 0 && (
                                <div className="mb-8">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2">
                                        <AlertTriangle className="h-3 w-3 text-red-500" /> Key Risk Drivers
                                    </h4>
                                    <div className="space-y-4">
                                        {drivers.map((d, i) => (
                                            <div key={`d-${i}`} className="flex gap-4 p-5 rounded-2xl border border-red-50 bg-red-50/40 transition-colors hover:bg-red-50/60">
                                                <div className="mt-0.5"><AlertTriangle className="h-4 w-4 text-red-500" /></div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-1.5">
                                                        <span className="text-sm font-bold text-slate-900">{d.label}</span>
                                                        <span className="text-[11px] font-bold tracking-wider text-red-600 bg-red-100 px-2.5 py-1 rounded-lg">{d.val}</span>
                                                    </div>
                                                    <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{d.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {positives.length > 0 && (
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2">
                                        <CheckCircle2 className="h-3 w-3 text-emerald-500" /> Positive Markers
                                    </h4>
                                    <div className="space-y-4">
                                        {positives.map((p, i) => (
                                            <div key={`p-${i}`} className="flex gap-4 p-5 rounded-2xl border border-emerald-50 bg-emerald-50/30 transition-colors hover:bg-emerald-50/50">
                                                <div className="mt-0.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /></div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-1.5">
                                                        <span className="text-sm font-bold text-slate-900">{p.label}</span>
                                                        <span className="text-[11px] font-bold tracking-wider text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-lg">{p.val}</span>
                                                    </div>
                                                    <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
