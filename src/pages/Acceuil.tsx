import { Plus } from "lucide-react"
import Button from "../components/Button"


function Acceuil(){
    return <>
        <div>
            <div>
                <div>
                    <h1> All Contact </h1>
                    <p> Manage your 1,248 network connections </p>
                </div>
                <Button > <Plus size={20} className="" /> New Contact </Button>
            </div>

            <div>
                
            </div>
        </div>
    </>
}

export default Acceuil