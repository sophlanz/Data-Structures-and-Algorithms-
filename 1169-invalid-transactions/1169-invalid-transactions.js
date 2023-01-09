/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const invalid = Array.from(transactions.length).fill(false);
    for(let i=0;i<transactions.length;i++) {
        const [name,time,price,city] = transactions[i].split(',');
        if(price > 1000) invalid[i] = true;
        for(let j=i+1;j<transactions.length;j++) {
            const [name2, time2, price2, city2] = transactions[j].split(',');
            if(Math.abs(time-time2)<=60 && name === name2 && city !== city2) {
                invalid[i] = true;
                invalid[j] = true;
            }
        }
    }
    return invalid.reduce((acc,val,idx)=> {
        if(val) {
            acc.push(transactions[idx])
        }
        return acc;
    },[])
};