/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res=[]
    const isPalindrome = (str) => {
        let left=0,right=str.length-1;
        while(left<right) {
            if(str[left]!==str[right])return false
            else {
                left++
                right--
            }
        }
        return true;
    }
    const DFS = (arr,str) => {
        if(!str)res.push(arr);
        for(let i=1;i<=str.length;i++) {
            let subString = str.slice(0,i);
            if(isPalindrome(subString)) {
                DFS([...arr,subString],str.slice(i))
            }
        }
    }
    DFS([],s);
    return res
};