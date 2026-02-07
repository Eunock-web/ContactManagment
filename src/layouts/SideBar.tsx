import { Contact, FolderGit2, History, LayoutGrid, Settings, Star, Users } from "lucide-react";

function SideBar() {
    return (
        <aside className="w-64 flex flex-col bg-white dark:bg-[#1a2234] border-r border-slate-200 dark:border-slate-800 h-screen">
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                    <Contact size={24} />
                </div>
                <div>
                    <h1 className="font-bold text-lg leading-tight text-slate-900 dark:text-white">ContactHub</h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Pro Dashboard</p>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                <div className="pb-4 pt-2">
                    <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Navigation</p>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600/10 text-blue-600 font-semibold group">
                        <Users size={20} />
                        <span className="text-sm">All Contacts</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
                        <Star size={20} />
                        <span className="text-sm font-medium">Favorites</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
                        <History size={20} />
                        <span className="text-sm font-medium">Recently Added</span>
                    </a>
                </div>

                {/* <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Groups</p>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <FolderGit2 size={20} />
                        <span className="text-sm font-medium">Business</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <Users size={20} />
                        <span className="text-sm font-medium">Family</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <LayoutGrid size={20} />
                        <span className="text-sm font-medium">Friends</span>
                    </a>
                </div> */}
            </nav>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                <button className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                    <Settings size={20} />
                    Settings
                </button>
            </div>
        </aside>
    );
}

export default SideBar;