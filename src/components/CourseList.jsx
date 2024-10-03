import Card from './Card.jsx';

function CourseList(props) {

    const courseList = Object.entries(props.courses).filter((course) => course[1].term === props.term);

    return ( 
    <div className= "md:block flex justify-center">
        <div className="grid grid-cols-auto-fill auto-rows-14 gap-x-16 gap-y-8 mx-12">
        {courseList.map(([id, info]) => (
           <Card key={id} info={info}/>)
        )}
        </div>
    </div>);

}

export default CourseList;