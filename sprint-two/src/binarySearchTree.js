var BinarySearchTree = function(value){
	var tree = {}
	tree.value = value;
	tree.left = null;
	tree.right = null;


	tree.insert = function(value) {
		var tree = BinarySearchTree(value);
		function searcher(node){
      		if(value > node.value){
		        if(node.right === null){
		          node.right = tree;
		        } else {
		          return searcher(node.right);
		        }
		      } else { 
		          if(node.left === null){
		            node.left = tree;
		        } else {
		            return searcher(node.left);
		        }
		      }
    	}

    	searcher(this); 
	};

	tree.contains = function(target) {
		var found;
		function searcher(node) {
			if (node.value === target) {
				found = true;
			} else {
				if (node.left !== null) {
					searcher(node.left);
				}
				if (node.right !== null) {
					searcher(node.right);
				}
			}
		}
		searcher(this);
		return !!found;
	};

	tree.depthFirstLog = function(cb) {
		function searcher(node) {
			if (node === null) {
				return;
			} else {
				cb(node.value);
				searcher(node.left);
				searcher(node.right);
			}
		}
		searcher(this);
	};

	return tree;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
