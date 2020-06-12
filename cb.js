// function cb(a,b,c){
//     let d= a+b;
//     return a+b+c;
// }
//
// function main(){
//     let c = 5;
//     function child(a,b,cb) {
//       a+=1;
//       b+=1;
//       cb(a,b,c)
//     }
// }
// console.log(main())

const getData = (thirdViewUrls) =>{
    return {
        H: {
            n: '111111111n',
        },
        B: [{
            H: {
                key:  'browser_ads' , // 测试环境下为browser_adstest， 线上环境为browser_ads
                pk: "packageName", // 广告的包名
                eventTime: Date.now(), // 新加客户端时间，与下面 't' 字段一致。
            },
            B: {
                t: Date.now(),
                e: 'cilck', // 统计的事件类型，VIEW或者CLICK等
                ex: '11111', // 广告中返回的ex字段
                v: 'h5_1 .0',
            },
        }],
        thirdViewUrls: thirdViewUrls,
    }
}

let data = {

}

const res = (data={})=>{
    const dataS = getData(data)
    if(JSON.stringify(dataS.thirdViewUrls) !== '{}'){
        console.log(dataS.B[0].B.e)
    }else{
        console.log('沒有thirdViewUrls')
    }
    console.log(dataS.thirdViewUrls)
    delete dataS.thirdViewUrls
    console.log(dataS.thirdViewUrls)
}
res()