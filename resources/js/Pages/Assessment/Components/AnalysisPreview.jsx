import { CheckCircle2, CircleDashed } from "lucide-react";

const groups = [
    { name: "Biometrics", fields: ['age', 'sex', 'cp', 'trestbps'] },
    { name: "Laboratory", fields: ['chol', 'fbs', 'restecg'] },
    { name: "Physical Stress", fields: ['thalach', 'exang', 'oldpeak', 'slope', 'thal'] }
];

export default function AnalysisPreview({ data }) {
    return (
        <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-6 lg:p-8 sticky top-24">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-8">
                Data Completeness
            </h4>
            <div className="space-y-8">
                {groups.map((g, idx) => {
                    const total = g.fields.length;
                    const filled = g.fields.filter(f => data[f] !== '' && data[f] !== null).length;
                    const isComplete = filled === total;
                    
                    return (
                        <div key={idx} className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className={`text-sm font-semibold tracking-tight ${isComplete ? 'text-slate-900' : 'text-slate-500'}`}>
                                    {g.name}
                                </span>
                                <span className="text-xs font-semibold tracking-wider text-slate-400">
                                    {filled}/{total}
                                </span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                {g.fields.map(f => {
                                    const isSet = data[f] !== '' && data[f] !== null;
                                    return isSet ? (
                                        <CheckCircle2 key={f} className="h-[18px] w-[18px] text-[#0360D9] transition-all duration-300" />
                                    ) : (
                                        <CircleDashed key={f} className="h-[18px] w-[18px] text-slate-300" />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-8 border-t border-slate-200/60 pt-6">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0360D9]/50 animate-pulse"></span>
                    Live Sync
                </div>
            </div>
        </div>
    );
}
