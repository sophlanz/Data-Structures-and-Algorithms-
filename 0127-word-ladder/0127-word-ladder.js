/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const adjList = new Map();
    if (!wordList.includes(endWord)) {
        return 0;
    }
    for (const word of wordList) {
        const wordChars = word.split('');
        for (let i = 0; i < wordChars.length; i++) {
            const savedChar = wordChars[i];
            wordChars[i] = '*';
            const listOfWords = adjList.get(wordChars.join('')) || [];
            listOfWords.push(word);
            adjList.set(wordChars.join(''), listOfWords);
            wordChars[i] = savedChar;
        }
    }
    const set = new Set();
    const queue = [];
    queue.push(beginWord);
    set.add(beginWord);

    let count = 1;
    while (queue.length > 0) {
        let levelSize = queue.length;
        for(let j=0;j<levelSize;j++) {
            const word = queue.shift();
            const wordChars = word.split('');
            for (let i = 0; i < wordChars.length; i++) {
                const savedChar = wordChars[i];
                wordChars[i] = '*';
                const words = adjList.get(wordChars.join('')) || [];
                for (const wordToAdd of words) {
                    if (wordToAdd === endWord) {
                        return count+1
                    }
                    if (!set.has(wordToAdd)) {
                        queue.push(wordToAdd);
                        set.add(wordToAdd);
                    }
                }
                wordChars[i] = savedChar;
            }
        }
       count++
    }
    return 0;

};