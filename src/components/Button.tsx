import type { ButtonInterface } from "../types"


function Button({className, icon, children} : ButtonInterface){
    return <>
        <div>
            <button className={"btn justify-center items-center  text-lg font-bold hover:cursor-pointer " + className} >
                {icon && <span className="flex items-center">{icon}</span> }
                {children}
            </button>
        </div>
    </>
}

export default Button