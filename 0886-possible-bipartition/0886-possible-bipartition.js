/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  if(n===1) return true;
    let dislikeMap = {};
    let grouped={};
    const DFS = (person,group)=> {
        if(grouped[person])return grouped[person]===group;
        grouped[person] = group;
        if(dislikeMap[person]) {
        for(let dislike of dislikeMap[person]) {
            if(!DFS(dislike,(group^1)))return false
        }
        }
            return true;

    }
        for(const [i,j] of dislikes) {
            dislikeMap[i] ? dislikeMap[i].push(j) : dislikeMap[i] = [j];
            dislikeMap[j] ? dislikeMap[j].push(i) : dislikeMap[j] = [i];
        }
        console.log(dislikeMap)
        for(let person =1;person<=n;person++) {
            if(!grouped[person]&& !DFS(person,0)) return false
        }

        return true;
    
};