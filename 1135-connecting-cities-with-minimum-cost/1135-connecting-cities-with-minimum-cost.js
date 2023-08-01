/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
	const parent = new Array(n + 1).fill(0).map((el, i) => i);
	const find = (t) => (t === parent[t] ? t : (parent[t] = find(parent[t])));
	connections.sort((x, y) => x[2] - y[2]);
	let cost = 0;
	let edges = 1;
	for (const [from, to, dist] of connections) {
		if (find(from) !== find(to)) {
			parent[find(from)] = find(to);
			cost += dist;
			edges++;
		}
	}
	if (edges !== n) return -1;
	return cost;
};
