/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let res=[];
  
    let adjList = new Map();
    for(const word of words){
      for(const letter of word){
          if(!adjList.get(letter)){
              adjList.set(letter, new Set([]))
          }
      }
    }
    for(let i=0;i<words.length-1;i++){
          if(words[i].startsWith(words[i+1]) && words[i].length !== words[i+1].length){
              return '';
          }
        for(let j=0;j<words[i].length;j++){
            if( words[i].charAt(j) !== words[i+1].charAt(j)){
                let parents=adjList.get(words[i+1][j]);
                parents.add(words[i][j]);
                break
            }
        }
    }
    let fullyExplored = new Map();
      const topSort = (child)=>{
            if(fullyExplored.has(child)){
                return fullyExplored.get(child)
            };
          fullyExplored.set(child,false);
          for(const parent of adjList.get(child)){
               if(!topSort(parent))return false;
          }
          fullyExplored.set(child,true);
          res.push(child);
          return true;

    }
    for(const letter of adjList.keys()){

        if(!topSort(letter)){
            return ''
        }
    }
    return res.join('')
};