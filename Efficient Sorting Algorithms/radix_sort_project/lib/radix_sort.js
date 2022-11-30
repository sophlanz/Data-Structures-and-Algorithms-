function radixSort(arr) {
    //check that it's an array
    if(!Array.isArray(arr)) {
        return null;
    }
    //filter out the negatives
    var negatives = arr.filter(item => item<0);
    var negativesSorted = [];
    //if there's negatives
    if(negatives.length > 0) {
        negativesSorted = radixSort(negatives.map(item => 
            //get positive number
            Math.abs(item)))
            .reverse()
            //convert back to negative
            .map(item => -item)
    }
    //filter out the positives
    var positives = arr.filter(item => item >= 0);
    //get number of digits from integer with most digits
    let maxDigits = getMaxDigits(positives)
    //loop through max digits, and create buckets to fill the digits in later
    for(let k=0; k<maxDigits ; k++) {
        let buckets = Array.from({length:10}, () => []);
      //loop through the integers
        for(let i=0; i<positives.length;i++) {
            //get the digit from the correct place value
            let digit = getDigitFrom(positives[i],k)
            //push the integer to it's corresponding bucket
            buckets[digit].push(positives[i])
        }
        positives = [].concat(...buckets)
    }
    return negativesSorted.concat(positives)
    
}

module.exports = {
    radixSort
};
//get digit at given place value
const getDigitFrom = (num,place) => {
   return Math.floor(Math.abs(num) / Math.pow(10,place))%10;;
};
//get number of digits in the number
const getIntLength = (num) => {
   return (num===0) ? 1 : Math.floor(Math.log10(Math.abs(num))+1)
};
//get number of digits of integer with the most digits
const getMaxDigits = (nums) => {
    let maxDigits = 0;
    for(let i=0; i<nums.length;i++) {
        maxDigits = Math.max(maxDigits,getIntLength(nums[i]))
      /*   console.log('maxDigits', maxDigits); */
    }
    return maxDigits;

};
//Time complexity O(n)*k
//Space complexity O(n+k)