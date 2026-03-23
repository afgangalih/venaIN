import React from 'react';
import { cn } from '@/lib/utils';

export function Card({ children, className, title, subtitle, icon: Icon, ...props }) {
    return (
        <div 
            className={cn(
                "bg-white border border-slate-200 rounded-none overflow-hidden transition-colors duration-300",
                "hover:border-slate-400 focus-within:border-slate-400 group relative",
                className
            )}
            {...props}
        >
            {(title || subtitle || Icon) && (
                <div className="p-6 pb-0 flex items-start justify-between mb-4 mt-2">
                    <div className="space-y-1">
                        {title && <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">{title}</h3>}
                        {subtitle && <p className="text-xl text-slate-900 font-black tracking-tighter leading-none mt-1">{subtitle}</p>}
                    </div>
                </div>
            )}
            {Icon && (
                <div className="absolute top-6 right-6 text-slate-300 group-hover:text-primary transition-colors">
                    <Icon size={20} strokeWidth={2} />
                </div>
            )}
            <div className={cn("p-6 pt-0", title ? "" : "pt-6")}>
                {children}
            </div>
        </div>
    );
}

export function StatCard({ title, value, unit, change, icon: Icon, variant = "default", ...props }) {
    const isPositive = change && !change.toString().startsWith('-');
    
    return (
        <Card title={title} icon={Icon} {...props}>
            <div className="flex items-end gap-2 mt-4">
                <span className="text-5xl font-black tracking-tighter text-slate-900 leading-none">{value}</span>
                {unit && <span className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-[0.2em]">{unit}</span>}
            </div>
            {change && (
                <div className="flex items-center gap-2 mt-6">
                    <div className={cn(
                        "px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] border",
                        isPositive ? "text-slate-900 border-slate-900 bg-slate-50" : "text-primary border-primary bg-primary/5"
                    )}>
                        {isPositive ? "+" : ""}{change}%
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Since last</span>
                </div>
            )}
        </Card>
    );
}
