export function loadScript(src) {
	return new Promise((resolve) => {
		if (process.browser) {
			const sDom = document.createElement('script');
			sDom.src = src;
			sDom.setAttribute('type', 'text/javascript');
			document.body.appendChild(sDom);
			sDom.onload = sDom.onreadystatechange = function () {
				if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
					resolve();
				}
				sDom.onload = sDom.onreadystatechange = null;
			};
		}
	});
}


export function initOp(channelCode, url) {
	loadScript(url).then((res) => {
		window.opInstallFac = function (config = {data: {channelCode}}) {
			let res = []
			return res;
		};
	});
}
