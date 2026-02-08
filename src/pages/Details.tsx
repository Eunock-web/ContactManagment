import { Mail, MapPin, Phone, Smartphone, Trash2 } from "lucide-react"
import DetailsNavBar from "../layouts/DetailsNavBar"


function Details(){
    return <>
        <div>
            <DetailsNavBar />

            <div>
                <img src="" alt="profil" />
                <div>
                    <h1> Johnathan Doe </h1>
                    <p>Senior Product Manager at TechFlow</p>
                </div>
            </div>

            {/**Personnal info */}
            <div>
                <div>
                    <h1> DATE OF BIRTH </h1>
                    <p> May 14, 1988 </p>
                </div>

                <div>
                    <h1> DEPARTMENT </h1>
                    <p> Product Development </p>
                </div>
            </div>

            {/**Contact info */}
            <div>
                <div>
                    <Phone size={20} className="" />
                    <h1> CONTACT INFO </h1>
                </div>

                <div>
                    <div>
                        <Mail size={20} className="" />
                        <div>
                            <h1>WORK EMAIL</h1>
                            <p> johnathan.doe@gmail.com </p>
                        </div>
                    </div>

                    <div>
                        <Smartphone size={20} className="" />
                        <div>
                            <h1>MOBILE</h1>
                            <p> +1 (555) 902-3421</p>
                        </div>
                    </div>
                </div>
            </div>

            {/**Adress */}
            
            <div>
                <div>
                    <MapPin className="" size={20} />
                    <h1> ADDRESS </h1>
                </div>

                <div>
                    <p> 452 Innovation Way, Suite 1200 San Fransisco, CA 94105 United States </p>
                </div>
            </div>

            {/**Suppression Bar */}
            <div>
                <Trash2 size={20} className="" />
                <h1 className=""> Delete Contact </h1>
            </div>
        </div>
    </>
}

export default Details