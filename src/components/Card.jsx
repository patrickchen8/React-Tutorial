
function Card(props) {
    const courseName = `${props.info.term} CS ${props.info.number}`;

    const handleClick = (e) => {
        const courseId = e.target.id;
        props.setSelected((prev) => {
            console.log(prev);
            return {... prev, [courseId]: !prev[courseId]};})
    }


    return (<div id = {props.courseId}
                className={`flex flex-col border-2 ${props.isSelected ? 'bg-purple-300' : 'bg-white'} border-gray-400 border-solid rounded-md shadow-lg shadow-slate-400 p-4 cursor-pointer`}
                onClick={(e) => {handleClick(e)}}>
        <h2 className="text-xl font-bold mb-4">{courseName}</h2>
        <p className="mb-auto">{props.info.title}</p>
        <hr></hr>
        <p className="text-center">{props.info.meets}</p>
    </div>);
}

export default Card; 