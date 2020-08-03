<template>
    <div class="notice">
        <h2>公告</h2>
        <ul class="notice-list">
            <li>
                <h3>限时推广奖励</h3>
                <p>动动小手拉拉好友，推荐一个粉丝注册，审核成功额外奖励1元，其它推广佣金不变；如果之前注册没审核，或提示正在审核中，联系客服处理饥渴，快去行动吧。</p>
            </li>
            <li>
                <h3>重要提示</h3>
                <p>今日平台已清晰违规做单用户6000++++</p>
                <p>即日起，禁止使用淘宝客、返利、花呗、信用卡等，损害商家利益的方式下单。</p>
                <p>做单保证浏览时长、深度浏览宝贝，切勿共享答案。</p>
                <p>初次违反者暂停7天不派单，2次或2次以上违反者，永不派单。</p>
                <p>为保证平台持续运行，创互利共赢局面，望会员们积极遵守！！</p>
            </li>
            <li>
                <h3>D66唯一网站</h3>
                <p><a href="">d66td.com</a>（复制到浏览器打开或打开后复制链接，收藏网站永不失联）</p>
                <h3>备用网站</h3>
                <p><a href="">https://s.d66td.com</a>（复制到浏览器打开或打开后复制链接，收藏网站永不失联）</p>
            </li>
            <li>
                <h3>D66 APP下载</h3>
                <p class="grey">注意：IOS系统用苹果自带浏览器打开，ISO12及以下版本建议在网站做单</p>
                <div class="float"><img src="../assets/images/android.jpg" alt=""><div>安卓版本<a href="">（点击下载）</a></div></div>
                <div class="float"><img src="../assets/images/ios.jpg" alt=""><div>IOS版本<a href="">（点击下载）</a></div></div>
            </li>
            <li>
                <h3>常见问题</h3>
                <p>银行卡提现到账问题</p>
                <p class="grey">晚上6点以后的提现次日到账，当天6点前天的保证当天到！！</p>
                <p>什么时间有任务</p>
                <p class="grey">早上8：00 ~ 凌晨12点，和每个小时的整点。</p>
                <p>什么是会员</p>
                <p class="grey">会员可以极速任务（保证最快接到任务），优先返款。</p>
                <p>客服上班时间</p>
                <p class="grey">上午10：00~晚上21：00</p>
            </li>
            <li>
                <h3>关于我们</h3>
                <p>我们的目标是让各位赚更多的钱，如果您有更好的想法，可以联系在线客服反馈。期待与您有更深的接触。</p>
            </li>
        </ul>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
    import Tabbar from "../components/Tabbar";
    export default {
        data() {
            return {}
        },
        components: {
            Tabbar
        }
    }
</script>
<style scoped lang="less">
.notice{
    background: #f7f7f7;
    padding-bottom: 100px;
    overflow: hidden;
    h2{
        font-size: 18px;
        font-weight: normal;
    }
    .notice-list li{
        width: 92%;
        margin: 0 auto 10px auto;
        background: #fff;
        border-radius: 3px;
        text-align: left;
        padding: 15px 10px;
        box-sizing: border-box;
        overflow: hidden;
        h3{
            color: #46dbd5;
            margin: 0;
            font-size: 18px;
        }
        p{
            font-size: 14px;
            line-height: 22px;
        }
        .float{
            float: left;
            width: 50%;
            text-align: center;
            font-size: 14px;
            color: #5380fd;
            img{
                width: 40%;
            }
            a{
                display: block;
                font-size: 14px;
                color: #5380fd;
            }
        }
    }
}
</style>