$(function(){
	
	$(".enclosure div span").click(function(){
		$(this).next("input").click();
	});
	
	// 删除图片
	$(".enclosure dl").on("click","dd i",function(){
		$(this).parents("dd").remove();
	});
	
	// 图片选择
	
	$("#add-pic").on("change",function(){
       	var objUrl = getObjectURL(this.files[0]) ;
       	if (objUrl) {
	        $(".enclosure dl").append("<dd><img src='" + objUrl + "' /><i></i></dd>");
       	}
   });
	
});

// 创建Blob对象
function getObjectURL(file) {
  	var url = null ;
  	if (window.createObjectURL!=undefined) { 
    	url = window.createObjectURL(file) ;
  	} else if (window.URL!=undefined) {
    	url = window.URL.createObjectURL(file) ;
  	} else if (window.webkitURL!=undefined) {
    	url = window.webkitURL.createObjectURL(file) ;
  	}
  	return url ;
}