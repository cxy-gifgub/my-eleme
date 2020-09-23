<template>
<div class="category_container">
  <div class="category_nav">
    <categoryNav></categoryNav>
  </div>
  <div class="category_content">
    <div class="category_topbar">
      <div class="topbar_items" v-for="item in tagsList">
        <div class="items_img">
          <img src class="tags_img" />
        </div>
        <div class="items_title">{{item}}</div>
      </div>
    </div>
  </div>
  <homeList :acceptList="categoryList['fujin']"></homeList>
</div>
</template>

<script>
import categoryNav from "@/components/categoryNav/categoryNav";
import homeList from "@/views/home/components/homeList";
import {
  getHomeListdata
} from "@/network/home";
export default {
  components: {
    categoryNav,
    homeList,
  },
  data() {
    return {
      tagsList: [
        "全部",
        "面包蛋糕",
        "甜品",
        "奶茶果汁",
        "咖啡",
        "炸鸡炸串",
        "起飞",
      ],
      testList: {
        list: [
          "1",
          "2",
          "3",
          "3",
        ],
      },
      categoryList: {
        fujin: {
          tags: "fujin",
          page: 1,
          list: [],
          load: false
        },
        lingshi: {
          tags: "lingshi",
          page: 1,
          list: [],
          load: false
        },
        chaoshi: {
          tags: "chaoshi",
          page: 1,
          list: [],
          load: false
        },
        maicai: {
          tags: "maicai",
          page: 1,
          list: [],
          load: false
        },
        baihuo: {
          tags: "baihuo",
          page: 1,
          list: [],
          load: false
        },
        shuiguo: {
          tags: "shuiguo",
          page: 1,
          list: [],
          load: false
        },
      },
    };
  },
  created() {
    this.getHomeList('fujin')
  },
  methods: {
    getHomeList(type) {
      getHomeListdata(type).then(res => {
        this.categoryList[type].list = res.data[0].list;
        this.categoryList[type].load = true;
        console.log(this.categoryList);
        for (let i = 0; i < this.categoryList[type].list.length; i++) {
          this.categoryList[type].list[i].img = require('@/assets/img/home/' + this.categoryList[type].list[i].img + '.jpg')
        }
      })
    },
  }
};
</script>

<style scoped>
.category_content {
  margin-top: -5rem;
  top: 3rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background-color: #fff;
  padding: 1rem;
}

.category_nav {
  height: 20vh;
  top: 0;
  background: linear-gradient(to right, rgb(81, 148, 247), rgb(118, 187, 252));
}

.category_topbar {
  display: flex;
  align-items: center;
  overflow-x: scroll;
}

.topbar_items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 16%;
  flex: 1;
  font-size: 0.8rem;
}

.tags_img {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
}

.items_title {
  position: sticky;
}
</style>
