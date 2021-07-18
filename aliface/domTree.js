const JsonTree = {
	"tagName": "ul",
	"props": {
		"className": "list",
		"data-name": "jsontree"
	},
	"children": [
		{
			"tagName": "li",
			"children": [{
				"tagName": "img",
				"props": {
					"src": "//img.alicdn.com/tps/TB1HwXxLpXXXXchapXXXXXXXXXX-32-32.ico",
					"width": "16px"
				}
			}]
		},
		{
			"tagName": "li",
			"children": [{
				"tagName": "a",
				"props": {
					"href": "https://www.aliyun.com",
					"target": "_blank"
				},
				"children": "阿里云"
			}]
		}
	]
};

function parseDOM(jsontree) {
	const {tagName, props, children} = jsontree;
	const element = document.createElement(tagName);
	for (let _key in props) {
		element[_key] = props[_key];
	}
	if (children && typeof (children) === "object") {
		for (let i = 0; i < children.length; i++) {
			element.appendChild(parseDOM(children[i]));
		}
	} else {
		if (children) {
			element.appendChild(document.createTextNode(children));
		}
	}
	return element;
}

parseDOM(JsonTree);

// document.getElementsByTagName(“body")[0].appendChild(parseDOM(JsonTree));
