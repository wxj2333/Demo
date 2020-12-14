<template>
  <a-layout>
    <br />
    <br />
    <a-layout-header style="background-color: transparent;">
      <a-input-search
        placeholder="请输入商品名称"
        enter-button
        :button="button"
        @search="onSearch"
        style="width: 400px"
      />
    </a-layout-header>
    <a-icon type="shopping-cart" class="shopcard" @click="gotoCar"/>
    <a-icon type="history" class="his" @click="gotoOrder" />
    <br />
    <br />
    <div class="cards">
    <!-- 给弄一个循环row生成三行row -->
      <a-layout-content >
        <!-- <a-row type="flex" justify="space-around">
          <a-col :span="4"> -->
            <a-card hoverable style="width: 250px;margin:20px 50px 20px 0px;" v-for="obj in this.$store.state.searchers" :key="obj.id" @click="showgood(obj.id)">
              <img slot="cover" alt="example" :src="obj.picUrl" />
              <!-- 价格：this.$store.state.origin[11].price看行不行 -->
              <a-card :title="obj.showprice" class="smallcard">
                <a slot="extra" href="#">已有{{obj.number}}购买</a>
                {{obj.name}}
              </a-card>
            </a-card>        
      </a-layout-content>
      </div>
  </a-layout>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  data() {
    return {
      button:{
        type:"danger"
      }
    }
  },
  created() {
    this.$store.commit('query', '');
  },
  methods: {
    showgood(id) {
      console.log(id)
      this.$router.push({
        name: 'Goods',
        params: { id: id + 1 }
      })
    },
   onSearch(value){
      console.log(value)
      console.log(JSON.stringify(this.$store.state.origin.filter(item => item.name.includes(value))))
      if (JSON.stringify(this.$store.state.origin.filter(item => item.name.includes(value))) === "[]"){
        debugger
        this.$notification.error({ 
        message: '搜索失败',
        description:
          '小店无该种商品，建议搜索衬衣，长裙，裤子，耳环，项链，手链,'
      });
      // alert('小店无该种商品，建议搜索衬衣，长裙，裤子，耳环，项链，手链, 或直接按下搜索键浏览全部宝贝')
      } else {
      debugger
      this.$store.commit('query', value);
      }
    },
    gotoOrder() {
      this.$router.push({
        name: 'Order'
      })
    },
    gotoCar() {
      this.$router.push({
        name: 'Car'
      })
    }
  }
}
</script>
<style lang="less" scope>
.ant-card{
  display:inline-block;
}
.cards{
  margin-left: 50px;
}
[data-icon="shopping-cart"],[data-icon="history"]{
    display: inline-block;
    width: 30px;
    height: 30px;
}

.ant-input-group {
    box-sizing: border-box;
    margin-left: 60%;
}
.ant-layout-header {
  align-items: center;
  margin: 0px 50%;
  transform: translate(-50%, 0);
  background-color: transparent;
}
.ant-input-group-wrapper {
  transform: translate(-50%, 0);
}
img {
  width: 100%;
  height: 100%;
}
a {
    color: grey !important;
    font-size: 11px;
}
.ant-card-head-title {
    color: red;
}
.ant-input-search-button {
    background-color: red !important;
    border-color: red !important;
}
.smallcard{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;-webkit-line-clamp: 2;line-clamp: 2;-webkit-box-orient: vertical;
}
.shopcard{
position: absolute; top: 10px; left: 88%;
}
.his{
  position: absolute; top: 10px; left: 95%
}
</style>
