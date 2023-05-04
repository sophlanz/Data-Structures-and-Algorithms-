/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
 let freqMap={};
    for(let i=0;i<tasks.length;i++){
        freqMap[tasks[i]] ? freqMap[tasks[i]]++:freqMap[tasks[i]]=1;
    }
    let count=0;
    for(const val in freqMap){
        if(freqMap[val]===1)return -1;
        let freqVal = freqMap[val];
        while(freqVal >0){
            freqVal -= 3;
            count ++
        }
    }
    return count;
};