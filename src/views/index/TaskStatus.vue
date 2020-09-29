<template>
  <div class="taskStatus">
    <h4>任务状态</h4>
    <div class="taskStatus-main flex">
      <div class="txt-center">
        <span>任务状态</span>

        <div v-if="status == 0" class="wonOuter-error">
          <div class="icon-status-error">异常</div>
        </div>
        <div v-else class="wonOuter-normal">
          <div class="icon-status-normal">正常</div>
        </div>
      </div>
      <div class="flex flexwrap">
        <div class="column green">
          <span>15</span>
          <span>正常任务</span>
        </div>
        <div class="column pink">
          <span>1</span>
          <span>异常任务</span>
        </div>
        <div class="column brown">
          <span>10</span>
          <span>未激活任务</span>
        </div>
        <div class="column green">
          <span>5</span>
          <span>总任务</span>
        </div>
      </div>
    </div>
    <div class="taskStatus-footer">
      <ul class="flex">
        <li>
          <span class="blue" />
          <span>党政军:</span>
          <span>12</span>
        </li>
        <li>
          <span class="blue" />
          <span>企事业:</span>
          <span>11</span>
        </li>
        <li>
          <span class="blue" />
          <span>驻地外:</span>
          <span>10</span>
        </li>
        <li>
          <span class="blue" />
          <span>其他:</span>
          <span>9</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskStatus',
  data() {
    return {
      status: 0
    }
  }
}
</script>

<style scoped>
h4 {
  font-size: 16px;
}
.taskStatus {
  width: 50%;
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  font-size: 14px;
  margin-top: 10px;
  margin-right: 10px;
}

.txt-center {
  text-align: center;
  border-right: 1px solid #cccccc;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  margin-top: -20px;
}

.icon-status-error {
  width: 110px;
  height: 110px;
  line-height: 110px;
  background-color: #d3616b;
  border-radius: 50%;
  color: #fff;
  font-size: 30px;
}

.icon-status-normal {
  width: 110px;
  height: 110px;
  line-height: 110px;
  background-color: #5da3c7;
  border-radius: 50%;
  color: #fff;
  font-size: 30px;
}

.flex {
  display: flex;
  justify-content: space-around;
}

.blue {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #3d70db;
  border-radius: 50%;
}

span {
  margin: 0 5px;
}

.flexwrap {
  flex-wrap: wrap;
  width: 50%;
  height: 228px;
  font-size: 20px;
  align-content: space-around;
}

.taskStatus-main {
  padding: 25px;
  height: 258px;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  width: calc(50% - 8px);
  height: calc(50% - 8px);
  justify-content: space-around;
  color: #81969b;
  border: 1px solid;
}

.green {
  background-color: #e8f6f7;
  border-color: #d6ebee;
}

.pink {
  background-color: #f8e9ee;
  border-color: #eac9d4;
}

.brown {
  background-color: #f9f2e8;
  border-color: #ded9c3;
}

.wonOuter-error {
  border: 2px solid #d3616b;
  padding: 2px;
  border-radius: 50%;
  margin-top: 20px;
}

.wonOuter-normal {
  border: 2px solid #5da3c7;
  padding: 2px;
  border-radius: 50%;
  margin-top: 20px;
}
</style>
