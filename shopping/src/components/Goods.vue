 <template>
  <div class="main">
    <a-layout>
      <br />
      <br />
      <a-layout-sider class="siderimg">
        <a-carousel arrows dots-class="slick-dots slick-thumb">
          <a slot="customPaging" slot-scope="props">
            <img :src="getImgUrl(props.i)" />
          </a>
          <div v-for="item in 5" :key="item">
            <img :src="imgUl(item)" />
          </div>
        </a-carousel>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>{{this.$store.state.origin[id-1].name}}</a-layout-header>
        <a-layout-content>
        <a-icon type="shopping-cart" class="shopcard1" @click="gotoCar"/>
          <a-icon
          type="home"
          @click="goHome"
          class="goodsicon"
        />
          <div class="priceBox">
          <label for="price" class="priceLabel">价格</label>
            <b id="price">{{this.$store.state.origin[id-1].showprice}}</b>
          </div>
          <!-- 选择框，这里要弄一个数据插槽，可能如果v-for里是其他地方来的数据的时候，都需要数据插槽吧-->
          <!-- 不需要插槽，渲染不出来的原因是少写了id-1，你可长点心吧 -->
          <div class="colorBox">
          <label for="color" class="colorLabel">颜色</label>
            <!-- <a-radio-group default-value="0"> -->
              <!-- <div v-for="(item, index) in origin.color" :key="index" @click="selectColor(index)"> -->
                <!-- {{this.$store.state.origin[id-1].color[item]}} -->
                <a-radio-button v-for="(item, index)  in origin[id-1].color" :key="index" @click="selectColor(index)" value="index"  class="color" :class="{ liBackground:changeLeftBackground === index }">{{item}}</a-radio-button>
              <!-- </div> -->
            <!-- </a-radio-group> -->
          </div>
          <!-- 购买数量框 -->
          <!-- 这里是直接设置的共同数据many，但实际上这里应该只修改当前页面的数量，当按下加入购物车顺势将many加入car，需新建 -->
          <div class="quantityBox">
          <label for="quantity" class="quantityLabel">数量</label>
            <a-input-number class="quantity" id="inputNumber" v-model="value" :min="1" :max="99" @change="onChange" />
            <!-- 当前值：{{ this.$store.state.origin[id-1].many }} -->
          </div>
          <div class="choose">
          <a-button type="danger" @click="buynow()">立即购买</a-button>
          <a-button type="danger" ghost @click="goCar()">加入购物车</a-button>
          </div>
        </a-layout-content>
        <a-layout-footer>
          <div class="serverBox">
          <label for="server" class="serverLabel">服务承诺</label>
          <a-row type="flex" justify="space-around" class="server">
      <a-col :span="4">
        正品保障
      </a-col>
      <a-col :span="4">
        急速退款
      </a-col>
      <a-col :span="4">
        赠运费险
      </a-col>
    </a-row>
    </div>
        </a-layout-footer>
      </a-layout>
    </a-layout>
      <div class="detail">
    <a-descriptions title="产品参数: ">
    <a-descriptions-item label="品牌:">
      Maden/马登
    </a-descriptions-item>
    <a-descriptions-item label="功能:">
      装饰
    </a-descriptions-item>
    <a-descriptions-item label="闭合方式:">
      系带
    </a-descriptions-item>
    <a-descriptions-item label="颜色:">
      白色 黑色
    </a-descriptions-item>
    <a-descriptions-item label="材质:">
      雪纺
    </a-descriptions-item>
    <a-descriptions-item label="成分含量:">
      95%以上
    </a-descriptions-item>
    <a-descriptions-item label="款式:">
      星星款
    </a-descriptions-item>
    <a-descriptions-item label="风格:">
      复古
    </a-descriptions-item>
    <a-descriptions-item label="袖长:">
      长袖
    </a-descriptions-item>
    <a-descriptions-item label="裙长:">
      长裙
    </a-descriptions-item>
    <a-descriptions-item label="廓形:">
      A型
    </a-descriptions-item>
    <a-descriptions-item label="流行元素:">
      荷叶边
    </a-descriptions-item>
    <a-descriptions-item label="上市年份:">
      2020年
    </a-descriptions-item>
    <a-descriptions-item label="适用年龄:">
      18-24周岁
    </a-descriptions-item>
    <a-descriptions-item label="产品产地:">
      越南
    </a-descriptions-item>
    <a-descriptions-item label="售后保障:">
      门店退换
    </a-descriptions-item>
    <a-descriptions-item label="销售渠道类型:">
      纯电商(只在线上销售)
    </a-descriptions-item>
  </a-descriptions>
      </div>
  </div>
</template>

