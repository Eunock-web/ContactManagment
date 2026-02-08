import { Plus } from "lucide-react"
import SideBar from "../layouts/SideBar"
import AcceuilNavBar from "../layouts/AcceuilNavBar"
import ContactList from "../layouts/ContactList"
import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext";
import { ContactByUser } from "../data/db";

function Acceuil() {
        const { user } = useAuthContext();
        const userId = user?.id;
        const contactss = ContactByUser(userId);
    
        const counts = contactss.length;
    
    return (
        <div className="flex h-screen overflow-hidden bg-white dark:bg-[#101622] text-slate-900 dark:text-slate-100 font-sans">
            {/* Side Navigation */}
            <SideBar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full bg-[#f6f6f8] dark:bg-[#101622] overflow-y-auto">
                <AcceuilNavBar />

                <div className="p-8">
                    {/* Page Title Area */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl font-black tracking-tight mb-1 text-slate-900 dark:text-white">All Contacts</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">Manage your {counts} network connections</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:cursor-pointer ">
                                <Plus size={20} />
                                <Link to={"/create"}> New Contact </Link>
                            </button>
                        </div>
                    </div>

                    {/* Tabs/Filters */}
                    {/* <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <button className="px-6 py-3 border-b-2 border-blue-600 text-blue-600 text-sm font-bold hover:cursor-pointer">All</button>
                        <button className="px-6 py-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-semibold transition-colors hover:cursor-pointer">Pays</button>
                        <button className="px-6 py-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-semibold transition-colors">Job</button>
                    </div> */}

                    {/* Contacts Grid */}
                    <ContactList />
                </div>
            </main>
        </div>
    )
}

export default Acceuil