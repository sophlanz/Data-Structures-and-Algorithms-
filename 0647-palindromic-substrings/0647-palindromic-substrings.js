/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count=0
    const isPalindrome = (string)=>{
        let l=0,r=string.length-1;
        while(l<r){
            if(string[l]==string[r]){
                l++
                r--
            }else{
                return false
            }
        }
        return true;
    }
    const DFS = (index)=>{
        if(index>s.length){
            return;
        }
        for(let i=index;i<s.length;i++) {
            let newString = s.slice(index,i+1);
            if(isPalindrome(newString)){
                count++
            }
        }
          DFS(index+1)
    }
    DFS(0)
    return count

};