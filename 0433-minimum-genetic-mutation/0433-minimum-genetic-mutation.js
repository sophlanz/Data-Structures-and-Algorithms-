/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
     let banks = new Set(bank);
    if( !banks.has(end) ) return -1;
    let chars = ['A', 'T', 'C', 'G'];        
    let queue = [[start,0]];
 
    
    
    while(queue.length > 0) {
       const [gene,idx] = queue.shift();
        if( gene == end ) return idx;
        for(let i=0; i<8; i++ ) {
            for(let j=0; j<4; j++ ) {
                if( gene[i] == chars[j] ) continue;
                let node = gene.slice(0,i) + chars[j] + gene.slice(i+1);
                if( banks.has(node) ) {
                    queue.push([node,idx+1]);
                    banks.delete(node);
                    
                }
            }
        }
    }
    
    return -1; 
};