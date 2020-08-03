<template>
    <van-tabbar v-model="active" route>
        <van-tabbar-item replace to="/home">
            <span>首页</span>
            <template #icon="props">
                <img :src="props.active ? home.active : home.inactive"/>
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/task">
            <span>任务</span>
            <template #icon="props">
                <img :src="props.active ? task.active : task.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/notice">
            <span>公告</span>
            <template #icon="props">
                <img :src="props.active ? notice.active : notice.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/my">
            <span>我的</span>
            <template #icon="props">
                <img :src="props.active ? my.active : my.inactive" />
            </template>
        </van-tabbar-item>

    </van-tabbar>
</template>
<script>
    import Vue from 'vue';
    import { Tabbar, TabbarItem } from 'vant';
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    export default {
        data() {
            return {
                active: 0,
                home: {
                    active: require('../assets/images/tabbar1.jpg'),
                    inactive: require('../assets/images/tabbar11.jpg'),
                },
                task: {
                    active: require('../assets/images/tabbar2.jpg'),
                    inactive: require('../assets/images/tabbar22.jpg'),
                },
                notice: {
                    active: require('../assets/images/tabbar3.jpg'),
                    inactive: require('../assets/images/tabbar33.jpg'),
                },
                my: {
                    active: require('../assets/images/tabbar4.jpg'),
                    inactive: require('../assets/images/tabbar44.jpg'),
                },
            };
        },
        components: {

        }
    }
</script>
<style scoped>
    .van-tabbar-item__icon{
        margin-bottom: 0px;
    }
    .van-tabbar-item__icon img{
        height: 30px;
    }
    .van-tabbar-item--active{
        color: #46dbd5;
    }
    .van-tabbar-item{
        color: #999;
    }
    .van-tabbar-item.van-tabbar-item--active{
        color: #46dbd5;
    }
    .van-tabbar-item__text{
        margin-top: -5px;
    }
</style>