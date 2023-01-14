/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
    let parentChildMap = {};
    for(let i=0;i<pid.length;i++) {
        const parent = ppid[i];
        const child = pid[i];
        if(!parentChildMap[parent]) {
            parentChildMap[parent] = [child];
        }else {
            parentChildMap[parent].push(child);
        }
    }
    let result = [];
    const DFStoKill = (node) => {
        result.push(node);
        if(parentChildMap[node]) {
            for(const child of parentChildMap[node]) {
                DFStoKill(child);
            }
        }
    }
    DFStoKill(kill);
    return result;
};