import Card from './Card.jsx';

function CourseList(props) {
    return (
    <div className= "md:block flex justify-center">
        <div className="grid grid-cols-auto-fill auto-rows-14 gap-x-16 gap-y-8 mx-12">
            {props.courseList.map(([courseId, info]) => (
            <Card key={courseId} 
                 courseId={courseId} 
                 info={info} 
                 isSelected={props.isSelected[courseId]} 
                 setIsSelected={props.setIsSelected}
                 canSelect={props.canSelect}/>)
            )}
        </div>
    </div>);
}

export default CourseList;