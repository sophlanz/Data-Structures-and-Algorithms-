/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
       const adj = new Map();
    for (const word of words) {
        for (const letter of word) {
            if(!adj.get(letter)){
                   adj.set(letter, new Set());
            }
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        if (words[i].startsWith(words[i + 1]) && words[i].length !== words[i + 1].length) {
            return "";
        }
        for (let j = 0; j < words[i].length; j++) {
            if (words[i].charAt(j) !== words[i + 1].charAt(j)) {
                //map its parent
                const parents = adj.get(words[i + 1].charAt(j));
                parents.add(words[i].charAt(j));
                break;
            }
        }
    }
    const processed = new Map();
    const res = [];
    for (const child of adj.keys()) {
        if (!topSort(child, adj, processed, res)) {
            return "";
        }
    }
    return res.join("");
}

function topSort(currentNode, adj, fullyExplored, res) {
    console.log({res})
    console.log({currentNode})
    if (fullyExplored.has(currentNode)) {
        return fullyExplored.get(currentNode);
    }
    fullyExplored.set(currentNode, false);
    for (const child of adj.get(currentNode)) {
        if (!topSort(child, adj, fullyExplored, res)) {
            return false;
        }
    }

    fullyExplored.set(currentNode, true);
    res.push(currentNode);
    return true;
 
};