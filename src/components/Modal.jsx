
function Modal(props) {
    const handleClick = () => props.setOpen(false);
    
    return (<div className={`fixed inset-0 flex justify-center items-center ${props.open ? "bg-black/20 ": "invisible"}`}
                onClick={handleClick}>

                <div className="bg-white rounded-md relative w-3/4 h-3/4 overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}>
                    <h1 className="text-2xl text-center my-4 font-bold">
                        Course Schedule
                    </h1>

                    <button className="bg-red-500 hover:bg-red-600 rounded-md border-1 border-red-700 p-3 text-white absolute top-2 right-2"
                            onClick={handleClick}> 
                        Close
                    </button>

                    {props.children.length > 0 ? <div className="flex flex-col items-center space-y-2"> {props.children} </div> : 
                                                <p className="text-center">Click on the courses to select them to view them in the schedule</p>}

                </div>

            </div>);
}

export default Modal;