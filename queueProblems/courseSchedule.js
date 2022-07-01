var scheduleCourse = function(courses) {
    courses.sort((a,b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
    
    let totalDuration = 0;
    
    let pq = [].sort((a,b) => b - a);
    
    for(let [duration,lastDay] of courses){
        if(duration <= lastDay){
            if(duration+totalDuration <= lastDay){
                totalDuration += duration;
                pq.push(duration);
            }else{
                
                if(pq[0] > duration){
                    totalDuration -= pq.shift();
                    totalDuration += duration;
                    pq.unshift(duration);
                }
            }
        }
    }
    
    return pq.length;
};

let courses = [[10,12],[6,15],[1,12],[3,20],[10,19]];
console.log(scheduleCourse(courses));
