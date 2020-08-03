<template>
    <div class="fans-check">
        <div class="head"><MyHeadTab :title="data"></MyHeadTab></div>
        <Chat></Chat>
    </div>
</template>
<script>
    import MyHeadTab from "../../components/MyHeadTab";
    import Chat from "../../components/Chat";
    export default {
        data() {
            return {
                data:'客服中心',
            }
        },
        methods: {},
        computed: {},
        components: {
            MyHeadTab,
            Chat
        }
    }
</script>
<style scoped lang="less">
.fans-check{
    .head{
        background: #fff;
        margin-bottom: 10px;
    }
}
</style>