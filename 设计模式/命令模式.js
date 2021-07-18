const setCommand = function (button, func) {
	button.onclick = function () {
		func();
	}
};
const MenuBar = {
	refresh: function () {
		console.log('刷新菜单界面');
	}
};
const RefreshMenuBarCommand = function (receiver) {
	return function () {
		receiver.refresh();
	}
};
var refreshMenuBarCommand = RefreshMenuBarCommand( MenuBar );
const button1 = document.getElementsByClassName('button1')
setCommand( button1, refreshMenuBarCommand );
