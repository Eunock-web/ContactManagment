import { TriangleAlert } from "lucide-react";
import Button from "../components/Button";


function DeletePop(){

    return <>
        <div>
            <TriangleAlert size={20} />
            
            <div>
                <h1> Delete Contact? </h1>
                <p> Are you sure you want to delete <span>Jane Smith</span>? This action is permanent and cannot be undone. </p>
            </div>

            <div>
                <Button > Cancel </Button>
                <Button > Delete Permanently </Button>
            </div>
        </div>
    </>
}

export default DeletePop