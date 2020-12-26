// 实现第一个轮播功能
var number=1;
function fun() {
  // body...
  number++;
  if (number>4){
    number=1;
  }
  var img =document.getElementById('banner_img');
  img.src="../images/banner/banner_"+number+".png";
}

// 入口函数
window.onload = function(){
  //获取对应需要变化的变量
  var productbtn = document.getElementsByClassName("productbar_item");
  var productcell = document.getElementsByClassName("productbar_cell");

  // 测试是否得到变量参数
  //alert(productbtn);
  //alert(productcell);

  //循环判断点击事件
  for(let i=0 ; i<productbtn.length ; i++ ){
    productbtn[i].onclick = function(){
      // 测试是否得到变量参数
      alert(productbtn[i]);
      alert(productcell[i]);

      if(i != 0){
        productcell[0].style.display = "none";
      }

      productcell[i].style.display = "absolute";
    }
}


//定义定时器,1秒执行一次
self.setInterval(fun,3000);//1秒轮换一次

window.onscroll = function(){
  var navbar = document.getElementsByClassName("navbar");
  //滑动导航条背景颜色变化
  var scrollTop = document.documentElement.scrollTop;
  if(scrollTop > 0){
    // alert(navbar);
    // this.navbar.className = "navbar navbar-expand-sm navbar-primary fixed-top navbar_bg"
  }else{
    // this.navbar.className = "navbar navbar-expand-sm navbar-primary fixed-top"
  }
  console.log(scrollTop);
}






}
