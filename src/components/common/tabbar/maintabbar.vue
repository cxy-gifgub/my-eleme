<template>
    <div>
        <tabbar>
            <tabItem path="/home">
                <img slot="item-icon" src="@/assets/img/tabbar/ele.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/ele-a.png" alt="">
                <div slot="item-text">首页</div>
            </tabItem>
            <tabItem  path="/category">
                <img slot="item-icon" src="@/assets/img/tabbar/fenlei.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/fenlei-a.png" alt="">
                <div slot="item-text">分类</div>
            </tabItem>
            <tabItem  path="/cart">
                <img slot="item-icon" src="@/assets/img/tabbar/gouwuche.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/gouwuche-a.png" alt="">
                <div slot="item-text">购物车</div>
            </tabItem>
            <tabItem  path="/profile">
                <img slot="item-icon" src="@/assets/img/tabbar/wode.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/wode-a.png" alt="">
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