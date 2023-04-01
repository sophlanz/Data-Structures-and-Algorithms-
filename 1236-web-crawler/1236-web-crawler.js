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
    const getUrl = (url) => url.split('/')[2]; 
    let base = getUrl(startUrl)
    let seen = new Set([startUrl]);
 
    const DFS = (start)=> {
        for(const url of htmlParser.getUrls(start) ) {
            if(!seen.has(url) && url.includes(base)){
                seen.add(url);
                DFS(url);
            }
        }
    }
    DFS(startUrl);
    return [...seen]
    
};