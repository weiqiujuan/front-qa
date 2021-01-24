const lightTime = {
	red: 12000,
	yellow: 14000,
	green: 13000,
}

function addClass(color) {
	let documentLight = document.getElementsByClassName('light')
	for (let i = 0; i < documentLight.length; i++) {
		documentLight[i].style.background = '#444444'
	}
	let documentId = document.getElementById(color)
	documentId.style.background = color
}

function countDown(color, time) {
	let ele = document.getElementById(color)
	let second = time/1000-1;
	this.timer = setInterval(() => {
		ele.innerHTML = second;
		second -= 1;
		if (second < 0) {
			ele.innerHTML = '';
			clearInterval(this.timer);
		}
	}, 1000);
}

function sleep(time) {
	return new Promise(resolve => {
			setTimeout(resolve, time)
		}
	)
}

async function setChange(color, time){
	addClass(color)
	countDown(color, time)
	await sleep(time)
}
async function setTime() {
	await setChange('red', lightTime["red"])
	await setChange('yellow', lightTime['yellow'])
	await setChange('green', lightTime['green'])
}

function loopTime() {
	setTime().then(r => {
		loopTime();
	});
}

loopTime()


