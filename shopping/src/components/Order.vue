<template>
 <div>
    <a-icon type="home" @click="goHome"  class="homeicon"/>
    <!-- 表格 -->
    <a-table
      :data-source="this.$store.state.buy"
      :columns="columns"
      :pagination="pagination"
      >
      <template slot="pic" slot-scope="text, record">
      <img  :src="record.picUrl" />
      </template>
      <!-- 如果不能遍历出信息，或者返回重新加信息，那就要在state里建一个car，储存加入购物车的商品 -->
    <!-- <a-table-column title="商品信息" data-index="name" />
    <a-table-column title="商品详情" data-index="onColor" />
    <a-table-column title="单价" data-index="price" />
    数量选择框
    <a-table-column title="数量" data-index="many" />
    <a-table-column title="金额" data-index="money" /> -->
      </a-table>
  </div>
</template>

<script>
// import {setCookie,getCookie}from 'src/js/cookieUtil'
export default {
  data(){
    return {
      pagination: {
        size: "small"
      },
    columns: [
        {
          title: '',
          dataIndex: 'picUrl',
          scopedSlots: { customRender: 'pic' }
        },
        {
          title: '商品信息',
          dataIndex: 'name'
        },
        {
          title: '商品详情',
          dataIndex: 'onColor'
        },
        {
          title: '单价',
          dataIndex: 'showprice'
        },
        {
          title: '数量',
          dataIndex: 'many'
        },
        {
          title: '金额',
          dataIndex: 'money'
        }
      ]
    }
  },
    methods: {
    goHome() {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ant-table-wrapper {
    margin: 50px 30px 0 30px;
}
.anticon .anticon-home svg{
    display: inline-block;
    width: 25px;
    height: 25px;
}
img{
    height: 50px;
    width:50px
}
.homeicon{
  font-size: 30px;position:absolute;top: 10px; left: 95%;
}

</style>
