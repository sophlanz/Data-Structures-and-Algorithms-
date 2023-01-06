/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
   let happyMap = {};
    for(let [i,j] of pairs) {
        happyMap[i] = preferences[i].indexOf(j);
        happyMap[j] = preferences[j].indexOf(i);
    }
    let unhappy = 0;
    for(let person=0;person<n;person++) {
        for(let rank=0;rank<happyMap[person];rank++) {
            const partner = preferences[person][rank];
            if(preferences[partner].indexOf(person)< happyMap[partner]) {
                unhappy++
                break
            }
        }
    }
    return unhappy
};