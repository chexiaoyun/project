$(function(){
	
	// 收货地址选择
	$(".settlement-page .buyer").on("click"," ul li i",function(){
		$(this).parents("li").addClass("active").siblings().removeClass("active");
	});
	
	// 送货方式
	$(".settlement-page .inventory .left ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	
	// 新增收货地址
	$(".settlement-page .section .title a.add-address").click(function(){
		$(".add-consignee").fadeIn(300);
		$(".add-consignee .add-consignee-c").css({"-webkit-transform":"scale(1)","transform":"scale(1)"});
	});
	
	$(".add-consignee .add-consignee-c .title span").click(function(){
		$(".add-consignee .add-consignee-c").css({"-webkit-transform":"scale(0)","transform":"scale(0)"});
		$(".add-consignee").fadeOut(300);
	});
	
	// 支付方式选择
	$(".cashier-page .payment-type ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	// 新增地址确认
	$(".add-consignee-c .content li.personal-sub input").click(function(){
		var html="<li><i></i>";
		html += "<span>" + $("input.consignee").val() + "</span>";
		html += "<span>" + $("select.province").val() + $("select.city").val() + $("select.area").val() + "&nbsp;" + $("input.detail-address").val() + "</span>";
		html += "<span>" + $("input.moblie").val() + "</span>";
		html += "</li>";
		$(".settlement-page .section .buyer ul").prepend(html);
		$(".add-consignee .add-consignee-c").css({"-webkit-transform":"scale(0)","transform":"scale(0)"});
		$(".add-consignee").fadeOut(300);
		$(".settlement-page .section .buyer ul li").eq(0).addClass("active").siblings().removeClass("active");
	});
	
});
