/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    let dict = ["A","G", "C", "T"];
    let banks = new Set(bank);
    let queue = [[startGene,0]];
    if(!banks.has(endGene)) return -1;
    while(queue.length) {
        const[gene, count] = queue.shift();
        if(gene === endGene) return count;
        for(let i=0;i<startGene.length;i++) {
            for(const char of dict) {
                if(char === gene) continue;
                let possible = gene.slice(0,i) + char+ gene.slice(i+1);
                if(banks.has(possible)){
                    queue.push([possible,count+1])
                    banks.delete(possible);
                }
            }
        }
    }
    return -1
};