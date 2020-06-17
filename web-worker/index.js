function myPrivateFunc1() {
    // do something
}

function myPrivateFunc2() {
    // do something
}

var queryableFunctions = {
    // example #1: get the difference between two numbers:
    getDifference: function (nMinuend, nSubtrahend) {
        reply("printSomething", nMinuend - nSubtrahend);
    },
    // example #2: wait three seconds
    waitSomething: function () {
        setTimeout(function () {
            reply("alertSomething", 3, "seconds");
        }, 3000);
    }
};

// system functions

function defaultQuery(vMsg) {
}

function reply() {
    if (arguments.length < 1) {
        throw new TypeError("reply - not enough arguments");
        return;
    }
    postMessage({"vo42t30": arguments[0], "rnb93qh": Array.prototype.slice.call(arguments, 1)});
}

onmessage = function (oEvent) {
    if (oEvent.data instanceof Object && oEvent.data.hasOwnProperty("bk4e1h0") && oEvent.data.hasOwnProperty("ktp3fm1")) {
        queryableFunctions[oEvent.data.bk4e1h0].apply(self, oEvent.data.ktp3fm1);
    } else {
        defaultQuery(oEvent.data);
    }
};