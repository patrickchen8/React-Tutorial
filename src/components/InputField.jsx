
function InputField(props) {
    

    return (
        <div className="flex flex-col">
            <label htmlFor={props.name}>{props.text}</label>

            <input type="text" 
                   id={props.name}
                   name={props.name}
                   placeholder={props.text}
                   onChange={props.change}
                   className="placeholder-black border-2 border-purple-600 focus:border-2 focus:border-purple-400 outline-none rounded-md p-2"
                   required/>

            <p className="text-red-500 text-lg h-4"> {props.state?.errors?.[props.name]} </p>

        </div>
    );

}


export default InputField; 