/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
    let happyMap = {};
    for(const [i,j]of pairs){
        happyMap[i] = preferences[i].indexOf(j);
        happyMap[j]=preferences[j].indexOf(i);
    }
    let unhappy=0;
  for(let person=0;person<preferences.length;person++) {
      for(let i=0;i<happyMap[person];i++){
          const partner = preferences[person][i];
          if(happyMap[partner] > preferences[partner].indexOf(person)){
              unhappy++
              break;
          }
      }
  }
    return unhappy
};