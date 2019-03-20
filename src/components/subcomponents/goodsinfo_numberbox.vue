<template>
  <el-input-number size="mini" v-model="num1" @change="handleChange" :min="1" :max="max" label="描述文字"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1
      };
    },
    props:["max"],
       
    methods: {
      handleChange(value) {
         this.$emit('getconut',value)
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
