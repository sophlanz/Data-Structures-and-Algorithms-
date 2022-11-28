//Time Colmplexity - O(n^2)
//Space Complexity O(n)
function swap(arr, index1, index2) {
    //declare temp to hold first index before we change
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    }

function selectionSort(arr) {
    //start at left most index and iterate through, this will be our starting min index
    for(let i=0; i<arr.length;i++) {
        let minIndex = i;
        //interate through the right side of the array, compare array[minIndex] with array[j] to see which is smaller, reset the min index if array[j] is smaller.
        for(let j=i+1; j<arr.length;j++) {
            //check to see if min is still the smallest, if not, reset it
            if(arr[minIndex] > arr[j] ) {
                minIndex = j
              

            }
        }
        //once we've found the min, after iterating through  swap the first index of the unsorted side (outer loop i) with the newfly found minIndex
       /*  swap(arr,i,minIndex) */
     swap(arr,i,index) 
    }
    return arr
}

module.exports = {
    selectionSort,
    swap
};