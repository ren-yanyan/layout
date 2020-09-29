<template>
  <div class="piecharts">
    <el-row>
      <el-col :span="24">
        <h4>任务失败率</h4>
      </el-col>
    </el-row>
    <div v-if="data.chartsdata.length > 0" class="flex-row">
      <div
        v-for="(item, i) in data.chartsdata"
        :key="i"
        class="echarts-container"
      >
        <div :id="'mychart' + i" class="cricle" />
        <label>{{ item.taskname }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Piecharts',
  data() {
    return {
      data: {
        id: 'aa',
        success: true,
        code: '0',
        message: 'success',
        chartsdata: [
          {
            successValue: 43,
            failValue: 14,
            total: 57,
            taskname: '任务一'
          },
          {
            successValue: 50,
            failValue: 14,
            total: 64,
            taskname: '任务二'
          },
          {
            successValue: 60,
            failValue: 14,
            total: 74,
            taskname: '任务三'
          },
          {
            successValue: 70,
            failValue: 14,
            total: 84,
            taskname: '任务四'
          },
          {
            successValue: 80,
            failValue: 14,
            total: 84,
            taskname: '任务五'
          }
        ]
      }
    }
  },
  mounted() {
    this.drowMyChart()
  },
  methods: {
    drowMyChart: function() {
      var charts = this.data.chartsdata
      charts.forEach((o, i) => {
        var myChart = this.$echarts.init(
          document.getElementById('mychart' + i)
        )
        var option = {
          color: ['#9ebdec', '#d07888'],
          title: {
            text: ((o.failValue / o.total) * 100).toFixed(0) + '%',
            // subtext: (o.failValue/o.total* 100).toFixed(0)  + '%',
            x: 'center',
            y: '45%',
            textStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              color: ['#333']
            }
          },
          tooltip: {
            trigger: 'item',
            transitionDuration: 0, // 防止tooltip的抖动
            formatter: function(params) {
              var str =
                params.marker +
                params.name +
                '<br>' +
                '<span style="color: #F2E501;font-family: DIGITALDREAMFAT">' +
                params.percent +
                '%' +
                '</span>'
              return str
            }
          },
          series: [
            {
              radius: ['50%', '70%'],
              center: ['50%', '55%'],
              type: 'pie',
              avoidLabelOverlap: false,
              label: {
                normal: {
                  position: 'inner', // 隐藏引导线
                  show: false, // 隐藏标识文字
                  align: 'center',
                  verticalAlign: 'middle'
                }
              },
              // labelLine: {
              //     show: true,
              //     smooth: 0.1,
              //     length: 2,
              //     length2: 0,
              //     lineStyle: {
              //         color: 'rgba(255, 255, 255, 1)',
              //         width: 2
              //     },

              // },
              data: [
                { value: o.successValue, name: '成功' },
                { value: o.failValue, name: '失败' }
              ]
            }
          ]
        }
        myChart.setOption(option)
      })
    }
  }
}
</script>

<style scoped>
h4 {
  font-size: 16px;
}

#mychart {
  width: 100px;
  height: 100px;
  margin-left: 10px;
}

.piecharts {
  width: 50%;
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  font-size: 14px;
  margin-top: 10px;
}

.echarts-container {
  width: 30%;
  height: 20%;
  margin: 5px;
}

.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.cricle {
  width: 130px;
  height: 130px;
}
</style>
