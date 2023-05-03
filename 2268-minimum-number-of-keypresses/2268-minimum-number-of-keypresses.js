/**
 * @param {string} s
 * @return {number}
 */
var minimumKeypresses = function(s) {
    //19
    //first 9 distinct chars press once
    //next distinct 9 chars press twice, count +=2. if it's already in the map count += 1
    //next distinct 9 chars press 3 times count += 3. already in map, count +=1
let count=0;
    let freqMap={};
    for(let i=0;i<s.length;i++){
    freqMap[s[i]] ? freqMap[s[i]]++ : freqMap[s[i]]=1;
    }
      
    let sortedMap = Object.values(freqMap).sort((a,b)=> b-a);
    let idx=0
    console.log(sortedMap)
    for(const val of sortedMap){
        if(idx<9){
            count += val
        }else if (idx >17){
            count+= val*3
        }else{
            count+= val*2
        }
        idx++
    }
    return count;
};