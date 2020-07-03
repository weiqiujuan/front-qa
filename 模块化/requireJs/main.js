require(['./add', './square'], function (addModule, squareModule) {
    console.log(addModule.add(1, 1))
    console.log(squareModule.square(3))
});
const main = () => {
    console.log('我是main')
}
main()