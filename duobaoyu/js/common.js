$(function(){
	
	//$("img").lazyload({effect: "fadeIn"});
	
	// 搜索类型选择
	$("#header .search .select span").click(function(){
		$(this).next("ul").slideToggle(200);
	});
	
	$("#header .search .select ul li").click(function(){
		$(this).parent().slideToggle(200);
		$(this).parent().prev("span").html( $(this).html() );
		$(this).parent().next("input").val( $(this).attr("data-val") );
	});
	
	// 购物车展开
	$("#header .head-layout .cart").bind({
		"mouseenter":function(){
			$(this).addClass("active-cart");
		},
		"mouseleave":function(){
			$(this).removeClass("active-cart");
		}
	});
	
	$(".yes-product ul li .price-del .del a").click(function(){
		if( confirm("是否确认删除该商品？") ){
			$( this ).parents("li").remove();
		}
	});
	
	
	
	$("#header .main-nav .nav .classify > ul > li").bind({
		"mouseenter":function(){
			if( $(this).index() > 2 ){
				if( $(this).parents(".classify").hasClass("classify1") ){
					$(this).find(".menu").css("bottom","-2px").show();
				}else{
					$(this).find(".menu").css("bottom","-1px").show();
				}
			}else{
				if( $(this).parents(".classify").hasClass("classify1") ){
					$(this).find(".menu").css("top","-2px").show();
				}else{
					$(this).find(".menu").css("top","-1px").show();
				}
				
			}
			$(this).addClass("bor");
		},
		"mouseleave":function(){
			$(this).find(".menu").hide();
			$(this).removeClass("bor");
		}
	});
	
	$("#header-store .main-nav .nav .classify > ul > li").bind({
		"mouseenter":function(){
			if( $(this).index() > 2 ){
				if( $(this).parents(".classify").hasClass("classify1") ){
					$(this).find(".menu").css("bottom","-2px").show();
				}else{
					$(this).find(".menu").css("bottom","-1px").show();
				}
			}else{
				if( $(this).parents(".classify").hasClass("classify1") ){
					$(this).find(".menu").css("top","-2px").show();
				}else{
					$(this).find(".menu").css("top","-1px").show();
				}
				
			}
			$(this).addClass("bor");
		},
		"mouseleave":function(){
			$(this).find(".menu").hide();
			$(this).removeClass("bor");
		}
	});
	
	// 分类鼠标悬停
	$("#header-store .main-nav .nav .classify").bind({
		"mouseenter":function(){
			if( !$(this).hasClass("active") ){
				$(this).children("ul").show();
			}
		},
		"mouseleave":function(){
			if( !$(this).hasClass("active") ){
				$(this).children("ul").hide();
			}
		}
	});
	
	$("#header .main-nav .nav .classify").bind({
		"mouseenter":function(){
			if( !$(this).hasClass("active") ){
				$(this).children("ul").show();
			}
		},
		"mouseleave":function(){
			if( !$(this).hasClass("active") ){
				$(this).children("ul").hide();
			}
		}
	});
	
	
	// 二级banner
	if( $(".second-banner .banner").length > 0 ){
		$(".second-banner .banner").flexslider({
			animation : 'slide',
			controlNav : true,
			directionNav : true,
			animationLoop : true,
			slideshow : true,
			useCSS : false,
			slideshowSpeed:5000,
			nextText: '&gt;',
        	prevText: '&lt;'
		});
	}
	
	if( $(".second-banner .banner-2").length > 0 ){
		$(".second-banner .banner-2").flexslider({
			animation : 'slide',
			controlNav : true,
			directionNav : true,
			animationLoop : true,
			slideshow : true,
			useCSS : false,
			slideshowSpeed:5000,
			nextText: '&gt;',
        	prevText: '&lt;'
		});
	}
	
	if( $(".second-banner .banner-3").length > 0 ){
		$(".second-banner .banner-3").flexslider({
			animation : 'slide',
			controlNav : true,
			directionNav : true,
			animationLoop : true,
			slideshow : true,
			useCSS : false,
			slideshowSpeed:5000,
			nextText: '&gt;',
        	prevText: '&lt;'
		});
	}
	
	if( $(".second-banner .banner-4").length > 0 ){
		$(".second-banner .banner-4").flexslider({
			animation : 'slide',
			controlNav : true,
			directionNav : true,
			animationLoop : true,
			slideshow : true,
			useCSS : false,
			slideshowSpeed:5000,
			nextText: '&gt;',
        	prevText: '&lt;'
		});
	}



	

});

function updateEndTime(obj){
	var date = new Date();
	var time = date.getTime();
 
 	$(obj).each(function(i){
 
 		var endDate =this.getAttribute("data-endtime"); 
 		var endDate1 = eval('new Date(' + endDate.replace(/\d+(?=-[^-]+$)/, function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')');
 		var endTime = endDate1.getTime(); 
 		var lag = (endTime - time) / 1000; 
  		if(lag > 0){
   			var second = Math.floor(lag % 60);    
   			var minite = Math.floor((lag / 60) % 60);
   			var hour = Math.floor((lag / 3600) % 24);
   			var day = Math.floor((lag / 3600) / 24);
			$(this).html("<strong>"+day+"</strong>天<strong>"+hour+"</strong>时<strong>"+minite+"</strong>分<strong>"+second+"</strong>秒");
  		}else{
   			$(this).html("0天0时0分0秒");
   		}
 	});

}
