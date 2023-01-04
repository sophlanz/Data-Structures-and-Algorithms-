/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
    let parentMap = {};
    for(let i=0;i<pid.length;i++) {
        const child = pid[i];
        const parent = ppid[i];
        parentMap[parent] = parentMap[parent] || [];
        parentMap[parent].push(child);
    }
    
    let result = [];
   
    const DFStoKill = (killNode)  => {
        result.push(killNode);
        if(parentMap[killNode]) {
            for(const child of parentMap[killNode]) {
                DFStoKill(child);
            }
        }
    }
     DFStoKill(kill)
    return result
};