<<<<<<< HEAD
<template>
<div class="root">
    <div class="homefeed-result" v-show="!renderMsg.sug">
    <tabSlide
class="top-slide homefeed-tab"
:allTabs="allTabs"
:currTab="currentTab"
:baseTrackData="baseTrackData"
@tabClick="tabUpdate"
    />
    <swipe
class='homefeed-swipe'
v-model="currentIndex"
:touchEnabled="false"
    >
    <hfList
v-for="(item, index) in allTabs"
    :key="index"
:ref="item.key"
:pageTab="item.key"
:renderMsg="renderMsg"
:animationTime="animationTime"
:class="[{'index-swipe__item_on': item.key === currentTab}, 'index-swipe__item']"
    >
    </hfList>
    </swipe>

    <engineSwitch
v-show="showSwitch"
class="homefeed-engine-switch"
ref="engineSwitch"
:engines="engines"
:baseTrackData="baseTrackData"
@engineSelect="engineSelect"
    />
    </div>

    <sugList class="homefeed-sug" v-show="renderMsg.sug" :renderMsg="renderMsg" />
    </div>
    </template>

    <script type='text/javascript'>
import { mapState } from 'vuex'
import tabSlide from '@/components/tab-slide'
import hfList from '@/containers/hf-list/index.vue'
import sugList from '@/containers/sug-list'
import swipe from '@/components/swipe'
import engineSwitch from '@/components/engine-switch'
import { allTabs, engineKey, allEngines, animationTime } from './config'
import { getHFPageData } from '@/utils/track-data'
import { clearExposed } from '@/plugin/track'
import { hfTabOffline } from '@/apis'

export default {
    name: 'homefeed',
    props: ['tab'],
    data () {
        return {
            showSwitch: false,
            tabClicked: false, // 标志tab是否点击过，渲染需要
            renderMsg: {
                tab: undefined,
                ctx: 'client',
                sug: false,
                engine: {},
                sid: undefined
            },
            allTabs: [],
            engines: [], // 所有的搜索引擎信息
            baseTrackData: {},
        }
    },
    components: {
        swipe,
        hfList,
        sugList,
        tabSlide,
        engineSwitch,
    },
    computed: {
        ...mapState([
            'localConfig',
            'params',
            'currentTab',
        ]),
        currentIndex: {
            get() {
                return this.allTabs.findIndex(item => {
                    return item.key === this.currentTab;
                })
            },
            set() {}
        },
        selecteEngine() {
            return this.engines.find(item => {
                return item.selected === true;
            })
        }
    },
    watch: {
        'params.sid': function(val) {
            this.renderMsg = {
                tab: this.currentTab,
                sid: val,
                sug: !this.localConfig.s_c,
                engine: this.selecteEngine,
                ctx: this.tabClicked ? 'tab' : 'client',
            }

            this.tabClicked = false;
            // 默认隐藏搜索引擎选择框
            this.$refs.engineSwitch.closeSwitch();
            this.baseTrackData = getHFPageData();
        }
    },
    created() {
        this.getHfTabOffline();
    },
    methods: {
        tabUpdate(tab) {
            if (tab !== this.currentTab) {
                let $swipe = this.$refs[this.currentTab] && this.$refs[this.currentTab][0].$el
                clearExposed($swipe);

                this.tabClicked = true;

                this.$router.push({name: 'homefeed', query: {tab: tab}}).catch(() => {});
                this.$store.commit('tabUpdate', tab);
            } else if (tab === 'engine') {
                this.showSwitch = true;
                this.$refs.engineSwitch.switchToggleShow();
            }
        },
        initEngines(defaultEngines) {
            let ret = defaultEngines;

            try {
                // 上次用户离开时的搜索引擎信息
                if (localStorage.getItem(engineKey)) {
                    ret = JSON.parse(localStorage.getItem(engineKey));
                }
            } catch (error) {
                // error
            }

            const localConfig = this.localConfig;
            const userSelectEngine = ret.find(function(item) { return item.selected; });

            if (localConfig && localConfig.s_es) {
                const clientEngines = localConfig.s_es;
                let engineSelected = false; // 搜索引擎选中状态

                ret = clientEngines.map(function(item) {
                    if (item.label === userSelectEngine.label) {
                        item.selected = true;
                        engineSelected = true;
                    }
                    return item;
                });

                // 保证一个搜索引擎被选中
                if (!engineSelected) {
                    const clientDefaultEngine = localConfig.s_e.label;
                    ret = clientEngines.map(function(item) {
                        if (item.label === clientDefaultEngine) {
                            item.selected = true;
                        }
                        return item;
                    });
                }
            }
            return ret;
        },
        engineSelect(engine) {
            this.$store.commit('tabUpdate', 'engine_' + engine.label);
            this.engines.forEach(item => {
                item.selected = false;
                if (item.label === engine.label) {
                    item.selected = true;
                }
            });
            localStorage.setItem(engineKey, JSON.stringify(this.engines));
        },
        getHfTabOffline() {
            hfTabOffline().then(res => {
                const tabOffline = res && res.data && res.data.HFTabOffline;
                if (tabOffline === 0) {
                    this.allTabs = allTabs.filter(item => item.key !== 'engine');
                } else {
                    this.allTabs = allTabs;
                }
            })
        }
    },
    beforeMount() {
        // this.allTabs = allTabs;
        this.animationTime = animationTime;
        this.engines = this.initEngines(allEngines);
        this.baseTrackData = getHFPageData();
    }
}
</script>

<style type='text/css' scoped>
.root {
    position: relative;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}

.homefeed-tab {
    position: absolute;
    top: 0;
    width: 100%;
    height: 1.26rem;
}

.homefeed-swipe {
    position: absolute;
    top: 1.26rem;
    bottom: 0;
    width: 100%;
    height: calc(100% - 1.26rem);
    z-index: 1;
}
</style>
>>>>>>> dev
