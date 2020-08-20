<template>
    <div>
        <tabbar>
            <tabItem path="/home">
                <img slot="item-icon" src="" alt="">
                <img slot="item-icon-active" src="" alt="">
                <div slot="item-text">首页</div>
            </tabItem>
            <tabItem  path="/category">
                <img slot="item-icon" src="" alt="">
                <img slot="item-icon-active" src="" alt="">
                <div slot="item-text">分类</div>
            </tabItem>
            <tabItem  path="/cart">
                <img slot="item-icon" src="" alt="">
                <img slot="item-icon-active" src="" alt="">
                <div slot="item-text">购物车</div>
            </tabItem>
            <tabItem  path="/profile">
                <img slot="item-icon" src="" alt="">
                <img slot="item-icon-active" src="" alt="">
                <div slot="item-text">我的</div>
            </tabItem>
        </tabbar>
    </div>
</template>

<script>
import tabbar from '@/components/common/tabbar/topbar';
import tabItem from '@/components/common/tabbar/tabBarItem';
export default {
    components:{
        tabbar,
        tabItem
    }
}
</script>

<style>

</style>