import CourseList from './CourseList.jsx';
import TermFilter from './TermFilter.jsx';
import { useState } from "react";

function Main(props) {
    const [term, setTerm] = useState("Fall");
    const courseList = Object.entries(props.courses).filter((course) => course[1].term === term);

    const [selected, setSelected] = useState(Object.fromEntries(
        Object.keys(props.courses)
            .map((courseId) => [courseId, false])
    ));


    return ( 
    <main>
        <div className="flex flex-wrap justify-between mx-12">
            <TermFilter term={term} setTerm={setTerm}/>
            <button>Schedule</button>
        </div>
        <CourseList courseList={courseList} selected={selected} setSelected={setSelected}/>
        
        
    </main>);
}

export default Main;