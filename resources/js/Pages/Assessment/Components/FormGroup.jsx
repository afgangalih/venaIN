import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function Label({ className, children, ...props }) {
    return (
        <label
            className={cn(
                "block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2",
                className
            )}
            {...props}
        >
            {children}
        </label>
    );
}

export function Input({ className, error, ...props }) {
    return (
        <input
            className={cn(
                "flex h-12 w-full rounded-lg border bg-white px-4 py-2 text-sm text-slate-950 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
                error ? "border-red-500 focus-visible:ring-red-500/30 focus-visible:border-red-500 bg-red-50/10" : "border-slate-200 focus-visible:ring-[#0360D9]/30 focus-visible:border-[#0360D9]",
                className
            )}
            {...props}
        />
    );
}

export function SelectNative({ className, error, children, ...props }) {
    return (
        <div className="relative">
            <select
                className={cn(
                    "flex h-12 w-full appearance-none rounded-lg border bg-white px-4 py-2 pr-10 text-sm text-slate-950 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
                    error ? "border-red-500 focus-visible:ring-red-500/30 focus-visible:border-red-500 bg-red-50/10" : "border-slate-200 focus-visible:ring-[#0360D9]/30 focus-visible:border-[#0360D9]",
                    className
                )}
                {...props}
            >
                {children}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}

export default function FormGroup({ step, data, setData, showErrors }) {
    const handleNumber = (e) => {
        setData(e.target.name, e.target.value === '' ? '' : Number(e.target.value));
    };

    const isError = (field) => {
        return showErrors && (data[field] === '' || data[field] === null || data[field] === undefined);
    };

    if (step === 1) {
        return (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950">Biometrics</h3>
                    <p className="mt-1 text-sm text-slate-500">Enter your core physical profiles.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                        <Label htmlFor="age">Age (Years) *</Label>
                        <Input type="number" name="age" id="age" value={data.age} onChange={handleNumber} placeholder="e.g. 55" error={isError('age')} />
                    </div>
                    <div>
                        <Label htmlFor="sex">Biological Sex *</Label>
                        <SelectNative name="sex" id="sex" value={data.sex} onChange={handleNumber} error={isError('sex')}>
                            <option value="">Select...</option>
                            <option value="1">Male (1)</option>
                            <option value="0">Female (0)</option>
                        </SelectNative>
                    </div>
                    <div>
                        <Label htmlFor="cp">Chest Pain Type</Label>
                        <SelectNative name="cp" id="cp" value={data.cp} onChange={handleNumber}>
                            <option value="">Select...</option>
                            <option value="0">Typical Angina (0)</option>
                            <option value="1">Atypical Angina (1)</option>
                            <option value="2">Non-anginal Pain (2)</option>
                            <option value="3">Asymptomatic (3)</option>
                        </SelectNative>
                    </div>
                    <div>
                        <Label htmlFor="trestbps">Resting Blood Pressure *</Label>
                        <Input type="number" name="trestbps" id="trestbps" value={data.trestbps} onChange={handleNumber} placeholder="e.g. 120" error={isError('trestbps')} />
                    </div>
                </div>
            </div>
        );
    }

    if (step === 2) {
        return (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950">Laboratory</h3>
                    <p className="mt-1 text-sm text-slate-500">Input your recent blood work & ECG results.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                        <Label htmlFor="chol">Serum Cholestoral (mg/dl) *</Label>
                        <Input type="number" name="chol" id="chol" value={data.chol} onChange={handleNumber} placeholder="e.g. 200" error={isError('chol')} />
                    </div>
                    <div>
                        <Label htmlFor="fbs">Fasting Blood Sugar {">"} 120 *</Label>
                        <SelectNative name="fbs" id="fbs" value={data.fbs} onChange={handleNumber} error={isError('fbs')}>
                            <option value="">Select...</option>
                            <option value="1">True (1)</option>
                            <option value="0">False (0)</option>
                        </SelectNative>
                    </div>
                    <div className="sm:col-span-2">
                        <Label htmlFor="restecg">Resting ECG Results *</Label>
                        <SelectNative name="restecg" id="restecg" value={data.restecg} onChange={handleNumber} error={isError('restecg')}>
                            <option value="">Select...</option>
                            <option value="0">Normal (0)</option>
                            <option value="1">ST-T Wave Abnormality (1)</option>
                            <option value="2">Left Ventricular Hypertrophy (2)</option>
                        </SelectNative>
                    </div>
                </div>
            </div>
        );
    }

    if (step === 3) {
        return (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950">Physical Stress</h3>
                    <p className="mt-1 text-sm text-slate-500">Metrics recorded during peak physical exertion.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                        <Label htmlFor="thalach">Max Heart Rate Achieved *</Label>
                        <Input type="number" name="thalach" id="thalach" value={data.thalach} onChange={handleNumber} placeholder="e.g. 150" error={isError('thalach')} />
                    </div>
                    <div>
                        <Label htmlFor="exang">Exercise Induced Angina *</Label>
                        <SelectNative name="exang" id="exang" value={data.exang} onChange={handleNumber} error={isError('exang')}>
                            <option value="">Select...</option>
                            <option value="1">Yes (1)</option>
                            <option value="0">No (0)</option>
                        </SelectNative>
                    </div>
                    <div>
                        <Label htmlFor="oldpeak">ST Depression (Oldpeak) *</Label>
                        <Input type="number" step="0.1" name="oldpeak" id="oldpeak" value={data.oldpeak} onChange={handleNumber} placeholder="e.g. 1.0" error={isError('oldpeak')} />
                    </div>
                    <div>
                        <Label htmlFor="slope">Slope of Peak Ex. ST Seg. *</Label>
                        <SelectNative name="slope" id="slope" value={data.slope} onChange={handleNumber} error={isError('slope')}>
                            <option value="">Select...</option>
                            <option value="0">Upsloping (0)</option>
                            <option value="1">Flat (1)</option>
                            <option value="2">Downsloping (2)</option>
                        </SelectNative>
                    </div>
                    <div className="sm:col-span-2">
                        <Label htmlFor="thal">Thalassemia Defect</Label>
                        <SelectNative name="thal" id="thal" value={data.thal} onChange={handleNumber}>
                            <option value="">Select...</option>
                            <option value="1">Normal (1)</option>
                            <option value="2">Fixed Defect (2)</option>
                            <option value="3">Reversable Defect (3)</option>
                        </SelectNative>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
