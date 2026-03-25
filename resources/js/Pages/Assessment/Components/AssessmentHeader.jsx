import { Link } from "@inertiajs/react";
import { ArrowLeft, Activity } from "lucide-react";

export default function AssessmentHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-[85rem] items-center justify-between px-6 lg:px-8">
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="group flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                        <span className="sr-only">Back</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0360D9]/10 text-[#0360D9]">
                            <Activity className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-semibold tracking-tight text-slate-950">
                            Vena.ai Clinical
                        </span>
                    </div>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Assessment Tool v2.1
                </div>
            </div>
        </header>
    );
}
