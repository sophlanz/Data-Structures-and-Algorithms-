/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
const adjList = new Map();
    for(const word of wordList){
        for(let i=0;i<word.length;i++){
             let mutatedWord = word.split('');
            mutatedWord[i]="*";
            if(!adjList.has(mutatedWord.join(''))){
                adjList.set(mutatedWord.join(''),[word]);
            }else{
                let oldList = adjList.get(mutatedWord.join(''));
                oldList.push(word);
                adjList.set(mutatedWord.join(''),oldList)
            }
        } 
    }
    console.log(adjList)
    let queue=[beginWord];
    let count=1;
    let seen=new Set([beginWord]);
    while(queue.length){
        let levelSize = queue.length;
        for(let i=0;i<levelSize;i++){
            let word = queue.shift();
            for(let j=0;j<word.length;j++){
                let mutatedWord=word.split('');
                mutatedWord[j]='*';
                if(adjList.get(mutatedWord.join(''))){
                      for(const child of adjList.get(mutatedWord.join(''))){
                    if(child === endWord)return count+1
                    if(!seen.has(child)){
                        queue.push(child);
                        seen.add(child);
                    }
                }
                }
              
            }
        }
        count++
    }
    return 0
};