/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
 const parentMap = {};
    for(let i=0;i<pid.length;i++) {
        const parent = ppid[i];
        const child = pid[i];
        parentMap[parent] = parentMap[parent] || [];
        parentMap[parent].push(child);
    };
    let result = [];
    DFStoKill(kill);
    
     function DFStoKill (killNode) {
        result.push(killNode);
        if(parentMap[killNode]) {
            for(const child of parentMap[killNode]) {
                DFStoKill(child)
            }
        }
    } 
    return result
};