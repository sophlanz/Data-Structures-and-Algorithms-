/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    let banks = new Set(bank);
    if(!banks.has(endGene)) return -1;
    let queue = [[startGene,0]];
    const dict = ["A", "C", "G", "T"]
    while(queue.length) {
        const [gene,count] = queue.shift();
        if(gene === endGene) return count;
        console.log(gene)
        for(let i=0;i<startGene.length;i++) {
            for(const char of dict) {
                if(char===gene[i]) continue;
                let possibleRep = gene.slice(0,i) + char + gene.slice(i+1);
                if(banks.has(possibleRep)){
                    queue.push([possibleRep,count+1]);
                    banks.delete(possibleRep);
                }
            }
        }
    }
    return -1
};