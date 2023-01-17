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
    const getHostName = (url) => url.split('/')[2];
    const hostName = getHostName(startUrl);
    let queue = [startUrl];
    let seen = new Set([startUrl]);
    while(queue.length) {
        const currUrl = queue.shift();
        for(const url of htmlParser.getUrls(currUrl)) {
            if(!seen.has(url) && url.includes(hostName)) {
                seen.add(url);
                queue.push(url);
            }
        }
    }
    return [...seen.values()];
};