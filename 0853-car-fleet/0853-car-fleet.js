/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
const positionAndSpeed =[];
    for(let i=0;i<position.length;i++){
        positionAndSpeed[i]= {position: position[i], speed:speed[i]};
    }
    positionAndSpeed.sort((a,b)=> b.position - a.position);
    let fleets=1;
    for(let i=0;i<position.length-1;i++){
        let firstTimeToEnd=(target-positionAndSpeed[i].position) / positionAndSpeed[i].speed;
        let secondTimeToEnd=(target-positionAndSpeed[i+1].position) / positionAndSpeed[i+1].speed;
        if(firstTimeToEnd<secondTimeToEnd){
            fleets++
        }else{
            positionAndSpeed[i+1].position =  positionAndSpeed[i].position
             positionAndSpeed[i+1].speed =  positionAndSpeed[i].speed
        }
    }
    return fleets
};