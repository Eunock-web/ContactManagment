import { MoveLeft } from "lucide-react"
import Button from "../components/Button"


function NotFound(){

    return <>
        <div className="">
            <div>
                <img src="https://www.freepik.com/premium-vector/404-errorpage-found-landing-page-businessman-use-megaphone-running-programmer-with-wrench_412771987.htm#fromView=search&page=1&position=21&uuid=4427fba8-6c5e-435f-9fbb-9d14794a5404&query=404+page+found+pour+site+de+gestion+de+contact" alt="" />
            </div>

            <div>
                <h1> Page Not Found </h1>
                <p> Oops! The page you are looking for doesn't exist or has been moved. Check the URL or return to your dashboard. </p>
            </div>
    
            <div>
                <Button > <MoveLeft size={20} className="" /> Back to Dashboard </Button>    
            </div>        
        </div>
    </>
}
export default NotFound