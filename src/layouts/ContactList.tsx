import { Mail, Phone } from "lucide-react";


function ContactList(){

    return <>
        <div>

            <div>
                <h1> Alex Rivera </h1>
                <p> Lead Product Designer </p>
            </div>
            <div>
                <Phone size={20} className="" />
                <p> +1(555) 000-0000 </p>
            </div>
            <div>
                <Mail size={20} className="" />
                <p> alex.riverra@gmail.com </p>
            </div>
        </div>
    </>
}

export default ContactList  