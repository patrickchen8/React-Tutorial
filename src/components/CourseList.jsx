import Card from './Card.jsx';
import { catchConflict } from '../utilities/conflict.js';

function CourseList(props) {

    const canSelect = props.selected.length === 0 ? Object.fromEntries(
        Object.keys(props.courses)
            .map((courseId) => [courseId, true])
    ) : catchConflict(props.courses, props.selected);

    
    return (
    <div className= "md:block flex justify-center">
        <div className="grid grid-cols-auto-fill auto-rows-14 gap-x-16 gap-y-8 mx-12">
            {props.courseList.map(([courseId, info]) => (
            <Card key={courseId} 
                 courseId={courseId} 
                 info={info} 
                 isSelected={props.isSelected[courseId]} 
                 setIsSelected={props.setIsSelected}
                 canSelect={canSelect[courseId]}/>)
            )}
        </div>
    </div>);
}

export default CourseList;