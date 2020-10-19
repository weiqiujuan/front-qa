Function.prototype.bind = function (context) {
    let that = this;
    let args = Array.prototype.slice.call(arguments,1)
    let tragetFun =  function () {
        var bindArgs  = Array.prototype.slice.call(arguments);
        return that.call(fn, args.concat(bindArgs))
    }
}

let foo = { value : 1 };
function bar(){
    console.log(this.value);
}
let bindF = bar.bind(foo);
bindF();