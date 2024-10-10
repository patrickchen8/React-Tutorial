
export const catchConflict = (courses, selected) => {
    
    const newCanSelect = {};
    
    for (let i = 0; i < selected.length; i++) { 
        const [course1Id, course1Info]= selected[i];
        const [days1, time1] = course1Info.meets.split(' ');


        Object.keys(courses)
            .forEach((key) => {
                const course2Info = courses[key];
                const [days2, time2] = course2Info.meets.split(' ');


                if(key !== course1Id && 
                    course1Info.term === course2Info.term &&
                    dayOverlap(days1, days2) && 
                    timeOverlap(time1, time2)) {
                    newCanSelect[key] = false; 
                }
                else if(!(key in newCanSelect)){
                    newCanSelect[key] = true; 
                }
            })
    }

    return newCanSelect;

};


const dayOverlap = (days1, days2) => {
    const days = ['M', 'Tu', 'W', 'Th', 'Fr'];
    for(let i = 0; i < days.length; i++) {
        const day = days[i];
        if(days1.search(day) !== -1 && days2.search(day) !== -1) {
            return true;
        }
    }

    return false; 

}

const timeOverlap = (times1, times2) => {
    const [start1, end1] = times1.split('-');
    const [start2, end2] = times2.split('-'); 

    return covertToMinutes(start1) <= covertToMinutes(start2) && 
        covertToMinutes(start2) <= covertToMinutes(end1);
}


const covertToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}