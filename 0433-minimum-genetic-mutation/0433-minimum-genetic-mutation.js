/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
   let banks = new Set(bank);
    if(!banks.has(end))return -1;
    const dict = ['A', 'C', 'T', 'G'];
    let queue = [[start,0]]
    while(queue.length ) {
    const [gene,count] = queue.shift();
     
        if(gene === end) return count
        for(let i=0;i<start.length;i++) {
        for(const char of dict) {
            if(gene[i]===char) continue;
            let potentialRep = gene.slice(0,i)+char+gene.slice(i+1);
            if(banks.has(potentialRep)){
                queue.push([potentialRep,count+1])
                banks.delete(potentialRep)
            }
        } 
        }
    
}
    return -1
};