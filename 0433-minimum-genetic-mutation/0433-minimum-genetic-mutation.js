/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const dict = ["A", "C", "G", "T"];
    let banks = new Set(bank);
    let queue = [[startGene,0]];
    while(queue.length){
        const [gene,count] = queue.shift();
        if(gene === endGene) return count;
        for(let i=0;i<gene.length;i++){
            for(const char of dict){
                if (char == gene[i])continue;
                let possible = gene.slice(0,i) + char + gene.slice(i+1);
                if(banks.has(possible)){
                    queue.push([possible,count+1]);
                    banks.delete(possible);
                }
            }
        }
    }
    
    return -1;
};