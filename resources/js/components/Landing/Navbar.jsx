import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/95 border-b border-slate-100 backdrop-blur-none antialiased">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    <span className="text-slate-950">Vena</span>
                    <span className="text-[#0360D9]">.ai</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {['Technology', 'Methods', 'About'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors duration-150"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <Link
                    href="/dashboard"
                    className="bg-[#0360D9] text-white font-medium text-sm px-5 py-2 rounded-lg hover:bg-[#0247A8] transition-colors duration-150"
                >
                    Enter Dashboard
                </Link>
            </div>
        </nav>
    );
}
