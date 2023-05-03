/**
 * @param {string} s
 * @return {number}
 */
var minimumKeypresses = function(s) {
 //we make a freqMap, so we can leverage mapping the 9 most frequest integers first;
let count=0;
    let freqMap={};
    for(let i=0;i<s.length;i++){
    freqMap[s[i]] ? freqMap[s[i]]++ : freqMap[s[i]]=1;
    }
      
    let sortedMap = Object.values(freqMap).sort((a,b)=> b-a);
    let idx=0
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