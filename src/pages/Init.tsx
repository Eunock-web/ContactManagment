import { UserPlus, Upload, RefreshCw, QrCode, Contact } from "lucide-react";

function Init() {
    return (
        <div className="font-sans bg-[#0f172a] text-slate-100 min-h-screen flex flex-col">
            <main className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-8 bg-[#0f172a]">
                <div className="max-w-md w-full text-center space-y-8">
                    {/* Illustration */}
                    <div className="relative mx-auto w-64 h-64 flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10 p-8 rounded-full border-2 border-dashed border-slate-700 bg-slate-800/40 backdrop-blur-sm shadow-2xl flex items-center justify-center">
                            <div className="size-40 flex items-center justify-center">
                                <div className="relative">
                                    <Contact className="text-slate-600/50" size={100} strokeWidth={1.5} />
                                    <div className="absolute bottom-4 -right-2 bg-blue-600 size-14 rounded-2xl shadow-lg shadow-blue-600/20 border-4 border-[#0f172a] flex items-center justify-center text-white">
                                        <UserPlus size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold text-white">No contacts found</h1>
                        <p className="text-slate-400 text-base leading-relaxed">
                            Start building your network by adding your first contact. It looks like your network is currently empty.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col items-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-10 rounded-xl shadow-xl shadow-blue-600/25 flex items-center gap-2 transition-all active:scale-95 text-lg">
                            <UserPlus size={20} />
                            Add New Contact
                        </button>
                        <div className="flex items-center gap-2 text-sm text-slate-500 py-2">
                            <span>Already have a list?</span>
                            <button className="text-blue-600 font-medium hover:text-blue-400 flex items-center gap-1 transition-colors">
                                <Upload size={14} />
                                Import from CSV
                            </button>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-12 grid grid-cols-2 gap-4 text-left">
                        <div className="p-4 bg-slate-800 hover:bg-slate-700/50 transition-colors cursor-pointer rounded-xl border border-slate-700">
                            <div className="size-8 rounded-lg bg-blue-900/30 text-blue-400 flex items-center justify-center mb-3">
                                <RefreshCw size={20} />
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Sync</p>
                            <p className="text-sm font-medium text-slate-200">Sync with Google</p>
                        </div>
                        <div className="p-4 bg-slate-800 hover:bg-slate-700/50 transition-colors cursor-pointer rounded-xl border border-slate-700">
                            <div className="size-8 rounded-lg bg-indigo-900/30 text-indigo-400 flex items-center justify-center mb-3">
                                <QrCode size={20} />
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Scan</p>
                            <p className="text-sm font-medium text-slate-200">Scan Business Card</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Init;