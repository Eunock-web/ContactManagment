import { Mail, Phone, Edit, Star } from "lucide-react";

function ContactList() {
    const contacts = [
        {
            name: "Alex Rivera",
            role: "Lead Product Designer",
            phone: "+1 (555) 000-0000",
            email: "alex.rivera@design.co",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhzZAtDwLQJehUyW-30FRJrHfmMoixhpiuunzWwa0E72SrAeFSwq6gtbJjjwdHbZrWVdrnelQr4y12L0O4pM5MoVOf76i3UsQyya7RsHQKiWuKiYQI4EVjApxLd36Tk62gppOFtjvSFweVhJxunC-sm3caYbLOYzJY8VQ34ttbYn_8Cyz6q0rQAcZ3aqKOBQI5c2JAOBOaGGFfDfpQCXp_tPvsEFHmTz4FEdextM8tnKapy9DHtqcoGQBLrntWyQQbysFXDQihuk3T",
            bgColor: "bg-blue-50 dark:bg-blue-900/20",
            tags: [{ label: "Work", color: "text-blue-600 bg-blue-50 dark:bg-blue-900/30" }, { label: "Client", color: "text-purple-600 bg-purple-50 dark:bg-purple-900/30" }]
        },
        {
            name: "Jordan Davis",
            role: "Senior Software Engineer",
            phone: "+1 (555) 123-4567",
            email: "jordan.d@techflow.io",
            initials: "JD",
            bgColor: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
            tags: [{ label: "Engineering", color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30" }]
        },
        {
            name: "Marcus Thompson",
            role: "Operations Manager",
            phone: "+1 (555) 987-6543",
            email: "m.thompson@corp.com",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDizpmXEeoxHu1jRTYuVjFMdVwcuwBX6UtFCCX67b90_-N2lTyyw5Bw1r-62SFE8t3FQxTeAz7AybX09_d0U9HNwZfwA6bEyaGjF9TevxY5IbfWOUnYGtDXzlEE3XwIrl848vSplYfDw99DqYuGzBurf875h24pcjn0AfJCm3w5_R3jPGkx2dT-FrnLtM3cnNtvnIDJqQ6LO_obPC6WP3A2jPJATafZsx80cFbM1c52rZg6grd82LssKnseDFT8smQFmJYIQWNW888O",
            bgColor: "bg-slate-200 dark:bg-slate-700",
            tags: [{ label: "Business", color: "text-blue-600 bg-blue-50 dark:bg-blue-900/30" }]
        },
        {
            name: "Sophia Chen",
            role: "Marketing Director",
            phone: "+1 (555) 444-3333",
            email: "sophia.c@brandpulse.net",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoE8gKHkCF2awSgSlx3OOWUrkA5aZWKY7cqd94joWDPUVNDhQXCfoNknm9ZFg9itnJDHYuR-eVBQJPCAEPn-kUO91nIlXujGLLN2xeBir8IK3thA8TAIBSYv7WLd9aWcv7N7XWIO0Z2ZtIGwO8q9z5PDuNJG2JiQwyjLWlvxFZKdkrkqgKhI_CnBpYILInW0uJRrUpFjeRJOq1FgD8skoyRp1bR5iZd2A7QUMwYPiRceyYCxJemLe6jR0S1B0Tp9GeNrpavMNTDPUO",
            bgColor: "bg-pink-50 dark:bg-pink-900/20",
            tags: [{ label: "Marketing", color: "text-pink-600 bg-pink-50 dark:bg-pink-900/30" }, { label: "Top Priority", color: "text-amber-600 bg-amber-50 dark:bg-amber-900/30" }]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
                <div key={index} className="bg-white dark:bg-[#1a2234] p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-blue-600/30 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`w-14 h-14 rounded-full overflow-hidden flex items-center justify-center font-bold text-lg ${contact.bgColor}`}>
                            {contact.image ? (
                                <img alt={contact.name} className="w-full h-full object-cover" src={contact.image} />
                            ) : (
                                contact.initials
                            )}
                        </div>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md text-slate-400 hover:text-blue-600 transition-colors">
                                <Edit size={18} />
                            </button>
                            <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md text-slate-400 hover:text-yellow-500 transition-colors">
                                <Star size={18} />
                            </button>
                        </div>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{contact.name}</h3>
                    <p className="text-xs font-medium text-slate-500 mb-4">{contact.role}</p>
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
                    <div className="flex flex-wrap gap-2">
                        {contact.tags.map((tag, i) => (
                            <span key={i} className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${tag.color}`}>{tag.label}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContactList;  