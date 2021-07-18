class TreeDepth {
	constructor(val, left, right) {
		this.val = val;
		this.left = left
		this.right = right
	}

	maxDeptth = (root: TreeDepth) => {
		if (!root) return 0
		return 1 + Math.max(maxDeptth(root.left), maxDeptth(root.right))

	}
	traceTree = (root: TreeDepth) => {
		// 前序遍历，调换console.log位置即可三种遍历
		// console.log(root && root.val)
		// traceTree(root.left)
		// traceTree(root.right)

		// 遍历
		if (!root) return false
		let result = []
		let tree = []
		tree.push(root)// 传入头节点
		while (tree.length) {
			const node = tree.shift();
			result.push(node.val)
			if (node.left) {
				tree.push(node.left)
			}
			if (node.right) {
				tree.push(node.right)
			}
		}
		return result
	}
}
