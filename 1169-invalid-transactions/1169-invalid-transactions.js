/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const invalid = Array(transactions.length).fill(false);
    for(let i=0;i<transactions.length;i++){
        const [name, time, price, city] = transactions[i].split(',');
        if(price > 1000) invalid[i] = true;
        for(let j=1;j<transactions.length;j++) {
            const [name2,time2,price2,city2] = transactions[j].split(',')
            if(name === name2 && city !== city2 && Math.abs(time2-time)<=60) {
                invalid[i] = true;
                invalid[j]=true;
            }
        }
    }
    
    let res=[];
    let idx=0
    for(const val of invalid) {
        if (val === true) res.push(transactions[idx]);
        idx++
    }
    return res
};