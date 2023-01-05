/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
    let preferenceMap = {};
    for(let [i,j] of pairs) {
        preferenceMap[i] = preferences[i].indexOf(j);
        preferenceMap[j] = preferences[j].indexOf(i);
    }
    let unhappy=0;
    for(let person=0;person<n;person++) {
        for(let rank=0;rank<preferenceMap[person];rank++) {
            const partner = preferences[person][rank];
            if(preferences[partner].indexOf(person)<preferenceMap[partner]) {
                unhappy++
                break;
            }
        }
    }
    return unhappy
};