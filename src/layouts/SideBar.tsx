

function SideBar(){
    return <>
        <div>
            {/**logo */}
            <div></div>
            <div className="">
                <h1> ContactHub </h1>
                <p>Pro Dashboard</p>
            </div>
        </div>

        <div>
            <h1> NAVIGATION </h1>
            <div>
                <input type="checkbox" />
                <h1> All Contacts </h1>
            </div>

            <div>
                <input type="checkbox" />
                <h1> Favorites </h1>
            </div>

            <div>
                <input type="checkbox" />
                <h1> Jobs </h1>
            </div>
        </div>
    </>
}

export default SideBar