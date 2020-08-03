<template>
    <div class="index">
        <img class="p1" src="../assets/images/indeximg.jpg" alt="">
        <img class="p2" src="../assets/images/indexbg.jpg" alt="">
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.index{
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .p1{
        width: 80%;
    }
    .p2{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
}
</style>