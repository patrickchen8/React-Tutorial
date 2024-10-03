
function TermFilter(props) {
    return (
        <div className="text-center">

            <input type="radio" 
                name="term" 
                id="Fall" 
                checked={props.term === "Fall"} 
                value="Fall"
                onChange={(e) => props.setTerm("Fall")}/>
            <label htmlFor="Fall">Fall</label>

            <input type="radio" 
                name="term" 
                id="Winter" 
                checked={props.term === "Winter"} 
                value="Winter"
                onChange={(e) => props.setTerm("Winter")}/>
            <label htmlFor="Winter">Winter</label>

            <input type="radio" 
                name="term" 
                id="Spring" 
                checked={props.term === "Spring"} 
                value="Spring"
                onChange={(e) => props.setTerm("Spring")}/>
            <label htmlFor="Spring">Spring</label>

        </div>
    )
}


export default TermFilter;