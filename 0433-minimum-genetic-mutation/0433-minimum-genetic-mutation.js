/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  let banks = new Set(bank);
    if(!banks.has(end)) return -1;
    let queue = [[start,0]];
    let dicts = ["A", "C",  "G", "T"];
    while(queue.length) {
        const [gene,count] = queue.shift();
        if(gene === end) return count;
        for(let i=0;i<gene.length;i++) {
            for(let j=0;j<4;j++) {
                if(gene[i] === dicts[j]) continue;
                let possibleGene = gene.slice(0,i)+ dicts[j] + gene.slice(i+1)
                if(banks.has(possibleGene)) {
                    queue.push([possibleGene, count+1]);
                    banks.delete(possibleGene);
                }
            }
        }
    }
    return -1;
};