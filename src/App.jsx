import Banner from './components/Banner.jsx'
import CourseList from './components/CourseList.jsx'
import {useJsonQuery} from './utilities/fetch.js'

const App = () => {
  const url = 'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php';
  const [data, isLoading, error] = useJsonQuery(url);


  if(error) {
    return (<h1 className="text-2xl font-bold text-red-600 text-center"> AN ERROR OCCURED!</h1>);
  }
  if(isLoading) {
    return (<></>);
  }
  if(!data) {
    return (<h1 className="text-2xl font-bold text-red-600 text-center"> NO DATA FOUND!</h1>)
  }
  const schedule = data;

  return (<>
    <Banner title={schedule.title}/>
    <div className= "md:block flex justify-center">
      <CourseList courses={schedule.courses}/>
    </div>
    
  </>);
};

export default App;
