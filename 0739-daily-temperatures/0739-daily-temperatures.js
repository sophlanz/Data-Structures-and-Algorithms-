/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let minHeap = new MinPriorityQueue();
    let res=new Array(temperatures.length).fill(0);
    for(let i=0;i<temperatures.length;i++){
          let temp1=temperatures[i];
        let temp2=temperatures[i+1] || 0;
        if(temp2 >temp1) {
            res[i]=1
        }else{
                minHeap.enqueue(i,temp1);
        }
            while( minHeap.size() && temp1 > minHeap.front().priority){
                let index = minHeap.dequeue().element;
                res[index]= i-index;
            }  
    };
return res;
};