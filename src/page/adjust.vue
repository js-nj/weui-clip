<template>
<div class="">
    <div id="q-imgs">
      <div>
        <input type="text" name="name" v-show="editFlag" v-model="wordname" placeholder="请输入文档名称" />
        <a href="javascript:;" v-if="editFlag" @click="nameword(false)" class="weui-btn weui-btn_mini weui-btn_default">确定</a>
        <a href="javascript:void(0);" v-else @click="nameword(true)" class="weui-btn weui-btn_mini weui-btn_default">编辑</a>
        <div v-html="wordname"></div>

      </div>

      <div class="" v-for="(img,index) in imgs">
        <img class="q-img" v-bind:style="{transform:img.rotateNumber,width:img.width,height:img.height}" :id="'img'+index" :src="img.src" />
        <div>
        <a href="javascript:;" id="b-xz" @click="imgchangedirection(img,index)" class="weui-btn weui-btn_mini weui-btn_default">旋转</a>
          <!-- <button id="b-xz" @click="imgchangedirection(img,index)">旋转</button> -->
        </div>
      </div>

      <!-- <img class="q-img" id ="img2" src="../../static/img/2.jpg" /> -->
      <!-- <img class="q-img" id ="img3" src="../../static/img/3.jpg" /> -->
      <!-- <img class="q-img" id ="img4" src="../../static/img/4.jpg" /> -->
    </div>
    <!-- <button @click="transform">下载</button> -->
    <a href="javascript:;" @click="transform" class="weui-btn weui-btn_primary">下载文档</a>
    <!-- <button @click="htmltoword" style="visibility:hidden;">下载</button> -->
</div>

</template>

