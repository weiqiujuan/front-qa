function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

const linkReverse = (head) => {
	let prev = null;
	let curr = head;
	while (curr) {
		let newCurr = curr.next;
		curr.next = prev;
		prev = curr;
		curr = newCurr
	}
	return prev
}

const dfsLink = (head) => {
	if (head === null || head.next === null) return head
	// const newHead  = dfsLink(head.next);
	// head.next.next = head;
	// head.next = null
	// return newHead

	const reverseLink = (curr, pre) => {
		if (!curr) return pre;
		let nextLink = curr.next;
		curr.next = pre; // 相当于就是以当前节点为中心，将pre和next旋转。
		return reverseLink(curr, nextLink)
	}

	return reverseLink(head, null)
}

// 区间反转：反转m到n的链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
	const dommyHead = new ListNode()
	dommyHead.next = head;
	let count = 0;
	let p1 = dommyHead, p2 = dommyHead;
	m--;
	while (count < m) {
		p1 = p1.next;
		p2 = p2.next;
		count++;
	}
	while (count < n) {
		p2 = p2.next;
		count++
	}
	const dommyHead2 = new ListNode();
	dommyHead2.next = p2.next;
	p2.next = null;

	let reverseNode = p1.next;
	while (reverseNode) {
		const temp = reverseNode.next;
		reverseNode.next = dommyHead2.next
		dommyHead2.next = reverseNode;
		reverseNode = temp;
	}
	p1.next = dommyHead2.next
	return dommyHead2.next
};

// 成对反转
const swapPairs = function (head) {
	if (head === null || head.next === null) {
		return head;
	}
	const newHead = head.next;
	head.next = swapPairs(newHead.next); // 进行截断
	newHead.next = head;
	return newHead;
};
// k个一组反转链表
const myReverse = (head, tail) => {
	let prev = tail.next;
	let p = head;
	while (prev !== tail) {
		const nex = p.next;
		p.next = prev;
		prev = p;
		p = nex;
	}
	return [tail, head];
}
let reverseKGroup = function (head, k) {
	const hair = new ListNode(0);
	hair.next = head;
	let pre = hair;

	while (head) {
		let tail = pre;
		// 查看剩余部分长度是否大于等于 k
		for (let i = 0; i < k; ++i) {
			tail = tail.next;
			if (!tail) {
				return hair.next;
			}
		}
		const nex = tail.next;
		[head, tail] = myReverse(head, tail);
		// 把子链表重新接回原链表
		pre.next = head;
		tail.next = nex;
		pre = tail;
		head = tail.next;
	}
	return hair.next;
};
const head = [1, 2, 3, 4, 5], k = 2
const res = reverseKGroup(head, k)
console.log(res)




