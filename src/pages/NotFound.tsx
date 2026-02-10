import { ArrowLeft, Link2Off, FileText, Headphones, Globe, MessageCircle, Rss, Contact, SearchX } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="bg-[#0f172a] text-slate-100 min-h-screen flex flex-col transition-colors duration-200">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-800 px-6 lg:px-20 py-4 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="size-8 text-blue-600">
                        <Link to={"/"}>
                            <Contact size={32} />
                        </Link>
                    </div>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-tight">ContactManager</h2>
                </div>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-slate-400 text-sm font-medium hover:text-blue-600 transition-colors" href="#">Contacts</a>
                        <a className="text-slate-400 text-sm font-medium hover:text-blue-600 transition-colors" href="#">Settings</a>
                    </nav>
                    <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-slate-800">
                        <img
                            alt="Profile"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa488gMeEvG_MiiBy-A8DU6H7YH7g2hGViQ3ISraO2ojVEk7To98LPWSTqigqh4eKjrnJPQxrGkcgrfoYTg50LAcKDhtsqwB3RZaLfoEF6fBnxt8-p4jjKuH4xmGTMCH36Pkr52WkfolP_m2810tz8RXbpOUb_nYuDyA7skv1y0l3wNOMO1UmwRbKfuD46p1ixpYQ3fINS36LnZercWDPpVxymfj5mJSeGRjhOvjl81zAM-jKrDMWVus-gdGmJDMCWCOrMz00dGBiw"
                        />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="grow flex items-center justify-center px-6 py-12">
                <div className="max-w-2xl w-full flex flex-col items-center text-center">
                    <div className="relative mb-8 group">
                        <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[100px] scale-150"></div>
                        <div className="relative bg-slate-900/50 p-10 md:p-14 rounded-4xl shadow-2xl border border-slate-800 backdrop-blur-sm overflow-hidden">
                            <div className="flex items-center justify-center gap-4 md:gap-6">
                                <span className="text-8xl md:text-[10rem] font-black text-slate-800 leading-none select-none tracking-tighter">4</span>
                                <div className="size-24 md:size-32 bg-blue-600/20 rounded-3xl flex items-center justify-center ring-1 ring-blue-600/30">
                                    <SearchX className="text-blue-600 size-16 md:size-20" />
                                </div>
                                <span className="text-8xl md:text-[10rem] font-black text-slate-800 leading-none select-none tracking-tighter">4</span>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 size-14 bg-slate-800 rounded-2xl shadow-xl border border-slate-700 flex items-center justify-center text-blue-600">
                            <Link2Off size={24} />
                        </div>
                        <div className="absolute -bottom-6 -left-6 size-20 bg-slate-800 rounded-3xl shadow-xl border border-slate-700 flex items-center justify-center text-slate-500">
                            <FileText size={40} />
                        </div>
                    </div>

                    <div className="space-y-4 max-w-md relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Page Not Found
                        </h1>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Oops! The page you are looking for doesn't exist or has been moved. Check the URL or return to your dashboard.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-10">
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 group hover:cursor-pointer">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <Link to={"/"}>Back to Dashboard</Link>
                        </button>
                    </div>

                    <div className="mt-16 pt-10 border-t border-slate-800/60 w-full flex flex-col items-center">
                        <p className="text-slate-500 text-sm mb-4">
                            Think this is a mistake? Let us know.
                        </p>
                        <a className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-500 transition-colors group" href="#">
                            <Headphones size={18} />
                            Contact Support
                        </a>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="flex flex-col gap-8 px-10 py-12 text-center border-t border-slate-800 bg-slate-900/30">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    <a className="text-slate-500 text-sm font-medium hover:text-white transition-colors" href="#">Privacy Policy</a>
                    <a className="text-slate-500 text-sm font-medium hover:text-white transition-colors" href="#">Terms of Service</a>
                    <a className="text-slate-500 text-sm font-medium hover:text-white transition-colors" href="#">Status Page</a>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-slate-600 text-sm">
                        © 2024 ContactManager Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-slate-700">
                        <Globe className="cursor-pointer hover:text-blue-600 transition-colors" size={20} />
                        <MessageCircle className="cursor-pointer hover:text-blue-600 transition-colors" size={20} />
                        <Rss className="cursor-pointer hover:text-blue-600 transition-colors" size={20} />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default NotFound;