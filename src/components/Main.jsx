import CourseList from './CourseList.jsx';
import TermFilter from './TermFilter.jsx';
import Modal from './Modal.jsx';
import ModalButton from './ModalButton.jsx';
import { useState } from "react";

function Main(props) {
    const [open, setOpen] = useState(false);
    const [term, setTerm] = useState("Fall");
    const courseList = Object.entries(props.courses).filter((course) => course[1].term === term);

    const [isSelected, setIsSelected] = useState(Object.fromEntries(
        Object.keys(props.courses)
            .map((courseId) => [courseId, false])
    ));

    const [canSelect, setCanSelect] = useState(Object.fromEntries(
        Object.keys(props.courses)
            .map((courseId) => [courseId, true])
    ));

    const selectedCourseList = Object.entries(props.courses)
                                    .filter((course) => isSelected[course[0]]);
                                    
    return ( 
    <main>
        <div className="flex flex-wrap justify-between items-center mx-12 mb-4">
            <TermFilter term={term} setTerm={setTerm}/>
            <ModalButton open={open} setOpen={setOpen}/>
        </div>
        <Modal open={open} setOpen={setOpen} children={selectedCourseList}/>
        <CourseList courseList={courseList} isSelected={isSelected} setIsSelected={setIsSelected} canSelect={canSelect}/>
        
        
    </main>);
}

export default Main;