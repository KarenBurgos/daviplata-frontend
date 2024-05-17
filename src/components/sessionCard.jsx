import userIcon from "../assets/icons/User.svg"

function SessionCard(){
    return(
        <div className="w-80% border border-white rounded-md flex p-4">
            <div>
                <embed src={userIcon} type="" />
            </div>
            <div>
                <span>
                    <h2>Usuario</h2>
                    <p>123456789101112</p>
                </span>
                <span>
                    <h2>monto a pagar:</h2>
                    <span className=" rounded-md py-1 px-2">
                        <p className="">$0.00</p>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default SessionCard;