import { Mail, Phone, Edit, Star } from "lucide-react";
import { contact } from "../data/contact";

function ContactList() {
    const contacts = contact;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
                <div key={index} className="bg-white dark:bg-[#1a2234] p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-blue-600/30 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`w-14 h-14 rounded-full overflow-hidden flex items-center justify-center font-bold text-lg `}>
                            {contact.avatarUrl ? (
                                <img alt={contact.firstname} className="w-full h-full object-cover" src={contact.avatarUrl} />
                            ) : (
                                contact.address
                            )}
                        </div>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md text-slate-400 hover:text-blue-600 transition-colors hover:cursor-pointer">
                                <Edit size={18} />
                            </button>
                            <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md text-slate-400 hover:text-yellow-500 transition-colors hover:cursor-pointer">
                                <Star size={18} />
                            </button>
                        </div>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{contact.firstname}</h3>
                    <p className="text-xs font-medium text-slate-500 mb-4">{contact.jobTitle}</p>
                    <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Phone size={16} />
                            <span className="text-[13px]">{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Mail size={16} />
                            <span className="text-[13px] truncate">{contact.email}</span>
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap gap-2">
                        {contact.tags.map((tag, i) => (
                            <span key={i} className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${.color}`}>{tag.label}</span>
                        ))}
                    </div> */}
                </div>
            ))}
        </div>
    );
}

export default ContactList;  