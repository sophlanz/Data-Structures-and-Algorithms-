/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
let l=0,r=10e7;
let min=Infinity
let totalHours
if(dist.length-1 >= hour )return -1
    while(l<r){
        let mid = Math.floor((l+r)/2);
         totalHours=0
        for(let i=0;i<dist.length;i++){
            if(i===dist.length-1){
                totalHours += (dist[i]/mid)
            }else{
                totalHours += Math.ceil(dist[i]/mid);
            }
        }
        if(totalHours === hour)return mid
        if(totalHours<hour){
            r=mid
        }else{
            l=mid+1
        }
    }
    return r
};
