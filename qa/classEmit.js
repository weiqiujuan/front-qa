class eventEmit {
    constructor() {
        this.eventList = {}
    }

    on(event, handle) {
        if (!this.eventList[event]) {
            this.eventList[event] = []
        }
        this.eventList[event].push(handle)
    }

    once(event, handle) {
        let wrapFanc = (...args) => {
            handle.apply(this, ...args)
            this.off(event, wrapFanc)
        }
        this.on(event, wrapFanc)
        return this
    }

    off(event, handle) {
        let events = this.eventList[event]
        if (events) {
            if (!handle) {
                Reflect.deleteProperty(this.eventList, event)
            } else {
                events.splice(events.indexOf(handle), 1)
            }
            this.eventList[event] = events
        }
    }

    emit(event, ...args) {
        if (this.eventList[event]) {
            this.eventList[event].map(item => {
                item.call(this, ...args)
            })
        }
    }
}