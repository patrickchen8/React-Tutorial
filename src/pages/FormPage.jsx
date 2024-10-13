import { Link, useParams } from 'react-router-dom';


function FormPage() {
    
    const {courseId} = useParams();
    

    return (
    <form className="flex flex-col space-y-8 w-3/4 mx-auto">
        <h2 className="text-lg text-purple-400 font-bold self-center"> 
            {`Edit Course ${courseId} Infromation`} 
        </h2>
        
        
        <input type="text" 
               placeholder="course title"
               className="placeholder-black border-2 border-purple-600 rounded-md p-2"/>

        <input type="text" 
               placeholder="meeting time" 
               className="placeholder-black border-2 border-purple-600 rounded-md p-2"/> 


        <div className="flex justify-around">
            <Link to="/">
                <button className="text-white bg-red-400 border-2 border-red-500 rounded-md p-2 hover:border-red-700">
                    Cancel
                </button>
            </Link>
            
            <button className="text-white bg-green-400 border-2 border-green-500 rounded-md p-2 hover:border-green-700"
                    type="submit">
                Submit
            </button>
        </div>


    </form>);
}

export default FormPage; 