<template>
  <div class="roleManagement">
    <taskRunStatus :a="a" :table-data="tableData" />
  </div>
</template>

<script>
import taskRunStatus from '@/components/tables/taskRunStatus'
export default {
  name: 'RoleManagement',
  components: {
    taskRunStatus: taskRunStatus
  },
  data() {
    return {
      tableData: [
        {
          name: 'aaa',
          type: 0,
          startTime: '2020-8-24',
          endTime: '2022-1-5',
          number: 0,
          flow: 0,
          status: 0
        }
      ],
      a: 112
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.roleManagement {
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  position: relative;
  height: 100%;
  padding: 15px;
}
.roleManagement {
  div {
    display: inline-block;
  }
}
</style>
