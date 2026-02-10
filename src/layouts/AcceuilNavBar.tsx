import { Search } from "lucide-react";
import { useAuthContext } from "../context/AuthContext";

function AcceuilNavBar() {
    const {user} = useAuthContext();

    return (
        <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-[#101622]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="flex-1 max-w-xl">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                    <input
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-900 transition-all outline-none text-slate-900 dark:text-slate-100 placeholer:text-slate-500"
                        placeholder="Search contacts, emails, or tags..."
                        type="text"
                    />
                </div>
            </div>
            <div className="flex items-center gap-6 ml-8">
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{user?.name}</p>
                        <p className="text-[11px] text-slate-500 font-medium">Admin Account</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-800">
                        <img
                            alt="Profile"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwjB5joNjQM_LEFgC-HP5ANVaYMt22Thp7HufT1oULn1grZuH5rBCUVODG95cLfWEvqZ0wqaa8GjitxUF6ZIf04gfMrA51V7vZqLoKd_WnG1m9T7m_tD0nIzncKQxqIBYZblqfZyZtBe9OUxEtcjopo4NfREkWfEvXfekpPt_QTCFmRhHmRSbbx9eQtCA3HFlfWvJ9NIgKp7WmHluCHD9SkfaYTlK9_etcWvaFA8h40Pi3xGKZihFkplHXp4bJblwkHkr8DG7fpaWB"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AcceuilNavBar;