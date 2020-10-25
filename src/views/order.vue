<template>
  <div>
    <el-col>
      <el-row>
        <div>
          <span>收货地址：</span
          ><span style="font-size: 10px">XXXXXXXXXXXXXXX</span>
        </div>
        <div>
          <span>运送方式：</span><span style="font-size: 10px">快递</span>
        </div>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <div>卖家信息</div>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="name"  width="150">
          </el-table-column>
          <el-table-column prop="value"> </el-table-column>
        </el-table>
      </el-row>
      <el-divider></el-divider>
       <el-row>
        <div>订单信息</div>
        <el-table :data="OrderData" stripe style="width: 100%">
          <el-table-column prop="name"  width="150">
          </el-table-column>
          <el-table-column prop="value"> </el-table-column>
        </el-table>
      </el-row>
      <el-divider></el-divider>
       <el-row>
        <div>付款信息</div>
        <el-table :data="PaymentData" stripe style="width: 100%">
          <el-table-column prop="name"  width="150">
          </el-table-column>
          <el-table-column prop="value"> </el-table-column>
        </el-table>
      </el-row>
    </el-col>

    <el-button type="primary" style="margin-top:30px">确认付款</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '昵称',
          value: 'yifushi8'
        }, {
          name: '真实姓名',
          value: '徐**'
        }, {
          name: '城市',
          value: '广东 东莞'
        }, {
          name: '联系电话',
          value: '13431****70'
        }],
        OrderData: [{
          name: '订单编号',
          value: '12037767404546134376'
        }, {
          name: '支付宝交易号',
          value: '20201012220011084157375860136'
        }, {
          name: '创建时间',
          value: '2020-10-12 23:32:11'
        }, {
          name: '付款时间',
          value: '2020-10-12 23:32:44'
        }],
        PaymentData: [{
          name: '商品总价',
          value: '￥353.00'
        }, {
          name: '运费',
          value: '￥8.00'
        }, {
          name: '优惠券抵扣',
          value: '-￥0.03'
        }, {
          name: '秋冬季上新',
          value: '-￥20.00'
        }, {
          name: '红包抵扣',
          value: '-￥0.80'
        }, {
          name: '实付款',
          value: '￥340.17 元'
        }]
      }
    }
  }
</script>