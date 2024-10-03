import Banner from './components/Banner.jsx'
import CourseList from './components/CourseList.jsx'
import TermFilter from './components/TermFilter.jsx'
import {useJsonQuery} from './utilities/fetch.js'
import { useState } from "react";


const App = () => {
  const [term, setTerm] = useState("Fall");

  const url = 'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php';
  const [schedule, isLoading, error] = useJsonQuery(url);


  if(error) {
    return (<h1 className="text-2xl font-bold text-red-600 text-center"> AN ERROR OCCURED!</h1>);
  }
  if(isLoading) {
    return (<></>);
  }
  if(!schedule) {
    return (<h1 className="text-2xl font-bold text-red-600 text-center"> NO DATA FOUND!</h1>);
  }


  return (<>
    <Banner title={schedule.title}/>
    <TermFilter term={term} setTerm={setTerm}/>
    <CourseList courses={schedule.courses} term={term}/>
  </>);
};

export default App;
