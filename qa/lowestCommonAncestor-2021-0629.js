/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// const lowestCommonAncestor =  (root, p, q) =>{
// 	let ans;
// 	const dfs = (root, p, q) => {
// 		if (root === null) return false;
// 		const lson = dfs(root.left, p, q);
// 		const rson = dfs(root.right, p, q);
// 		if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
// 			ans = root;
// 		}
// 		return lson || rson || (root.val === p.val || root.val === q.val);
// 	}
// 	dfs(root, p, q);
// 	return ans;
// };

const lowestCommonAncestor = (root, p, q) => {
	if (root == null) { // 遇到null，返回null 没有LCA
		return null;
	}
	if (root === q || root === p) { // 遇到p或q，直接返回当前节点
		return root;
	}
	// 非null 非q 非p，则递归左右子树
	const left = lowestCommonAncestor(root.left, p, q);
	const right = lowestCommonAncestor(root.right, p, q);
	// 根据递归的结果，决定谁是LCA
	if (left && right) {
		return root;
	}
	if (left == null) {
		return right;
	}
	return left;
};
