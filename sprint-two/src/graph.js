

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
	this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
	this.nodes[node] = Node(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
	if (this.nodes[node]) {
		return true;
	}
	return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
	delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
	return this.nodes[fromNode].edges[toNode] && this.nodes[toNode].edges[fromNode] ? true : false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
	this.nodes[fromNode].edges[toNode] = toNode
	this.nodes[toNode].edges[fromNode] = fromNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
	delete this.nodes[fromNode].edges[toNode];
	delete this.nodes[toNode].edges[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, function(node) {
		cb(node.value);
	})
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.edges = {};
 
  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */



