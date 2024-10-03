import Card from './Card.jsx';
import TermFilter from './TermFilter.jsx';
import { useState } from "react";

function CourseList(props) {
    const [term, setTerm] = useState("Fall");
    const courseList = Object.entries(props.courses).filter((course) => course[1].term === term);

    return ( 
    <main>
        <TermFilter term={term} setTerm={setTerm}/>
        <div className= "md:block flex justify-center">
            <div className="grid grid-cols-auto-fill auto-rows-14 gap-x-16 gap-y-8 mx-12">
            {courseList.map(([id, info]) => (
            <Card key={id} info={info}/>)
            )}
            </div>
        </div>
    </main>);
}

export default CourseList;