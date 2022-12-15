/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let start=0,
        match=0
        patternMap={};
    //map out the pattern, s1
    for(let i=0;i<s1.length;i++) {
        patternMap[s1[i]]= patternMap[s1[i]]+1 || 1;
    }
    //loop through s2
    for(let end=0;end<s2.length;end++) {
        let rChar=s2[end]
        //check to see if it's in the map
        if(rChar in patternMap) {
            //decrement it, if it gets to 0 it's a match
            patternMap[rChar] --
            if(patternMap[rChar]===0) {
                match++
            }
        }
        
        
        if(Object.keys(patternMap).length === match) {
            return true
        }
        
        
        //check window size, if its greater than pattern length, shrink window
        if(end>=s1.length -1) {
            lChar=s2[start];
            start++
            //if start is in map, we need to increment it, to make up for having decremented it. If it's 0, we need to decrement the match, because it's no longer a match.
            if(lChar in patternMap) {
                if(patternMap[lChar]===0){
                    match--
                }
                patternMap[lChar]++  
            }
        }
        
        
    }
    return false
    
};