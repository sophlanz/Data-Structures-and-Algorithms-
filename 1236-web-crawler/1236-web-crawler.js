/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
*/
var crawl = function(startUrl, htmlParser) {
    const getUrl = (url)=> url.split('/')[2];
    const baseUrl = getUrl(startUrl);
    let queue = [startUrl];
    let seen = new Set([startUrl]);
    while(queue.length) {
        let curr = queue.shift();
       for(const url of htmlParser.getUrls(curr) ){
           if(!seen.has(url) && url.includes(baseUrl)) {
               seen.add(url);
               queue.push(url);
           }
       }
        }
      
        
    
    return [...seen]
};