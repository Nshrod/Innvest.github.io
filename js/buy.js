// 屏幕启动运行事件
window.onload = function(){
  var btn = document.getElementById("table_item_button");
  var item = document.getElementById("table_item_select");

  // 点击事件
  btn.onclick = function(){
    //alert("得到点击事件");
    item.style.display = "inline";
  }
}
