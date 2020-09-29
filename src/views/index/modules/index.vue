<template>
  <div>
    <hardwareStatus />
    <div class="task">
      <taskStatus />
      <piecharts />
    </div>
    <statistics />
    <taskRunStatus />
  </div>
</template>

<script>
import HardwareStatus from '@/components/hardwareStatus/hardwareStatus'
import TaskStatus from '@/components/taskStatus/taskStatus'
import Piecharts from '@/components/charts/piecharts'
import TaskRunStatus from '@/components/tables/taskRunStatus'
import Statistics from '@/components/statistics/statistics'

export default {
  name: 'IndexContent',
  components: {
    HardwareStatus,
    TaskStatus,
    Piecharts,
    TaskRunStatus,
    Statistics
  }
}
</script>
<style scoped>
.task {
  display: flex;
}
</style>
