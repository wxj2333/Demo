<template>
  <div>
      <a-icon type="home" class="carhome" @click="goHome"/>
      <!-- 添加选择框 -->
    <!-- 表格 -->
    <!-- 如果需要在表格中渲染图片，或者要在单元的中做操作，都需要columns属性！！！！下回一定记得 -->
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :data-source="this.$store.state.car"
      :columns="columns"
      :pagination="pagination"
      >
      <!-- 如果不能遍历出信息，或者返回重新加信息，那就要在state里建一个car，储存加入购物车的商品 -->
    <!-- <a-table-column title="" data-index="picUrl" >
      </a-table-column> -->
       <template slot="pic" slot-scope="text, record">
        <img style="heigth:50px;width:50px" :src="record.picUrl" />
      </template>
    <!-- <a-table-column title="商品信息" data-index="name" />
    <a-table-column title="商品详情" data-index="color" />
    <a-table-column title="单价" data-index="price" /> -->
    <!-- 数量选择框 -->
    <!-- <a-table-column title="数量" data-index="many" />
    <a-table-column title="金额" data-index="money" /> -->
    <!-- 这里看看有没有问题 -->
    <template slot="many" slot-scope="text, record">
    <a-input-number :onkeyup = "onkeyup" class="quantity" id="inputNumber" v-model="record.many" :min="1" :max="99" @change="onChange(record)" />
      </template>
    <template slot="operation" slot-scope="text, record">
      <a-popconfirm
          v-if="record"
          title="确定删除吗?"
          @confirm="() => onDelete(record.key)"
          cancelText="取消"
          okText="确定"
        >
          <a href="javascript:;"><a-button type="danger" :loading="loading" size="small">
        删除
      </a-button></a>
        </a-popconfirm>
      </template>
      </a-table>
      <div class="feet" style="margin:0 30px">
      <span style="margin-right: 20px">
        <template v-if="hasSelected">
          {{ `已选择 ${selectedRowKeys.length} 种商品` }}
        </template>
      </span>
      <a-button type="danger" :disabled="!hasSelected" :loading="loading" @click="selectDelete" style="margin-left: 8px;margin-top: 4px;">
        删除
      </a-button>
        <span style="position: absolute;right: 150px;margin-top: 9px;">总计：{{$store.getters.allmoney}}元</span>
      <a-button type="primary" size="large" :disabled="!hasSelected" :loading="loading" @click="buy" style="position: absolute; right: 50px;" >
        结算
      </a-button><!-- <a-modal v-model="visible" title="购买成功，是否查看历史订单" @ok="handleOk">
      <a-button type="primary" @click="goOrder()" style="margin-right:10px;">
      是的，我想看看
    </a-button>
    <a-button @click="goHome()" >不，我还想买其他东西</a-button>
    </a-modal> -->
  </div>
</div>
</template>
<script>
// import {setCookie,getCookie}from 'src/js/cookieUtil'
export default {
  data() {
    return {
      loading: false,
      selectedRowKeys: [],
      visible: false,
      pagination: {
        size: 'small'
      },
      onkeyup:cashVal => cashVal.replace(/[^\d]/g, ''),
      // parser: value => /[^\d]+$/.test(value) ? value:1,
    //   添加和删除条目来自可编辑单元格，datasource（详情,初始无）和Columns（标题）都
    columns: [
        // {
        //   title: 'name',
        //   dataIndex: 'name',
        //   width: '30%',
        //   scopedSlots: { customRender: 'name' },
        // },
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
          dataIndex: 'many',
          scopedSlots: { customRender: 'many' }

        },
        {
          title: '金额',
          dataIndex: 'money'
        },
        {
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' }
        }
      ]
    }
  },
  // 不需要传值，因为所有的购物条目存在store里
  created() {
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    }
  },
  methods: {
    // 重置函数
    // reset() {
    //   this.loading = true;
    //   // ajax request after empty completing
    //   setTimeout(() => {
    //     this.loading = false;
    //     this.selectedRowKeys = [];
    //   }, 1000);
    // },
    onSelectChange(selectedRowKeys) {
      // 记得看一下这个参数是什么，然后需要把选中的防盗门state里面去
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
      this.$store.state.selectedRowKeys = selectedRowKeys;
    },
    // 删除商品
    onDelete(key) {
      // const dataSource = [...this.dataSource];
      this.$store.commit('carDelete', key)
    },
    selectDelete(){
      this.$store.commit('selectDelete')
      this.selectedRowKeys = [];
    },
    goHome() {
      // this.visible = false;
      this.$router.push({
        name: 'Home'
      })
    },
    goOrder() {
      // this.visible = false;
      this.$router.push({
        name: 'Order'
      })
    },
    buy() {
      this.selectedRowKeys = [];
      // this.visible = true;
      const that = this;
      this.$confirm({
        title: '购买成功',
        content: '您想查看您的订单吗',
        okText: '是的，我想看看',
        okType: 'danger',
        cancelText: '不，我想继续购买其他商品',
        onOk() {
        that.$router.push({
        name: 'Order'
      });
        },
        onCancel() {
        that.$router.push({
        name: 'Home'
      })
        }
      });
      this.$store.commit('buy')
      this.$store.commit('numberAdds')
    },
    onChange(obj) {
      console.log(obj)
      this.$store.commit('changeMany', obj)
    }
  }
}
</script>
<style lang="less" scoped>
.anticon svg {
    display: inline-block;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    right: 10px;
}
img{
    height: 50px;
}
.feet{
    // width: 100%;
    height: 40px;
    margin: 0px 30px;
    margin-bottom: 15px;
    background-color: rgb(250,250,250);
}
.ant-table-wrapper {
    margin: 50px 30px 0 30px;
}
.carhome{
font-size: 30px;position:absolute;top: 10px; left: 95%;
}

</style>
