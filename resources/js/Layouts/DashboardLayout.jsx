import React from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    LayoutDashboard,
    Activity,
    HeartPulse,
    Users,
    Settings,
    LogOut,
    Bell,
    Search,
    UserCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const SidebarItem = ({ href, icon: Icon, label, active }) => (
    <Link
        href={href}
        className={cn(
            "group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ease-in-out",
            "hover:bg-slate-100/80 active:scale-[0.98]",
            active ? "bg-slate-100 text-primary font-medium" : "text-slate-500 hover:text-slate-900"
        )}
    >
        <Icon size={18} className={cn("transition-colors", active ? "text-primary" : "group-hover:text-slate-900")} />
        <span className="text-sm">{label}</span>
    </Link>
);

const NavSection = ({ title, children }) => (
    <div className="space-y-1 mb-6">
        {title && <h5 className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">{title}</h5>}
        {children}
    </div>
);

export default function DashboardLayout({ children, title }) {
    return (
        <div className="flex h-screen bg-background overflow-hidden selection:bg-primary/10">
            <Head title={title} />

            <aside className="w-64 border-r border-border bg-white flex flex-col z-20">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/20">
                            <HeartPulse size={20} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">Vena<span className="text-primary">.ai</span></span>
                    </Link>
                </div>

                <div className="flex-1 px-3 overflow-y-auto">
                    <NavSection>
                        <SidebarItem href="/dashboard" icon={LayoutDashboard} label="Dashboard" active={true} />
                        <SidebarItem href="/dashboard" icon={Activity} label="Risk Analysis" />
                        <SidebarItem href="/dashboard" icon={Users} label="Patients" />
                    </NavSection>

                    <NavSection title="Insights">
                        <SidebarItem href="#" icon={HeartPulse} label="Cardiology Reports" />
                    </NavSection>
                </div>

                <div className="p-4 border-t border-border mt-auto">
                    <SidebarItem href="#" icon={Settings} label="Settings" />
                    <button className="w-full text-left mt-1">
                        <SidebarItem href="#" icon={LogOut} label="Log out" />
                    </button>
                </div>
            </aside>

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <header className="h-16 border-b border-border bg-white px-8 flex items-center justify-between z-10 sticky top-0">
                    <div className="max-w-md w-full relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search patient record..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all placeholder:text-slate-400"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 rounded-full">
                            <Bell size={20} />
                        </Button>
                        <div className="h-4 w-[1px] bg-border mx-1" />
                        <div className="flex items-center gap-3 pl-2">
                            <div className="text-right">
                                <p className="text-xs font-semibold text-slate-900 leading-none">Dr. Sarah Jenkins</p>
                                <p className="text-[10px] text-slate-500 mt-0.5">Senior Cardiologist</p>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-600">
                                <UserCircle size={24} />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
