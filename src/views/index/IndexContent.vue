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
import hardwareStatus from './hardwareStatus'
import taskStatus from './taskStatus'
import piecharts from '../charts/piecharts'
import taskRunStatus from '../views/taskStatus'
import statistics from './statistics'

export default {
  name: 'IndexContent',
  components: {
    hardwareStatus,
    taskStatus,
    piecharts,
    taskRunStatus,
    statistics
  }
}
</script>
<style scoped>
.task {
  display: flex;
}
</style>
