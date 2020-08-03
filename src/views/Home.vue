<template>
  <div class="home">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <transition>
        <div class="loading" :style="{width:scrollWdith,height:scrollHeight}" v-if="show">
          <img class="p1" src="../assets/images/indeximg.jpg" alt="">
          <img class="p2" src="../assets/images/indexbg.jpg" alt="">
        </div>
      </transition>

      <div class="main">
        <h2>领取任务</h2>

        <div class="task-circle">
          <div class="already_do">
            <h3>20</h3>
            <p>本周已做</p>
          </div>

          <div class="task_now">立即<br>接单</div>

          <div class="already_do">
            <h3>20</h3>
            <p>本月已做</p>
          </div>
        </div>

        <div class="task_num"><span>今日可接任务：1</span><span>今日可弃任务：1</span></div>
        <div class="notice">公告：拉拉小手动动手，推荐一个粉丝注册，审核成</div>

      </div>
      <div class="round"><div></div></div>
      <ul class="main_list">
        <li>
          <div>
            <h3>开启预抢订单</h3>
            <p>接到任务后请安排时间</p>
          </div>
          <van-switch v-model="task_handle" active-color="#46dbd5" inactive-color="#eee"  size="24px"/>
        </li>
        <li>
          <div>
            <h3>开启短信提醒</h3>
            <p>短信提醒2元/月</p>
          </div>
          <van-switch v-model="msg_handle" active-color="#46dbd5" inactive-color="#eee"  size="24px"/>
        </li>
        <li>
          <div>
            <h3>预计接单时间</h3>
          </div>
          <div class="tip">4秒</div>
        </li>
        <li>
          <div>
            <h3>接单状态</h3>
          </div>
          <div class="tip">开启</div>
        </li>
        <li>
          <div>
            <h3>评价任务</h3>
            <p>0.5元/条，还可领3条</p>
          </div>
          <div class="tip"><button class="btn">领取</button></div>
        </li>
      </ul>
      <Tabbar></Tabbar>
    </van-pull-refresh>

  </div>
</template>

<script>
  import Vue from 'vue';
  import store from "../store";
  import { Switch,PullRefresh,Toast } from 'vant';
  Vue.use(Switch);
  Vue.use(PullRefresh);
  import Tabbar from "../components/Tabbar";
export default {
  name: 'Home',
  data(){
    return {
      task_handle: true,
      msg_handle: true,
      loading: {},
      show: false,
      isLoading: false
    }
  },
  components: {
    Tabbar
  },
  computed: {
    scrollWdith(){
      return window.innerWidth + 'px'
    },
    scrollHeight(){
      return window.innerHeight + 'px'
    }
  },
  mounted() {
    let that = this
    if(this.$store.state.firstOpen){ //打开页面先判断是否第一次打开，是则显示引导页
      that.show = true
    }
    setTimeout(function () { //2秒后自动关闭引导页
        that.show = false
        store.commit('setLoading', false)
      },2000)
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
  },
}
</script>
<style scoped lang="less">
  .loading{
    width: 100%;
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    .p1{
      width: 80%;
      margin-top: 10%;
    }
    .p2{
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .home{
    padding-bottom: 50px;
    background: #fff;
  }
  .main{
    width: 100%;
    height: auto;
    background: #46dbd5;
    color: #fff;
    overflow: hidden;
    h2{
      margin: 30px 0 20px 0;
      font-size: 16px;
    }
    .task-circle{
      width: 100%;
    }
    .already_do{
      width: 80px;
      height: 80px;
      border-radius: 40px;
      background: #fff;
      color: #46dbd5;
      border: 5px solid #a3eeea;
      display: inline-block;
      box-shadow: 0px 10px 10px #34c5be;
      h3{
        margin: 10px 0 0 0;
      }
      p{
        margin: 0;
        font-size: 14px;
      }
    }
    .task_now{
      width: 100px;
      height: 100px;
      border-radius: 100px;
      background: #46dbd5;
      border: 6px solid #fff;
      display: inline-block;
      font-size: 18px;
      font-weight: bold;
      padding-top: 18px;
      margin: 0 5%;
      box-sizing: border-box;
      box-shadow: 0px 20px 20px #34c5be;
    }
    .task_num{
      margin: 30px 0;
      span{
        background: #fff;
        color: #46dbd5;
        border: 3px solid #a3eeea;
        margin: 0 10px;
        border-radius: 10px;
        padding: 3px 20px;
        font-size: 12px;
        display: inline-block;
      }
    }
    .notice{
      font-size: 14px;
      width: 90%;
      margin: 0 auto;
      overflow: hidden;
    }
  }
  .round{
    width: 100%;
    height: 150px;
    overflow: hidden;
    margin-top: -5px;
    div {
      width: 120%;
      height: 150px;
      position: relative;
      background: #46dbd5;
      border-bottom-left-radius: 300%;
      border-bottom-right-radius: 300%;
      top: -110px;
      left: -10%;
      z-index: 1;
    }
  }
  .main_list{
    margin-top: -120px;
  }
  .main_list li{
    overflow: hidden;
    margin: 30px 0;
    div{
      float: left;
      margin-left: 5%;
      h3{
        margin: 0;
        text-align: left;
        font-size: 16px;
        font-weight: normal;
      }
      p{
        margin: 0;
        font-size: 12px;
        text-align: left;
        color: #999;
      }
    }
    .van-switch{
      float: right;
      margin-right: 5%;
      margin-top: 10px;
    }
    .tip{
      float: right;
      margin-right: 5%;
      font-size: 12px;
      color: #999;
    }
  }
</style>
