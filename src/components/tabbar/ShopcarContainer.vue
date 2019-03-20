<template>
    <div>
         <h3>car</h3>
         <el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>


<style lang="scss" scoped>

</style>
