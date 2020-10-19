class EventEmitter {
    constructor() {
        this.eventMap = {}
        this.onceEventMap = {}
        this.event = new Proxy({}, {
            set: (target, property, fn) => {
                this.eventMap[property] || (this.eventMap[property] = [])
                this.eventMap[property].push(fn)
                return true
            }
        })
        this.onceEvent = new Proxy({}, {
            set: (target, property, fn) => {
                this.onceEventMap[property] || (this.onceEventMap[property] = [])
                this.onceEventMap[property].push(fn)
                return true
            }
        })
    }

    on(name, fn) {
        this.event[name] = fn
        delete this.onceEventMap[name]
    }

    off(name) {
        delete this.eventMap[name]
        delete this.onceEventMap[name]
    }

    emit(name, ...val) {
        this.eventMap[name] && this.eventMap[name].forEach(fn => {
            fn(...val)
        })
        this.onceEventMap[name] && (this.onceEventMap[name].forEach(fn => {
            fn(...val)
        }), this.off(name))
    }

    once(name, fn) {
        this.onceEvent[name] = fn
        delete this.eventMap[name]
    }
}