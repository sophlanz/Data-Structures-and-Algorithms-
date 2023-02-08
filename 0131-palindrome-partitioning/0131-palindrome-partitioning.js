/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
   
  let res=[];
    const isPalindrome = (str)=> {
        let l=0;
       let r=str.length-1;
        while(l<r){
            if(str[l]===str[r]){
                l++
                r--
            }else return false;
        }
        return true;
        
    }
const DFS = (arr,str)=> {
    if(!str.length)res.push(arr);
    for(let i=1;i<=str.length;i++){
        let subStr = str.slice(0,i);
        if(isPalindrome(subStr)){
            DFS([...arr,subStr],str.slice(i));
        }
    }
}
    DFS([],s);
    return res;
};