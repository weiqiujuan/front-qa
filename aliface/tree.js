const options = [
	{
		id: 'zhejiang',
		text: 'Zhejiang',
		children: [
			{
				id: 'hangzhou',
				text: 'Hangzhou',
				children: [
					{
						id: 'xihu',
						text: 'West Lake'
					}
				]
			}
		]
	},
	{
		id: 'jiangsu',
		text: 'Jiangsu',
		children: [
			{
				id: 'nanjing',
				text: 'Nanjing',
				children: [
					{
						id: 'zhonghuamen',
						text: 'Zhong Hua Men'
					}
				]
			}
		]
	}
];

function recursion(_primaryKey, _options) {
	let parent = [];
	for (let i = 0; i < _options.length; i++) {
		if (_options[i].id !== _primaryKey) {
			if (!_options[i].children) {
				if (i !== _options.length - 1) {
					continue;
				}
				return null;
			}
			const p = recursion(_primaryKey, _options[i].children);
			if (p) {
				parent.push(_options[i]);
				parent = parent.concat(p);
				return parent;
			}
		} else {
			parent.push(_options[i]);
			return parent;
		}
	}
}
