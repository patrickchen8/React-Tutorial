import Banner from './components/Banner.jsx'
import MainPage from './pages/MainPage.jsx'
import FormPage from './pages/FormPage.jsx'
import { useDbData, useAuthState } from './utilities/firebase.js'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
  const [user] = useAuthState();
  const [data, error] = useDbData('/');

  if (error) return <h1 className="text-red-500 text-2xl text-center">Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1 className="text-purple-400 text-2xl text-center">Loading data...</h1>;
  if (!data) return <h1 className="text-red-500 text-2xl text-center">No data found</h1>;


  return (<>
    <Banner user={user} title={data.title}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage user={user} courses={data.courses}/>} />
        <Route path="/edit/:courseId" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
    
  </>);
};

export default App;
