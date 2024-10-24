import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";

function Card(props) {
    const courseName = `${props.info.term} CS ${props.info.number}`;

    const handleClick = (e) => {
        const courseId = e.target.id;
        props.canSelect && props.setIsSelected((prev) => {return {... prev, [courseId]: !prev[courseId]};})
    };

    const bgcolor = props.isSelected ? 'bg-purple-300' : (props.canSelect ? 'bg-white' : 'bg-gray-300');
    const cursor = props.canSelect ? 'cursor-pointer' : 'cursor-not-allowed';

    return (<div id = {props.courseId}
                className={`flex flex-col border-2  ${bgcolor}  border-gray-400 border-solid rounded-md shadow-lg shadow-slate-400 p-4 ${cursor}`}
                onClick={(e) => {handleClick(e)}}>
        <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-4">{courseName}</h2>
            {props.isAdmin && <Link to={`/edit/${props.courseId}`}> <CiEdit size="25"/> </Link>}
        </div>
        
        <p className="mb-auto">{props.info.title}</p>
        <hr></hr>
        <p className="text-center">{props.info.meets}</p>
    </div>);
}

export default Card; 