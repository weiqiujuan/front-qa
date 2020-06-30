![Alt text](unique.png)
```
// demo1
var arr = [1, 2, NaN];
arr.indexOf(NaN); // -1
```
```
// demo2
function unique(array) {
   return Array.from(new Set(array));
}
console.log(unique([NaN, NaN])) // [NaN]
```