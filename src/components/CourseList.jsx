import Card from './Card.jsx';

function CourseList(props) {

    const courseList = Object.entries(props.courses);

    return ( <div className="flex flex-wrap justify-around content-between">
        {courseList.map(([id, info]) => (
           <Card key={id} info={info}/>)
        )}
    </div>);

}


export default CourseList;