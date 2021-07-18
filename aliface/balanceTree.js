const balanced = function (node) {
	if (!node) return 0
	const left = balanced(node.left)
	const right = balanced(node.right)
	if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
		return -1
	}
	return Math.max(left, right) + 1
};
const isBalanced = function (root) {
	return balanced(root) !== -1
};
