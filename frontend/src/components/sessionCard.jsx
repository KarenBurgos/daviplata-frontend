import userIcon from "../assets/icons/User.svg"

function SessionCard(){
    return(
        <div className="border border-white rounded-md flex w-[80%] text-lg">
            <div className="p-5">
                <embed src={userIcon} type="" />
            </div>
            <div className="py-5 pr-5">
                <span>
                    <h2 className="font-bold">Usuario</h2>
                    <p>123456789101112</p>
                </span>
                <span>
                    <h2  className="font-bold">monto a pagar:</h2>
                    <div className="border border-white rounded-md ">
                        <p className="p-1">$0.00</p>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default SessionCard;