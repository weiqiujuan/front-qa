function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycleSet = (head) => {
	let set = new Set();
	let p = head;
	while (p) {
		if (set.has(p)) return true;
		set.add(p);
		p = p.next;
	}
	return false;
};

const hasCycle = (head) => {
	if (head === null || head.next === null) return false
	let newHead = new ListNode();
	newHead.next = head;
	let fast = newHead, slow = newHead;
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) return true
	}
	return false
}

const findCycleStart = (head) => {
	let fast = head, slow = head;
	while (true) {
		if (!fast || !fast.next) return null;
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) break;
	}
	slow = head;
	while (slow !== fast) {
		fast = fast.next;
		slow = slow.next
	}
	return slow;
}
