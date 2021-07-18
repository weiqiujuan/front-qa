const mergeKLists = function (lists) {
	return lists.reduce((p, n) => {
		while (n) {
			p.push(n)
			n = n.next
		}
		return p
	}, []).sort((a, b) => a.val - b.val).reduceRight((p, n) => (n.next = p, p = n, p), null)
};
