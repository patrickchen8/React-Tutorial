
function CourseList(props) {

    const courseList = Object.entries(props.courses);

    return ( <div>
        {courseList.map(([id, info]) => (
            <p key={id}> {`${info.term} CS ${info.number}: ${info.title}`} </p>)
        )}
    </div>);

}


export default CourseList;