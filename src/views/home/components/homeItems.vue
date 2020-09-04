<template>
  <div id="home_items">
    <div class="small_items" v-for="item in itemList" @click="toList">
        <div>
            <img :src="item.img">
        </div>
            {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
    props:{
        itemList:Array
    },
    created(){
        
    },
    methods:{
        toList(){
            this.$router.push('/categoryList')
        }
    }
}
</script>

<style>
    #home_items{
        display: flex;
        flex-wrap: wrap;
    }
    .small_items{
        height: 4rem;
        max-width: 20%;
        min-width: 15%;
        padding: 0 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        flex: 1;
        flex-direction:column;
        flex-wrap: wrap;
        color: #444;
    }
    .small_items img{
        height: 2rem;
        margin: 0.2rem;
    }
</style>