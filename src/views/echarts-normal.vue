<template>
  <div class="page">
    <canvas width="1000" height="300" id="temp"></canvas>
    <canvas width="600" height="300" id="weather"></canvas>
  </div>
  <!-- <div>echarts-normal</div> -->
</template>


<script setup lang="ts">
import { get } from '@/utils/axios';
import { onMounted, reactive } from 'vue';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;


let weatherData = reactive({})
const getUserProfile = async () => get<object>({ url: 'https://v0.yiketianqi.com/free/week?unescape=1&appid=98113739&appsecret=5nc9KM8W' });
const getWeatherFn = async () => {
  weatherData = await getUserProfile();
  console.log(weatherData);
}

getWeatherFn()

const tempFn = () => {
  var chartDom = document.getElementById('temp');
  console.log(chartDom);

  var myChart = echarts.init(chartDom);
  var option: EChartsOption;
  console.log(myChart);

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['Evaporation', 'Precipitation', 'Temperature']
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Precipitation',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type: 'value',
        name: 'Temperature',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} °C'
        }
      }
    ],
    series: [
      {
        name: 'Evaporation',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value as number + ' ml';
          }
        },
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
        ]
      },
      {
        name: 'Precipitation',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value as number + ' ml';
          }
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ]
      },
      {
        name: 'Temperature',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value as number + ' °C';
          }
        },
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };
  option && myChart.setOption(option);
}


const weatherFn = () => {
  var chartDom = document.getElementById('weather');
  console.log(chartDom);

  var myChart = echarts.init(chartDom);
  var option: EChartsOption;
  console.log(myChart);
  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
}

onMounted(() => {
  tempFn()
  weatherFn()
})
// 基于准备好的dom，初始化echarts实例



</script>

<style lang="less" scoped>
div {
  width: calc(100% - 280px);
  position: relative;
  left: 280px;
}
</style>