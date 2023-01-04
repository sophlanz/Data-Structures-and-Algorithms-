/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
	// Create Graph: Parent-Map
    const parentMap = {};
    for(let idx = 0; idx < pid.length; idx++){
       const parent = ppid[idx];
       const child = pid[idx];
       if(!parentMap[parent]) parentMap[parent] = [];
       parentMap[parent].push(child);
    }
    // Inititate traversal
    const output = [];
    dfsToKill(kill);
    // populate output list with killed nodes
    function dfsToKill(node){
        output.push(node);
        if(parentMap[node]){
            for(let child of parentMap[node])
                dfsToKill(child);
        }
    }
    return output;
};