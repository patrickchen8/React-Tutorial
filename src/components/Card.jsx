
function Card(props) {

    const courseID = `${props.info.term} CS ${props.info.number}`;



    return (<div className="flex flex-col border-2 border-gray-400 border-solid rounded-md w-1/5 h-56 p-4 cursor-pointer">
        <h2 className="text-xl font-bold mb-4">{courseID}</h2>
        <p className="mb-auto">{props.info.title}</p>
        <hr></hr>
        <p className="text-center">{props.info.meets}</p>
    </div>);
}

export default Card; 