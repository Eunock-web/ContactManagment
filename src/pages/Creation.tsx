import { ImagePlus, Save, User, X } from "lucide-react"
import Button from "../components/Button"


function Creation(){
    return<>
        <div>
            <div>
                <div className="flex">
                    <h1> Add New Contact </h1>
                    <p> Create a new entry in your contact database. </p>
                </div>

                <X className="" size={22} />
            </div>


            {/**Picture Card */}
            <div>
                <div>
                    <ImagePlus size={20} className="" />
                </div>
                <h1> JPG, PNG or GIF , Max size 2MB. </h1>
            </div>

            <div>
                <div>
                    <User />
                    <h1> Identity </h1>
                </div>

                {/**Info perso */}
                <div>
                    <form >
                        <div>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" placeholder="e.g.Jane" />
                        </div>

                        <div>
                            <label htmlFor="firstname">Last Name</label>
                            <input type="text" placeholder="e.g.Doe" />
                        </div>

                        <div>
                            <label htmlFor="firstname">Job Title</label>
                            <input type="text" placeholder="e.g.Software Engineer" />
                        </div>

                        <div>
                            <label htmlFor="firstname">Company</label>
                            <input type="text" placeholder="e.g.Acme Inc." />
                        </div>

                        <div>

                            <h1> Contact Details </h1>
                        </div>

                        <div>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" placeholder="e.g.Jane" />
                        </div>

                        <div>
                            <label htmlFor="firstname">Last Name</label>
                            <input type="text" placeholder="e.g.Doe" />
                        </div>

                        <div>
                            <label htmlFor="firstname">Job Title</label>
                            <input type="text" placeholder="e.g.Software Engineer" />
                        </div>

                        <div>

                            <h1> Notes </h1>
                        </div>

                        <div>
                            <label htmlFor=""></label>
                            <textarea placeholder="Add any background information, tags or reminders..." ></textarea>
                        </div>

                        <div>
                            <Button > Cancel </Button>
                            <Button > <Save className="" size={20}/> Save Contact </Button>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    </>
}

export default Creation