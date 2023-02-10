/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
   let invalid = new Array(transactions.length).fill(false);
    for(let i=0;i<transactions.length;i++) {
        const [name,time,price,city] = transactions[i].split(',');
        if(price >1000) invalid[i]=true;
        for(let j=i+1;j<transactions.length;j++) {
            const [name2,time2,price2,city2] = transactions[j].split(',');
            if(city !== city2 && Math.abs(time2-time) <=60 && name===name2) {
                invalid[j] = true;
                invalid[i] = true;
            }
        }
    }
    let res=[];
    let idx=0
    for(let invalidTransaction of invalid) {
        if(invalidTransaction) res.push(transactions[idx])
        idx++
    }
    return res;
};