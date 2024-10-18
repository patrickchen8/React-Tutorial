import { useNavigate, useParams } from 'react-router-dom';
import { useFormData } from '../utilities/useFormData.js';
import { useDbUpdate } from '../utilities/firebase.js';
import InputField from '../components/InputField.jsx';


function FormPage({data}) {
    
    const validateFormData = (key, value) => {
        switch (key) {
            case 'title':
                return value.length === 1 ? 'Course title must be atleast 2 characters' : 
                    '';
            case 'meets':
                return /^[MTWRFSU]{1,7} \d{2}:\d{2}-\d{2}:\d{2}$/.test(value) || value.length === 0? '' : 
                    'must contain days and start-end, e.g., MWF 12:00-13:20';
            default:
                return '';
        }
    }

    const navigate =  useNavigate();
    const {courseId} = useParams();

    const [state, change] = useFormData(validateFormData, data); 
    const [update, result] = useDbUpdate(`/courses/${courseId}`);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!state.errors) {
            update(state.values);
            navigate(-1);
        }
    }

    return (
    <form className="flex flex-col space-y-8 w-3/4 mx-auto"
          onSubmit={handleSubmit}>
        <h2 className="text-lg text-purple-400 font-bold self-center"> 
            {`Edit Course ${courseId} Infromation`} 
        </h2>
        
        <InputField name="title" text="Course Title" state={state} change={change} />
        <InputField name="meets" text="Meeting Time" state={state} change={change}/>
       
        <div className="flex justify-around">
            <button className="text-white bg-red-400 border-2 border-red-500 rounded-md p-2 hover:border-red-700"
                    type="button"
                    onClick={() => navigate(-1)}>
                Cancel
            </button>
          
            <button className="text-white bg-green-400 border-2 border-green-500 rounded-md p-2 hover:border-green-700"
                    type="submit">
                Submit
            </button>
        </div>


    </form>);
}

export default FormPage; 