import Card from './Card.jsx';
import TermFilter from './TermFilter.jsx';
import { useState } from "react";

function CourseList(props) {
    const [term, setTerm] = useState("Fall");
    const courseList = Object.entries(props.courses).filter((course) => course[1].term === term);

    const [selected, setSelected] = useState(Object.fromEntries(
        Object.keys(props.courses)
            .map((courseId) => [courseId, false])
    ));

    console.log(selected)


    return ( 
    <main>
        <TermFilter term={term} setTerm={setTerm}/>
        <div className= "md:block flex justify-center">
            <div className="grid grid-cols-auto-fill auto-rows-14 gap-x-16 gap-y-8 mx-12">
            {courseList.map(([courseId, info]) => (
            <Card key={courseId} courseId={courseId} info={info} isSelected={selected[courseId]} setSelected={setSelected}/>)
            )}
            </div>
        </div>
    </main>);
}

export default CourseList;