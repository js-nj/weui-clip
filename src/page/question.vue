<template>
<div class="">
    <div id="q-imgs">
      <div>123</div>
      <img class="q-img" id ="img1" src="../../static/img/1.jpg" />
      <!-- <img class="q-img" id ="img2" src="../../static/img/2.jpg" /> -->
      <!-- <img class="q-img" id ="img3" src="../../static/img/3.jpg" /> -->
      <!-- <img class="q-img" id ="img4" src="../../static/img/4.jpg" /> -->
    </div>
    <button @click="htmltoword">下载</button>
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
              c.setAttribute('width', img.height/4.6);
              c.setAttribute('height', img.width/4.6);
              canvasContext.rotate(270 * Math.PI / 180);
              canvasContext.drawImage(img, -img.width/4.6, 0,200,464);

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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    // weui.alert('alert');
    // debugger;
    this.$nextTick(function(){
      setTimeout(function(){
        // var img1 = document.getElementById("img1");
        // var img2 = document.getElementById("img2");
        // var img3 = document.getElementById("img3");
        // var img4 = document.getElementById("img4");
        // debugger
        changeDirection('img1');
        // changeDirection('img2');
        // changeDirection('img3');
        // changeDirection('img4');
      },500)
    });
  },
  methods:{
    htmltoword(){
      // debugger;
      HTMLTOWORD({
          translateDomSelector: '#q-imgs',
          ignore: ['input', '.file-uploads', '[url]']
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-tab {
  width: 100%;
}
/*.q-img {
  display: block;
  position: absolute;
  visibility: hidden;
}*/
</style>
