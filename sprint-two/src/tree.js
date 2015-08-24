var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  
  newTree.parent;
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {

	addChild: function(value) {
		var tree = Tree(value);
		this.children.push(tree);
		tree.parent = this;
	},

	contains: function(target) {
		var found;
		function searcher(node) {
			if (node.value === target) {
				found = true;
			} else {
				_.each(node.children, function(node) {
					searcher(node)
				})
			}
		}
		searcher(this);
		return !!found;
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
