function renderHomeFeedTab(data) {
    var allTabs = [{
        key: 'all',
        label: '综合'
    }, {
        key: 'news',
        label: '资讯'
    }, {
        key: 'video',
        label: '视频'
    }, {
        key: 'hfauthor',
        label: '作者'
    }, {
        key: 'engine',
        label: '网页'
    }];
    if (data === 0) {
        allTabs = allTabs.filter(item => {
                return item.key !== 'engine';
            }
        )
    }
    return allTabs;
}

let alltab = renderHomeFeedTab(0)
//console.log(alltab)

/* offlineTabs() {
 hfTabOffline().then(res => {
     if (res.data && res.data.data && res.data.data.ab_test) {
         this.offlineTabFlag = res.data.data.ab_test;
         if (this.offlineTabFlag === 0) {
             this.allTabs = allTabs.filter(item => {
                 return item.key !== 'engine';
             })
         } else {
             this.allTabs = allTabs;
         }
     }
 });
}*/

const allTabs = () => {
    let allTabs = [{
        key: 'all',
        label: '综合'
    }, {
        key: 'news',
        label: '资讯'
    }, {
        key: 'video',
        label: '视频'
    }, {
        key: 'hfauthor',
        label: '作者'
    }, {
        key: 'engine',
        label: '网页'
    }];
    let offlineTabFlag = 0
    if (offlineTabFlag === 0) {
        allTabs = allTabs.filter(item => {
            return item.key !== 'engine';
        })
    }
    return allTabs;
}
console.log(allTabs());
