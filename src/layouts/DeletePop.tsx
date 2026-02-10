import { TriangleAlert, X } from "lucide-react";
import Button from "../components/Button";


function DeletePop(){

    return <>
        <div className="border p-5 flex flex-col justify-center items-center w-[21%] border-slate-800 rounded-lg bg-slate-800 gap-3 border-t-5 border-t-red-600 ">

            <TriangleAlert size={55} className=" text-red-700 border border-red-300 bg-red-300 p-3 rounded-full  " />
            
            <div className="flex flex-col gap-3 text-center ">
                <h1 className="font-bold text-2xl text-white"> Delete Contact? </h1>
                <p className="text-gray-400 "> Are you sure you want to delete <span className="text-white font-bold">Jane Smith</span>? This action is permanent and cannot be undone. </p>
            </div>

            <div className="flex flex-row gap-10">
                <Button className="text-white border border-gray-400 py-2 px-8 rounded-xl " > Cancel </Button>
                <Button  className="text-white bg-red-700 py-2 px-2 border-red-600 rounded-xl"> Delete Permanently </Button>
            </div>

            <X className="text-gray-400 absolute top-4 right-4 cursor-pointer hover:text-white " size={20} />
        </div>
    </>
}

export default DeletePop