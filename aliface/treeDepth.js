var maxDepth = function (root) {
	// if (!root) {
	// 	return 0;
	// }
	// return loop(root);
	//
	// function loop(node, depth = 1) {
	// 	if (!node) {
	// 		return depth - 1;
	// 	}
	// 	if (!node.left && !node.right) {
	// 		return depth;
	// 	}
	// 	const leftDepth = loop(node.left, depth + 1);
	// 	const rightDepth = loop(node.right, depth + 1);
	// 	return Math.max(leftDepth, rightDepth);
	// }
	// 2. 模拟函数调用栈 stack 携带上层深度
	if (!root) return 0

	let max = 0
	const stack = [[root, 0]]

	while (stack.length) {
		const [node, p] = stack.pop()

		max = Math.max(max, p + 1)

		node.left && stack.push([node.left, p + 1])
		node.right && stack.push([node.right, p + 1])
	}

	return max
};
