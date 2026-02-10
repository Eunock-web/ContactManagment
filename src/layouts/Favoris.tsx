import { useAuthContext } from "../context/AuthContext";
import { GetFavorisByUser, IsContactFavoris, ToggleFavoris } from "../data/function";
import { useState } from "react";
import { Star, Mail, Phone, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import AcceuilNavBar from "./AcceuilNavBar";

function Favoris() {
    const { user } = useAuthContext();
    const userId = user?.id;
    const favorites = GetFavorisByUser(userId);
    const [, setTick] = useState(0);

    const handleToggleFavorite = (contactId: number) => {
        ToggleFavoris(userId, contactId);
        setTick(prev => prev + 1);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-white dark:bg-[#101622] text-slate-900 dark:text-slate-100 font-sans">
            <SideBar />
            <main className="flex-1 flex flex-col h-full bg-[#f6f6f8] dark:bg-[#101622] overflow-y-auto">
                <AcceuilNavBar />
                <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl font-black tracking-tight mb-1 text-slate-900 dark:text-white">Favorite Contacts</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">{favorites.length} favorites saved</p>
                        </div>
                    </div>

                    {favorites.length === 0 ? (
                        <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-[#1a2234] rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                            <Star className="text-slate-300 dark:text-slate-600 mb-4" size={48} />
                            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">No favorites yet</p>
                            <p className="text-slate-400 dark:text-slate-500 text-sm">Add some contacts to your favorites to see them here.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {favorites.map((contact, index) => {
                                const isFavorite = IsContactFavoris(userId, contact.id);
                                return (
                                    <div key={index} className="bg-white dark:bg-[#1a2234] p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-blue-600/30 transition-all group">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`w-14 h-14 rounded-full overflow-hidden flex items-center justify-center font-bold text-lg`}>
                                                {contact.avatarUrl ? (
                                                    <img alt={contact.firstname} className="w-full h-full object-cover" src={contact.avatarUrl} />
                                                ) : (
                                                    contact.firstname.charAt(0) + contact.lastname.charAt(0)
                                                )}
                                            </div>
                                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md text-slate-400 hover:text-blue-600 transition-colors">
                                                    <Link to={`/edit/${contact.id}`}><Edit size={18} /></Link>
                                                </button>
                                                <button
                                                    onClick={() => handleToggleFavorite(contact.id)}
                                                    className={`p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors ${isFavorite ? 'text-yellow-500' : 'text-slate-400'}`}
                                                >
                                                    <Star size={18} fill={isFavorite ? "currentColor" : "none"} />
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-1">{contact.firstname + " " + contact.lastname}</h3>
                                        <p className="text-sm text-[15px] font-medium text-slate-500 mb-4">{contact.jobTitle}</p>
                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                                <Phone size={16} />
                                                <span className="text-[15px]">{contact.phone}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                                <Mail size={16} />
                                                <span className="text-[15px] truncate">{contact.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Favoris;