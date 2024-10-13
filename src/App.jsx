import Banner from './components/Banner.jsx'
import MainPage from './pages/MainPage.jsx'
import FormPage from './pages/FormPage.jsx'
import {useJsonQuery} from './utilities/fetch.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage courses={schedule.courses}/>} />
        <Route path="/edit/:courseId" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
    
  </>);
};

export default App;
