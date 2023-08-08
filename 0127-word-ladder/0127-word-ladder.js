/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const adjList = new Map();
    if(!wordList.includes(endWord)){
        return 0;
    }
    for(const word of wordList){
        for(let i=0;i<word.length;i++){
            let mutatedWord=word.split('');
            mutatedWord[i]='*'
            let matchList = adjList.get(mutatedWord.join('')) || [];
            matchList.push(word);
            adjList.set(mutatedWord.join(''),matchList)
        } 
    }
    let queue=[beginWord]
    let seen=new Set();
    seen.add(beginWord);
    let count=1;
    while(queue.length){
        console.log(queue)
         let levelSize = queue.length;
        for(let i=0;i<levelSize;i++){
            let word = queue.shift();
            for(let j=0;j<word.length;j++){
                let mutatedWord = word.split('');
                mutatedWord[j]='*';
                if(adjList.get(mutatedWord.join(''))){
                    for(const wordToCheck of adjList.get(mutatedWord.join(''))){
                        if(wordToCheck === endWord){
                            return count+1
                        }
                        if(!seen.has(wordToCheck)){
                            seen.add(wordToCheck);
                            queue.push(wordToCheck)
                        }
                    }
                }
            }
        }
        count++
            
      
    }
    return 0
};