// on emit off
class EventEmit {
    constructor() {
        this.eventList = {};
    }

    on(handler, fn) {
        if (!handler) return
        if (!this.eventList[handler]) {
            this.eventList[handler] = []
        }
        this.eventList[handler].push(fn)
    }

    emit(handle, args) {
        if (this.eventList[handle]) {
            this.eventList[handle].map(fn => {
                fn.call(this, ...args)
            })
        }
    }

    off(handle, fn) {
        // if(!fn) delete this.eventList[handle];
        if (!handle) return
        if (this.eventList[handle]) {
            let index = this.eventList[handle][fn]
            this.eventList[handle].splice(index, 1);
        }
    }
}

let eventEmit = new EventEmit();
let onClickEvent = {
    click: function onClick() {
        console.log('click')
    },
    onceClick: function onceClick(args) {
        console.log('onceClick')
    }
}

eventEmit.on('onClickEvent', onClickEvent.click.bind(this));
eventEmit.emit('onClickEvent', 'item');
eventEmit.off('onClickEvent', onClickEvent.click.bind(this));
console.log('finish')
eventEmit.emit('onClickEvent', 'item');
