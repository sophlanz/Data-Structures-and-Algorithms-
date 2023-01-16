/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    let invalid = Array.from(transactions.length).fill(false);
    for(let i=0;i<transactions.length;i++) {
        const [name,time,price,city] = transactions[i].split(',');
        if(price > 1000) invalid[i] = true;
        for(let j=i+1;j<transactions.length;j++) {
            const [name2,time2,price2,city2] = transactions[j].split(',');
            if(name === name2 && city !== city2 && Math.abs(time-time2) <= 60) {
                invalid[i] = true;
                invalid[j] = true;
            }
        }
                                                             
    }
 return invalid.reduce((acc,val,index)=> {
        if(val) acc.push(transactions[index])
     return acc;
    },[])
};