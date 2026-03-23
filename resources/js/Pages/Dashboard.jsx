import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { cn } from "@/lib/utils";
import { Card, StatCard } from '@/Components/Card';
import {
    Heart,
    Zap,
    Droplets,
    Search,
    ChevronRight,
    ArrowUpRight,
    TrendingUp,
    Calendar,
    Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
    return (
        <DashboardLayout title="Medical Dashboard">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200/60">
                <div className="space-y-1">
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2 leading-none">Diagnostic Center</p>
                    <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-none">Patient Population <span className="text-primary/10">|</span> 2026</h1>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="hidden sm:flex border-slate-200 hover:bg-white hover:border-slate-300 gap-2 h-10 px-4 rounded-xl shadow-sm text-slate-600">
                        <Calendar size={14} className="text-slate-400" />
                        <span>Last 30 Days</span>
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-200 hover:bg-white hover:border-slate-300 gap-2 h-10 px-4 rounded-xl shadow-sm text-slate-600">
                        <Filter size={14} className="text-slate-400" />
                        <span>Filter Data</span>
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-white h-10 px-8 rounded-xl shadow-lg shadow-primary/20 font-bold tracking-tight">
                        Generate Report
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Avg. Heart Rate"
                    value="72"
                    unit="bpm"
                    change="2.4"
                    icon={Heart}
                />
                <StatCard
                    title="Blood Pressure"
                    value="118/72"
                    unit="mmHg"
                    change="-1.2"
                    icon={Zap}
                />
                <StatCard
                    title="Glucose Level"
                    value="94"
                    unit="mg/dl"
                    change="0.8"
                    icon={Droplets}
                />
                <Card
                    title="Prediction Confidence"
                    subtitle="AI Model Confidence"
                    icon={TrendingUp}
                    className="group"
                >
                    <div className="flex items-end gap-2 mt-1">
                        <span className="text-3xl font-extrabold tracking-tighter text-slate-900">98.2</span>
                        <span className="text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-primary w-[98.2%] rounded-full shadow-[0_0_8px_rgba(225,29,72,0.4)]" />
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card
                    title="Population Health Intensity"
                    subtitle="Distribution of risk factors across patient cohorts"
                    className="lg:col-span-2 min-h-[400px] flex flex-col justify-between"
                >
                    <div className="flex-1 flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-100 rounded-2xl bg-slate-50/30 group">
                        <p className="text-slate-400 font-semibold uppercase tracking-widest text-[10px] mb-4">Recharts Visualization Ready</p>
                        <div className="flex gap-4 items-end h-32 mb-6">
                             {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                 <div
                                    key={i}
                                    className="w-8 bg-slate-200/60 rounded-t-lg transition-all duration-500 group-hover:bg-primary/20 group-hover:translate-y-[-4px]"
                                    style={{ height: `${h}%` }}
                                 />
                             ))}
                        </div>
                        <p className="text-slate-500 text-xs max-w-xs text-center leading-relaxed">
                            Prepare your `Recharts` implementation here. Bars and lines will render with <span className="text-primary font-bold">#E11D48</span> accents.
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-100/60">
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">High Risk</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Baseline</span>
                            </div>
                        </div>
                        <Link href="#" className="flex items-center gap-1.5 text-xs font-bold text-slate-900 group">
                            <span>View Full Breakdown</span>
                            <ArrowUpRight size={14} className="text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </Link>
                    </div>
                </Card>

                <div className="space-y-6">
                    <Card title="Quick Risk Assessment" subtitle="Priority review required" className="bg-slate-900 border-none group hover:shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-visible relative">
                         <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/30 z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                            <Zap size={24} fill="white" />
                         </div>
                         <div className="space-y-4 mt-2">
                            {[
                                { name: "Robert Fox", risk: "Critical", id: "P-8291" },
                                { name: "Annette Black", risk: "Stable", id: "P-7210" },
                                { name: "Jenny Wilson", risk: "Review", id: "P-4402" }
                            ].map((p, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group/row">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/50 group-hover/row:text-primary transition-colors">
                                            {p.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white leading-none">{p.name}</p>
                                            <p className="text-[10px] text-white/40 mt-1 font-mono">{p.id}</p>
                                        </div>
                                    </div>
                                    <div className={cn(
                                        "px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-widest",
                                        p.risk === "Critical" ? "bg-rose-500/20 text-rose-400 border border-rose-500/30" :
                                        p.risk === "Stable" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                                        "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                                    )}>
                                        {p.risk}
                                    </div>
                                </div>
                            ))}
                         </div>
                         <Button className="w-full mt-6 bg-white hover:bg-slate-100 text-slate-900 font-bold tracking-tight rounded-xl">
                            All Assessments
                         </Button>
                    </Card>

                    <Card title="Health Indicators" className="p-0 border-none bg-transparent shadow-none hover:shadow-none hover:translate-y-0">
                         <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                                    <Droplets size={16} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hydration</p>
                                    <p className="text-xl font-bold text-slate-900 mt-1">82<span className="text-xs text-slate-400 ml-1">%</span></p>
                                </div>
                            </div>
                            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                                    <TrendingUp size={16} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Vitals</p>
                                    <p className="text-xl font-bold text-slate-900 mt-1">Normal</p>
                                </div>
                            </div>
                         </div>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}

const customScrollbarStyle = `
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #CBD5E1; }
`;
