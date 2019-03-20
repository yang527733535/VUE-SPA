<template>
  <el-input-number size="mini" v-model="num2" @change="handleChange" :min="1" :max="max" label="描述文字"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: this.initcount
      };
    },
    props:["max","initcount","goodsid"],
       
    methods: {
      handleChange(value) {
        // console.log(value);
        //每当数量值改变 则立即把最新的数量同步到购物车中，覆盖之前的数量值
        this.$store.commit('updateGoodsInfo',{id:this.goodsid,count:value} )
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
