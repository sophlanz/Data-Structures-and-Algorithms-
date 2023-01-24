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
    const getHostName = (url)=> url.split('/')[2];
    const hostName = getHostName(startUrl);
    let seen = new Set([startUrl]);
    const DFS = (currUrl)=> {
        for(const url of htmlParser.getUrls(currUrl)) {
            if(url.includes(hostName) && !seen.has(url)) {
                 seen.add(url);
            DFS(url);
            }
           
        }
    }
    DFS(startUrl)
    return [...seen]
};