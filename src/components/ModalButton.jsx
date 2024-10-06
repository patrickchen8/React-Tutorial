function ModalButton(props) {
    const handleClick = () => props.setOpen(true);
    
    return ( 
        <button className="bg-purple-500 hover:bg-purple-600 rounded-md p-2 border-2 border-purple-700 text-white"
                onClick={handleClick}>
            Schedule
        </button>
    );
}

export default ModalButton; 