<script>
import 'weui';
import weui from 'weui.js';
function changeDirection(id){
  var img = document.getElementById(id);

  EXIF.getData(img, function() {
    // debugger;

    var c = document.getElementById('canvas_'+id);
    if(c== null){
        // img.style.visibility = 'hidden';
        // img.style.position = 'absolute';
        c = document.createElement('canvas');
        c.setAttribute("id",'canvas_'+id);
        c.setAttribute("class",'canvas_img');
        img.parentNode.appendChild(c);
    }
    var canvasContext = c.getContext('2d');

    //获取当前设备宽度
    var phoneWidth = document.body.clientWidth;
    console.log('phoneWidth:'+phoneWidth)
    var direction = img.exifdata.Orientation;
    // debugger
    switch (direction) {
        case 3:

            break;
        case 6:
            break;
        case 8:
            // img1.rotate(-0.5 * Math.PI);
            // img.style.transform = 'rotate(-90deg)';
            // img.style.height = phoneWidth+'px';
            // //获取图片实际宽度
            // var picWidth = img.clientHeight;
            // A4纸的尺寸是，宽度16cm。对应像素  1厘米 = 28px
              // var rate = img.height/phoneWidth
              // debugger;


              // debugger;
              var rateWidth = img.naturalHeight/(img.naturalWidth/phoneWidth);
              if (rateWidth>700) {
                rateWidth = 640;
                phoneWidth = 160;
              }
              c.setAttribute('width', rateWidth);
              c.setAttribute('height', phoneWidth);
              canvasContext.rotate(270 * Math.PI / 180);
              canvasContext.drawImage(img, -phoneWidth, 0,phoneWidth,rateWidth);

              // c.setAttribute('width', img.height/4.6);
              // c.setAttribute('height', img.width/4.6);
              // canvasContext.rotate(270 * Math.PI / 180);
              // canvasContext.drawImage(img, -img.width/4.6, 0,200,464);

              // c.setAttribute('width', img.height/5);
              // console.log('width',img.height/5);
              // c.setAttribute('height', img.width/3);
              // console.log('height',img.width/3);
              // canvasContext.rotate(270 * Math.PI / 180);
              // canvasContext.drawImage(img, -img.width/3, 0,200,464);

              c.setAttribute('style','width:100%;');

              var dataURL = c.toDataURL("image/png");

              var tmpImg = document.createElement('img');
              tmpImg.setAttribute("src",dataURL);
              tmpImg.setAttribute("style",'width:100%;');
              tmpImg.setAttribute("class",'copy_canvas_img');
              img.parentNode.appendChild(tmpImg);
              //移除当前大照片
              // img.parentNode.removeChild(img);
              // c.parentNode.removeChild(c);
            break;

        case 2:
            break;
        case 4:
            break;
        case 5:
            break;
        case 7:
            break;

        default:
            debugger;
            // ctx.drawImage(img, 0, 0, resize.width, resize.height);
    }
    // var make = EXIF.getTag(this, "Make");
    // var model = EXIF.getTag(this, "Model");
    // var makeAndModel = document.getElementById("img1des");
    // makeAndModel.innerHTML = `${make} ${model}`;
  });
}
export default {
  name: 'HelloWorld',
  data () {
    return {
      editFlag:true,
      wordname:'黄天浩第十周的错题集',
      phoneWidth:'',
      msg: 'Welcome to Your Vue.js App',
      imgs:[
      {
          src:'../../static/img/1.jpg',
          rotateNumber:'rotate(270deg)',
          deg:270,
          width:'100%'
        },{
          src:'../../static/img/2.jpg',
          rotateNumber:'rotate(270deg)',
          deg:270,
          width:'100%'
        }
      ],
      deg:0
    }
  },
  computed:{
    // rotateNumber(){
    //   return 'rotate('+this.deg+'deg)';
    // }
  },
  created(){
    var that = this;
    //获取当前设备宽度
    this.phoneWidth = document.body.clientWidth;
    // weui.alert('alert');
    // debugger;
    this.$nextTick(function(){
      setTimeout(function(){

        that.imgs.forEach(function(item,index){
          if (item.deg == 90 || item.deg == 270) {
            var naturalWidth = document.getElementById('img'+index).naturalWidth;
            var naturalHeight = document.getElementById('img'+index).naturalHeight;
            console.log('naturalWidth:'+naturalWidth+',naturalHeight:'+naturalHeight)
            var rate = naturalHeight/that.phoneWidth;
            that.$set(that.imgs[index],'height',that.phoneWidth+'px');
            that.$set(that.imgs[index],'width',naturalWidth/rate+'px');
            that.$set(that.imgs[index],'rate',rate);
            that.$set(that.imgs[index],'naturalWidth',naturalWidth);
            that.$set(that.imgs[index],'naturalHeight',naturalHeight);
          }else {
            that.$set(that.imgs[index],'width','100%');
            that.$set(that.imgs[index],'height','100%');
          }
        });
      },500)
    });
  },
  methods:{
    nameword(param){
      if (param) {
        this.editFlag = true;
      }else {
        this.editFlag = false;
      }
    },
    transform(){
      this.imgs.forEach(function(item,index){
        console.log('index:'+index);
        changeDirection('img'+index);
      });
      setTimeout(function(){
        HTMLTOWORD({
          translateDomSelector: '#q-imgs',
          ignore: ['input', '.file-uploads', '[url]','.weui-btn']
        })
      },1000);
      // changeDirection('img0');
      // changeDirection('img1');
    },
    // htmltoword(){

    //   HTMLTOWORD({
    //     translateDomSelector: '#q-imgs',
    //     ignore: ['input', '.file-uploads', '[url]']
    //   })
    //   // changeDirection('img1');
    //   // debugger;

    // },
    imgchangedirection(item,index){
      // debugger;
      var tmpdeg = item.deg + 90;
      if (tmpdeg>=360) {
        tmpdeg = 0;
      }
      if (tmpdeg == 90 || tmpdeg == 270) {
        var naturalWidth = document.getElementById('img'+index).naturalWidth;
        var naturalHeight = document.getElementById('img'+index).naturalHeight;
        console.log('naturalWidth:'+naturalWidth+',naturalHeight:'+naturalHeight)
        var rate = naturalHeight/this.phoneWidth;
        this.$set(this.imgs[index],'height',this.phoneWidth+'px');
        this.$set(this.imgs[index],'width',naturalWidth/rate+'px');
        this.$set(this.imgs[index],'rate',rate);
        this.$set(this.imgs[index],'naturalWidth',naturalWidth);
        this.$set(this.imgs[index],'naturalHeight',naturalHeight);
      }else {
        this.$set(this.imgs[index],'width','100%');
        this.$set(this.imgs[index],'height','100%');
      }
      this.$set(this.imgs[index],'deg',tmpdeg);
      this.$set(this.imgs[index],'rotateNumber','rotate('+tmpdeg+'deg)');
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.weui-tab {
  width: 100%;
}
canvas {
  position: absolute;
  z-index: -1;
  visibility: hidden;
}
.copy_canvas_img {
  position: absolute;
  z-index: -1;
  visibility: hidden;
}
.canvas_img {
  position: absolute;
  z-index: -1;
  visibility: hidden;
}

</style>
