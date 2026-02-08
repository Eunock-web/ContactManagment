import { Camera, X, User, AtSign, Save, Search, Bell, Settings, Contact, FileText } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import type { ContactData } from "../types";

function Creation() {
    const [data, setData] = useState<ContactData>({
        firstname : "",
        lastname : "",
        jobTitle : "",
        email : "",
        phone : "",
        address : "",
        country : "",
        avatarUrl : ""
    });

    const handleChange =  (e:ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.currentTarget;

        setData((prevData) => 
            ({
                ...prevData, 
                [name] : value
            })
        );
    }

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault();

        console.log(data);
    }

    return (
        <div className="bg-[#0f172a] font-sans text-slate-100 min-h-screen">
            <div className="relative flex h-screen w-full flex-col overflow-hidden">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-800 bg-[#1e293b] px-10 py-3">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-blue-600">
                            <div className="size-8 flex items-center justify-center bg-blue-600/10 rounded-lg">
                                <Contact size={20} />
                            </div>
                            <h2 className="text-white text-lg font-bold leading-tight tracking-tight">Contact Manager</h2>
                        </div>
                        <label className="flex flex-col min-w-40 h-10 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
                                <div className="text-slate-400 flex border-none bg-slate-800 items-center justify-center pl-4">
                                    <Search size={16} />
                                </div>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-800 text-white focus:ring-0 h-full placeholder:text-slate-500 px-4 text-base outline-none"
                                    placeholder="Search contacts..."
                                    
                                />
                            </div>
                        </label>
                    </div>

                    <div className="flex flex-1 justify-end gap-4">
                        <div className="flex gap-2">
                            <button className="flex size-10 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors">
                                <Bell size={20} />
                            </button>
                            <button className="flex size-10 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors">
                                <Settings size={20} />
                            </button>
                        </div>
                        <div className="bg-slate-700 rounded-full size-10 overflow-hidden border border-slate-700">
                            <img
                                className="w-full h-full object-cover"
                                alt="User profile"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAorGe3gUG6HuE6mlWIh62toZbrXfE17Ny7Tq2COwn4meMGSBMmp9Y85s8GqmJ8ErOUnLbZMjL7BLisSEgR0g6ZqUgGHQOSgAg-WiBNY3U0_8JX3CiLBJvvDlFl5PJ2WCjXRZlKwXLCUW78ihS90QZ2614PqnsD8XlH196CzWilFOw8iPq76QBhUNUM86Y49UlgEcX9pPMXMWECWIXe6z4_TECRdPpv7mbPrL1VksgsC3RloGQ3Z_Opg4vNJUfQsWySWF9j2V0Pn1SM"
                            />
                        </div>
                    </div>

                </header>

                {/* Background Content (Blurred) */}
                <main className="flex-1 overflow-y-auto p-8 opacity-20 select-none pointer-events-none">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white">Contacts</h1>
                                <p className="text-slate-400">View and manage your professional network.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="h-40 bg-[#1e293b] rounded-xl shadow-sm border border-slate-800"></div>
                            <div className="h-40 bg-[#1e293b] rounded-xl shadow-sm border border-slate-800"></div>
                            <div className="h-40 bg-[#1e293b] rounded-xl shadow-sm border border-slate-800"></div>
                        </div>
                    </div>
                </main>

                {/* Modal Overlay */}
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
                    <div className="bg-[#1e293b] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl flex flex-col border border-slate-800">
                        {/* Modal Header */}
                        <div className="px-8 py-6 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-[#1e293b] z-10">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Add New Contact</h2>
                                <p className="text-slate-400 text-sm mt-1">Create a new entry in your contact database.</p>
                            </div>
                            <button className="p-2 hover:bg-slate-800 rounded-full transition-colors hover:cursor-pointer ">
                                <X className="text-slate-400" size={20} />
                            </button>
                        </div>

                        <form className="" onSubmit={handleSubmit}  >
                            {/* Modal Content */}
                            <div className="p-8 space-y-8">
                                {/* Photo Upload */}
                                {/* <div className="flex flex-col items-center justify-center">
                                    <div className="group relative size-32 rounded-full border-2 border-dashed border-slate-600 bg-slate-800/50 flex flex-col items-center justify-center cursor-pointer hover:border-blue-600/50 hover:bg-slate-800 transition-all overflow-hidden">
                                        <div className="text-slate-400 group-hover:text-blue-600 transition-colors flex flex-col items-center">
                                            <Camera size={32} className="mb-1" />
                                            <span className="text-[10px] uppercase font-bold tracking-wider">Upload</span>
                                        </div>
                                        <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-3">JPG, PNG or GIF. Max size 2MB.</p>
                                </div> */}

                                {/* Identity Section */}
                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                                        <User className="text-blue-600" size={20} />
                                        <h3 className="text-lg font-semibold text-slate-200">Identity</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-slate-300">
                                                First Name <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                className="rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2 px-3 text-sm outline-none"
                                                placeholder="e.g. Jane"
                                                type="text"
                                                name="firstname"
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-slate-300">
                                                Last Name <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                className="rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2 px-3 text-sm outline-none"
                                                placeholder="e.g. Doe"
                                                type="text"
                                                name="lastname"
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-slate-300">Job Title</label>
                                            <input
                                                className="rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2 px-3 text-sm outline-none"
                                                placeholder="e.g. Software Engineer"
                                                type="text"
                                                name="jobTitle"
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-slate-300" htmlFor="country">Pays</label>
                                            <input
                                                className="rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2 px-3 text-sm outline-none"
                                                placeholder="e.g. Japon"
                                                type="text"
                                                name="country"
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </section>

                                {/* Contact Details Section */}
                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                                        <AtSign className="text-blue-600" size={20} />
                                        <h3 className="text-lg font-semibold text-slate-200">Contact Details</h3>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-slate-300">
                                                Email Address <span className="text-red-400">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    className="w-full rounded-lg border  text-white  focus:ring-1 py-2 px-3 text-sm outline-none"
                                                    type="email"
                                                    placeholder="erwinmith@gmail.com"
                                                    name="email"
                                                    required
                                                    onChange={handleChange}
                                                />
                                                {/* <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                                                    <span className="text-xs">⚠</span>
                                                    Please enter a valid email address
                                                </p> */}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-medium text-slate-300">Phone Number</label>
                                                <input
                                                    className="rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2 px-3 text-sm outline-none"
                                                    placeholder="+1 (555) 000-0000"
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-medium text-slate-300">Address</label>
                                                <input
                                                    className="rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2 px-3 text-sm outline-none"
                                                    placeholder="123 Street Name, City"
                                                    type="text"
                                                    name="address"
                                                    required
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Notes Section */}
                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                                        <FileText className="text-blue-600" size={20} />
                                        <h3 className="text-lg font-semibold text-slate-200">Image Url</h3>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-300" htmlFor="url">Picture</label>
                                        <input
                                            className="rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2 px-3 text-sm resize-none outline-none"
                                            placeholder="Past Url link of picture"
                                            type="text"
                                            name="avatarUrl"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                </section>
                            </div>

                            {/* Modal Footer */}
                            <div className="px-8 py-6 border-t border-slate-800 flex justify-end gap-3 sticky bottom-0 bg-[#1e293b] z-10">
                                <button className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-semibold text-sm hover:bg-slate-800 transition-colors hover:cursor-pointer ">
                                    <Link to={"/"} > Cancel </Link>
                                </button>
                                <button className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 flex items-center gap-2 hover:cursor-pointer " type="submit">
                                    <Save size={16} />
                                    Save Contact
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Creation;