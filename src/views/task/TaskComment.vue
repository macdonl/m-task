<template>
    <div class="task-comment">

        <div class="task-panel">
            <div class="title">
                <h3>评论文字</h3>

            </div>
            <div class="detail">
                <div>
                    重新创建动态组件的行为通常是非常有用的，但是在这个案例中，我们更希望那些标签的组件实例能够被在它们第一次被创建的时候缓存下来。为了解决这个问题，我们可以用一个元素将其动态组件包裹起来。
                </div>
            </div>
            <div class="bottom">
                <span><button class="btn">复制文字</button></span>
            </div>
        </div>

        <div class="task-panel">
            <div class="title">
                <h3>评论图片</h3>
            </div>
            <div class="detail">
                <div class="img">
                    <div><img src="../../assets/images/1.jpg" alt="图片1"></div>
                    <div class="blank"></div>
                    <div><img src="../../assets/images/2.jpg" alt="图片2"></div>
                    <div class="blank"></div>
                    <div><img src="../../assets/images/3.jpg" alt="图片3"></div>
                    <div class="blank"></div>
                    <div><img src="../../assets/images/4.jpg" alt="图片4"></div>
                </div>
            </div>
            <div class="bottom">
                <span><button class="btn">长按图片保存</button></span>
            </div>
        </div>

        <div class="task-panel">
            <div class="title">
                <h3>评论视频</h3>

            </div>
            <div class="detail">
                <div>
                    <video width="100%" controls>
                        <source src="../../assets/images/movie.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="bottom">
                <span><button class="btn">长按视频保存</button></span>
            </div>
        </div>

        <div class="task-panel">
            <div class="title">
                <h3>评论截图</h3>

            </div>
            <div class="detail">
                <div class="add_btn">
                    <span class="a1"></span>
                    <span class="a2"></span>
                </div>
            </div>
        </div>

        <div class="task-c-btn"><button class="btn btn-large">执行任务</button></div>

        <Tabbar></Tabbar>
    </div>
</template>
<script>
    import Tabbar from "../../components/Tabbar";
    export default {
        data() {
            return {

            }
        },
        methods: {},
        computed: {},
        components: {
            Tabbar
        }
    }
</script>
<style scoped lang="less">
    .task-comment{
        background-color: #f7f7f7;
        padding-bottom: 100px;
        width: 92%;
        margin: 0 auto;
        .task-panel{
            width: 100%;
            box-sizing: border-box;
            margin: 0 auto 10px auto;
            background: #fff;
            border-radius: 3px;
            padding: 15px 10px;
            .title{
                overflow: hidden;
                h3{
                    float: left;
                    font-size: 16px;
                    margin: 0;
                }
                span{
                    float: right;
                    font-size: 14px;
                    color: #999;
                }
            }
            .detail{
                text-align: left;
                margin: 10px 0;
                font-size: 14px;
                div{
                    margin-bottom: 8px;
                    color: #444;
                }
                span{
                    margin-right: 10px;
                }
                .img{
                    overflow: hidden;
                    div{
                        width: 22%;
                        height: 80px;
                        float: left;
                        overflow: hidden;
                    }
                    div.blank{
                        width: 4%;
                    }
                    img{
                        height: 100%;
                    }
                }
                .add_btn{
                    width: 100px;
                    height: 130px;
                    background: #f2f2f2;
                    position: relative;
                    span{
                        display: inline-block;
                        background: #999;
                        position: absolute;
                    }
                    .a1{
                        width: 36px;
                        height: 3px;
                        left: 32px;
                        top: 65px
                    }
                    .a2{
                        width: 3px;
                        height: 36px;
                        left: 48px;
                        top: 50px
                    }
                }
            }
            .bottom{
                overflow: hidden;
                span{
                    float: right;
                    color: red;
                    font-size: 14px;
                }
            }
        }
        .task-c-btn{
            margin-top: 60px;
        }
    }
</style>