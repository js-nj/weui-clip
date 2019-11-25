<template>
<div class="weui-tab" id="tab">
    <div class="weui-navbar">
        <div class="weui-navbar__item">反馈</div>
        <div class="weui-navbar__item">表单</div>
        <div class="weui-navbar__item">上传</div>
        <div class="weui-navbar__item">其它</div>
    </div>
    <div class="weui-tab__panel" style="height:40px;">
        <div class="weui-tab__content">反馈页</div>
        <div class="weui-tab__content">表单页</div>
        <div class="weui-tab__content">上传页</div>
        <div class="weui-tab__content">其它页</div>
    </div>
</div>

</template>

<script>
import 'weui';
import weui from 'weui.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    // weui.alert('alert');
    // debugger;
    this.$nextTick(function(){
        weui.tab('#tab',{
            defaultIndex: 1,
            onChange: function(index){
                console.log(index);
            }
        });
    });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
