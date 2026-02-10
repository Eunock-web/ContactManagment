import { Pencil, X } from "lucide-react"
import Button from "../components/Button"
import { Link } from "react-router-dom"


function DetailsNavBar(){
    return <>
        <div className="">
            <div className="" >
                <X />
                <h1> Contact Details </h1>
            </div>

            <Button className="" > <Pencil /> <Link to={""}> Edit </Link> </Button>
        </div>
    </>
}

export default DetailsNavBar