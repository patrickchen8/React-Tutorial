
function TermFilter(props) {
    return (
        <div className="mb-4">

            <input type="radio" 
                name="term" 
                id="Fall" 
                checked={props.term === "Fall"} 
                value="Fall"
                onChange={(e) => props.setTerm("Fall")}
                className="mr-1"/>
            <label htmlFor="Fall" className="mr-2">Fall</label>

            <input type="radio" 
                name="term" 
                id="Winter" 
                checked={props.term === "Winter"} 
                value="Winter"
                onChange={(e) => props.setTerm("Winter")}
                className="mr-1"/>
            <label htmlFor="Winter" className="mr-2">Winter</label>

            <input type="radio" 
                name="term" 
                id="Spring" 
                checked={props.term === "Spring"} 
                value="Spring"
                onChange={(e) => props.setTerm("Spring")}
                className="mr-1"/>
            <label htmlFor="Spring" className="mr-2">Spring</label>

        </div>
    )
}


export default TermFilter;