<script>
// import store from "../store/index.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: 1,
      many: 1,
      changeLeftBackground: 0
      // parser : value => /[^\d]+$/.test(value) ? value : 1
    };
  },
  computed: {
    ...mapState(["origin"])
  },
  created() {
    this.id = Number(this.$route.params.id);
    console.log(this.id);
    this.many = this.value;
    // const length = Number(this.$store.state.origin[this.id - 1].color.length);
    //  getColor();
    // const color = this.$store.state.origin[this.id - 1].color;
    // const length = color.length;
  },
  methods: {
    getImgUrl(i) {
      i++;
      // this.baseUrl = `../assets/${this.id}`
      return require("../assets/" + this.id + " (" + i + ").jpg");
    },
    imgUl(item) {
      return require("../assets/" + this.id + " (" + item + ").jpg");
    },
    // getColor(){
    //   const color = this.$store.state.origin[this.id - 1].color;
    //   length=color.length;
    // },
    onChange(value) {
      console.log("changed", value);
      this.value = value.toString().replace(/[^\d]+$/, '');
      // this.value = /[^\d]+$/.test(value) ? value : 1;
      console.log("1", this.value);
      console.log("2", value);
      this.many = value;
    },
    // inputCheck(){
    //   debugger
    //   const o = document.getElementById("myInput").value;
    //   document.getElementById("myInput").value = /[^\d]+$/.test(o) ? o : 1;
    // },
    // 当选中一个颜色就更新(不确定)
    selectColor(index) {
      this.changeLeftBackground = index;
      // this.onColor = this.$store.state.origin[this.id - 1].color.indexOf(item)
      this.onColor = index
      console.log(this.onColor)
      console.log(this.$store.state.car);
      // debugger
    },
    gotoCar() {
      this.$router.push({
        name: 'Car'
      })
    },
    goCar() { // 点击加入购物车执行此函数
      debugger
      const testobj = { ...this.$store.state.car };
      console.log(testobj);
      if (this.flag === 0){
        this.$message.warning('请选择颜色');
      } else {
      // 传id给store，让他加上数据，但是不用传给car页面
      console.log(testobj);
      console.log(this.many);
      const obj = {
        id: this.id - 1,
        many: this.many,
        onColor: this.onColor ? this.onColor : 0
      };
      debugger
      console.log(obj.onColor);
      this.$store.commit("carAdd", obj);
      this.$message.success(
        '加入购物车成功，请点击右上方购物车图标查看', 3
      );
      // debugger
      console.log(this.$store.state.car);
      }
    },
    goHome() {
      this.$router.push({
        name: "Home"
      });
    },
    buynow() {
      const obj = { id: this.id - 1, many: this.many };
      const newobj = { id: this.id - 1, many: this.many, color: this.onColor };
      console.log(this.many)
      this.$store.commit("numberAdd", obj);
      this.$store.commit("buyNow", newobj);
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
      }
    }
  }
;
</script>
<style lang="less" scoped>
.liBackground 
{  
    color: red;
}
.ant-radio-button-wrapper:hover {
    color: rgb(245, 155, 102);
}
.serverLabel{
    position: relative;
    top: 10px;
    left: 0px;
    font-size: 13px;
}
.priceLabel,.colorLabel,.quantityLabel{
    position: relative;
    top: 0px;
    left: 50px;
    font-size: 13px;
}
.priceLabel{
    left: 6px;
}
#price{
    margin-left: 33px;
    margin-top: 6px;
    font-size: 28px;
    color: red;
}
.main {
  width: 900px;
  height: 413px;
  position: absolute;
  top: 50px;
  left: 194px;
}
.color,
.quantity {
  margin-left: 83px;
  margin-top: 22px;
}
.ant-btn {
    padding: 0 30px;
    margin-right: 20px;
    }
.ant-layout-content,.ant-layout-footer {
   background-color: #fff;
}
.ant-layout-sider {
    background: #fff;
}
.priceBox{
  background-color: rgb(217, 217, 217);
  margin-left: 44px;
}
.colorBox,.quantityBox{
  margin-top: 32px;
}
.ant-carousel ::v-deep .slick-dots {
  height: auto;
}
.ant-carousel ::v-deep .slick-slide img {
  border: 0;
  display: block;
  margin: auto;
  max-width: 100%;
}
.ant-carousel ::v-deep .slick-thumb {
  bottom: -60px;
}
.ant-carousel ::v-deep .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel ::v-deep .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel ::v-deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
.ant-layout-header {
  width: 120%;
  background: #fff !important ;
  height: 60px;
  padding-left: 48px;
  margin-left: 324px;
  line-height: 30px;
  font-size: 16px;
  word-break: break-all;
}
ul{
  border: 1px solid red !important;
}
.detail{
    position: absolute;
    top: 470px;
    border: 1px solid red;
    padding: 14px;
}
.choose{
  margin-top: 54px;
  margin-left: 50px;;
}
.server{
  transform: translate(90px, -10px);
}
.siderimg{
  flex: 0 0 40% !important;
  max-width: 40% !important;
}
.goodsicon{
font-size: 30px;position:absolute;top: -35px; right: -15%;
}
.shopcard1{
font-size: 30px;position:absolute;top: -35px; right: -6%;
}
</style>
