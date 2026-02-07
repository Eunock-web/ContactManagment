import { Users } from "lucide-react";
import Button from "../components/Button";


function NotFound(){
    return <>
        <div>
            <div>
                <h1> No contacts found </h1>
                <p> It looks like your network is currently empty.Start building your professionnal ecosystem by adding your first contact manually or importing a list. </p>
            </div>
            
            <Button > <Users size={20} className="" /> Add New Contact </Button>
        </div>
    </>
}

export default NotFound