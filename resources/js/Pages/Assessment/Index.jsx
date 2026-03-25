import { useState, useEffect } from "react";
import { useForm, Head } from "@inertiajs/react";
import AssessmentHeader from "./Components/AssessmentHeader";
import FormGroup from "./Components/FormGroup";
import AnalysisPreview from "./Components/AnalysisPreview";
import AnalysisResult from "./Components/AnalysisResult";
import { ArrowRight, Activity, ChevronRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function AssessmentIndex({ result }) {
    const { data, setData, post, processing } = useForm({
        age: "", sex: "", cp: "", trestbps: "",
        chol: "", fbs: "", restecg: "",
        thalach: "", exang: "", oldpeak: "", slope: "", thal: ""
    });

    const [step, setStep] = useState(1);
    const [showErrors, setShowErrors] = useState(false);
    
    const requiredPerStep = {
        1: ['age', 'sex', 'trestbps'],
        2: ['chol', 'fbs', 'restecg'],
        3: ['thalach', 'exang', 'oldpeak', 'slope']
    };

    const isStepValid = (currentStep) => {
        const fields = requiredPerStep[currentStep];
        return fields.every(f => data[f] !== '' && data[f] !== null && data[f] !== undefined);
    };
    
    useEffect(() => {
        if (!result) {
            setStep(1);
            setShowErrors(false);
        }
    }, [result]);

    const handleNext = () => {
        if (isStepValid(step)) {
            setShowErrors(false);
            setStep(step + 1);
        } else {
            setShowErrors(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isStepValid(step)) {
            setShowErrors(false);
            post('/analyze', {
                preserveScroll: true
            });
        } else {
            setShowErrors(true);
        }
    };

    // Orchestrator Logic: Pass to new Decoupled Component
    if (result) {
        return <AnalysisResult result={result} />;
    }

    const currentValid = isStepValid(step);

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Head title="Clinical Assessment — Vena.ai" />
            <AssessmentHeader />
            
            <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
                    <div className="flex-1 lg:max-w-[42rem] pt-8">
                        <form onSubmit={(e) => { e.preventDefault() }}>
                            <div className="min-h-[440px]">
                                <FormGroup step={step} data={data} setData={setData} showErrors={showErrors} />
                            </div>
                            
                            <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">
                                <div>
                                    {step > 1 && (
                                        <button 
                                            type="button" 
                                            onClick={() => { setStep(step - 1); setShowErrors(false); }}
                                            className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                                        >
                                            Previous Step
                                        </button>
                                    )}
                                </div>
                                <div className="flex items-center gap-4">
                                    {showErrors && !currentValid && (
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-red-500">
                                            Missing Required Fields
                                        </span>
                                    )}
                                    {step < 3 ? (
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className={cn("inline-flex h-12 items-center justify-center gap-2 rounded-xl px-8 text-sm font-semibold transition-all active:scale-95",
                                                !currentValid ? "bg-slate-800 text-white/80 opacity-60 hover:opacity-100" : "bg-slate-950 text-white hover:bg-slate-800"
                                            )}
                                        >
                                            Next Step
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            disabled={processing}
                                            onClick={handleSubmit}
                                            className={cn("inline-flex h-12 items-center justify-center gap-3 rounded-xl px-8 text-sm font-semibold shadow-sm ring-1 ring-inset ring-white/10 transition-all active:scale-95",
                                                !currentValid ? "bg-[#0360D9]/70 text-white/80 opacity-60 hover:opacity-100" : "bg-[#0360D9] text-white hover:bg-[#024eb0] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0360D9] focus:ring-offset-2",
                                                processing && "opacity-50 cursor-not-allowed"
                                            )}
                                        >
                                            {processing ? "Consulting AI Model..." : "Analyze Profile"}
                                            {processing ? <Activity className="h-4 w-4 animate-pulse" /> : <ChevronRight className="h-4 w-4" />}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="hidden lg:block w-[300px] shrink-0 xl:w-[340px] pt-8">
                        <AnalysisPreview data={data} />
                    </div>
                </div>
            </main>
        </div>
    );
}
