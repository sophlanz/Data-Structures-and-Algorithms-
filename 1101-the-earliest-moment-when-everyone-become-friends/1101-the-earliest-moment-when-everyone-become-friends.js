/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
logs.sort((a,b) => a[0] - b[0]);

    const ids = [], size = [];
    for(let i = 0; i < n; i++) { ids.push(i); size.push(1); }
    console.log(ids)
    console.log(size)
    const union = (root1, root2) => {
        if (size[root2] > size[root1]) union(root2, root1);
        ids[root2] = root1;
        size[root1] += size[root2];
    }
    
    const find = (id) => {
        while (ids[id] != id) {
            ids[id] = ids[ids[id]];
            id = ids[id];
        }
        return id;
    }
    
    for(let log of logs) {
        //a
        const root1 = find(log[1]);
        //b
        const root2 = find(log[2]);
        if (root1 != root2) {
            union(root1, root2);
            if (--n == 1)
                return log[0];
        }
    }
    return -1;
};