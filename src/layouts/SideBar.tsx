import { Contact, LogOut, Star, Users } from "lucide-react";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { countries, Jobs } from "../data/function";

function SideBar() {
    const { logout } = useAuthContext();

    const handleClick = () => {

        logout();
    }

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
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600/10 text-blue-600 font-semibold group  ">
                        <Users size={20} />
                        <Link to={"/"}>
                            <span className="text-sm">All Contacts</span>
                        </Link>
                    </a>
                    <Link to="/favorites" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
                        <Star size={20} />
                        <span className="text-sm font-medium">Favorites</span>
                    </Link>
                    {/* <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
                        <History size={20} />
                        <span className="text-sm font-medium">Recently Added</span>
                    </a> */}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2  ">
                    <div className="flex flex-col gap-2">
                        <p className="px-3 text-[15px] font-bold uppercase tracking-wider text-slate-400 mb-2">FILTERS</p>
                        <p className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:cursor-pointer  ">
                            <span className="text-lg font-medium">Pays</span>
                        </p>
                        <div className=" flex flex-col gap-3 hover:cursor-pointer  ">
                            {
                                countries.map((country, index) => (
                                    <div className="flex flex-row  gap-2 " >
                                        <input type="checkbox" className="hover:cursor-pointer w-4" />
                                        <p key={index} className="text-lg" > {country} </p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:cursor-pointer  ">
                            <span className="text-lg font-medium ">Jobs</span>
                        </p>
                        <div className=" flex flex-col gap-4 hover:cursor-pointer  ">
                            {
                                Jobs.map((job, index) => (
                                    <div className="flex flex-row  gap-3 " >
                                        <input type="checkbox" className="hover:cursor-pointer w-4" />
                                        <p key={index} className="text-lg" > {job} </p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                </div>
            </nav>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                <button className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors hover:cursor-pointer" onClick={handleClick} >
                    <LogOut size={20} className="text-red-500" />
                    <span className="text-red-500"> Deconnexion </span>
                </button>
            </div>
        </aside>
    );
}

export default SideBar;