<template>
  <div>
    <el-row>
      <el-col :span="4">
      <div class="demo-basic--circle">
        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
      </div>
      <div class="sub-title">王大帅</div>



    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="收货地址">
            XXXXXX
        </el-form-item>
        <el-form-item label="个人积分">
            12345
        </el-form-item>
        <el-form-item label="我的红包">
            12345
        </el-form-item>
    </el-form>



      <div class="block" style="margin-top:20px">
        <div style="margin-bottom:10px">购物历史</div>
        <el-timeline>
            <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp">
            {{activity.content}}
            </el-timeline-item>
        </el-timeline>
        </div>
      </el-col>

      <el-col :span="20">
        <el-row>
          <el-col :span="12">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span><i class="el-icon-bank-card"></i>待付款</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >查看详情</el-button
                >
              </div>
              <div v-for="o in wait_to_pay" :key="o" class="text item">
                {{ o }}
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span><i class="el-icon-sell"></i>待发货</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >查看详情</el-button
                >
              </div>
              <div v-for="o in wait_to_send" :key="o" class="text item">
                {{ o }}
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-row style="margin-top: 20px">
          <el-col :span="12">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span><i class="el-icon-box"></i>待收货</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >查看详情</el-button
                >
              </div>
              <div v-for="o in wait_to_get" :key="o" class="text item">
                {{ o }}
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span><i class="el-icon-chat-dot-square"></i>待评价</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >查看详情</el-button
                >
              </div>
              <div v-for="o in wait_to_comment" :key="o" class="text item">
                {{ o }}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "personal",
  components: {},
  data() {
    return {
      wait_to_pay: [
        "TNF北面帽子户外男女棒球帽透气...",
        "创意立体可爱萌系动物陶瓷杯子...",
        "现代简约北欧实木落地式衣帽架...",
        "SK-II前男友面膜 贴片面膜补水舒缓...",
      ],
      wait_to_send: [
        "TNF北面帽子户外男女棒球帽透气...",
        "创意立体可爱萌系动物陶瓷杯子...",
        "现代简约北欧实木落地式衣帽架...",
        "SK-II前男友面膜 贴片面膜补水舒缓...",
      ],
      wait_to_get: [
        "TNF北面帽子户外男女棒球帽透气...",
        "创意立体可爱萌系动物陶瓷杯子...",
        "现代简约北欧实木落地式衣帽架...",
        "SK-II前男友面膜 贴片面膜补水舒缓...",
      ],
      wait_to_comment: [
        "TNF北面帽子户外男女棒球帽透气...",
        "创意立体可爱萌系动物陶瓷杯子...",
        "现代简约北欧实木落地式衣帽架...",
        "SK-II前男友面膜 贴片面膜补水舒缓...",
      ],
       squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
       activities: [{
          content: 'TNF北面帽子户外男女棒球帽透气...',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '创意立体可爱萌系动物陶瓷杯子...',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '现代简约北欧实木落地式衣帽架',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: 'SK-II前男友面膜 贴片面膜补水舒缓...',
          timestamp: '2018-04-03 20:46'
        }]
    };
  },
  methods: {},
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>