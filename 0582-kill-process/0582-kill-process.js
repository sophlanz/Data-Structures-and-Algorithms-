/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
    let parentChildMap = {};
 for(let i=0; i<pid.length;i++) {
     const child = pid[i];
     const parent = ppid[i];
    if(!parentChildMap[parent]) parentChildMap[parent]=[];
     parentChildMap[parent].push(child);
 }
    let res = [];
   const DFStoKill = (node) => {
       res.push(node);
       if(parentChildMap[node]) {
           for(let child of parentChildMap[node] ) {
                DFStoKill(child);
           }
       }
   }
   DFStoKill(kill);
    return res;
};