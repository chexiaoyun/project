$(function(){
	// banner
	lunbo1=function(){
		var ban = $('.banner_box'),
	    img = ban.find('img'),
	    dian = $('.dian li'),
	    flag = true,
	    n = 0;
	    img.eq(0).css("zIndex","3");
	    img.eq(1).css("zIndex","2");
	    var t =setInterval(move,3000);
	    function move(){
	        img.eq(n).animate({opacity:0},1000);
	        img.eq(n+1).animate({opacity:1},1000);
	        dian.eq(n).css('background','rgba(255,255,255,0.5)'); 
            dian.eq(n+1).css('background','#fff'); 
	        n+=1;
	        if(n===img.length){
	            n=0
	            img.eq(n).animate({opacity:1},1000);
	            dian.eq(n).css('background','#fff');
	        }
	    }
	    $('.dian li').click(function(){
	    	console.log(1)
	        var index=$(this).index();  //下一张
			if(!flag||index==n){return}				
			flag=false;	
			if(index<n){		
				img.eq(index).animate({opacity:1});
				img.eq(n).animate({opacity:0});
			}
			if(index>n){
				img.eq(index).animate({opacity:1});
				img.eq(n).animate({opacity:0});
			}
			$('.dian li').eq(n).css('background','rgba(255,255,255,0.5)'); 
	        $('.dian li').eq(index).css('background','#fff');
	        img.eq(index).animate({opacity:1},function(){flag=true
	        });
	        n=index;
			})
	}
	lunbo1();

	//箭头
	var flag=true;
	$('.dul ul').mouseenter(function(){
		if(flag){
			flag=false;
			$('.dul ul').animate({left:"0"});
			$(this).find('div').removeClass('jimg').addClass('rimg');
		}	
	});
	$('.dul ul').mouseleave(function(){
		if(!flag){
			$('.dul ul').animate({left:"484"},function(){flag=true});
			$(this).find('div').removeClass('rimg').addClass('jimg');	
		}	
	});

	//投资
	var tn=$('.touz3');
	tn.each(function(){
		$(this).mouseenter(function(){
			$(this).find('.kuai').css("background","#fb594e");
		}).mouseleave(function(){
			$(this).find('.kuai').css("background","#DBDADA");
		});
	});

	var timg=$('.img1');
	timg.each(function(){
		$(this).mouseenter(function(){
			$(this).find('.zhe').css("display","block");
		}).mouseleave(function(){
			$(this).find('.zhe').css("display","none");
		});
	});

	// 中环
	$('.proo').click(function(){
		$('.zhua').animate({left:"150"*($(this).index())});
		$(this).addClass('pro').siblings().removeClass();
		$(this).parent().parent().next().find('.zhonghuan').eq(($(this).index())).css("display","block").siblings().css("display","none");
	});

	// 预约购买
	$('.shop').click(function(){
		$('.time').css('display',"block");
	})

	$(".input_select").click(function(){
		var ul = $("#dropdown ul");
		if(ul.css("display")=="none"){
			ul.slideDown("fast");
		}else{
			ul.slideUp("fast");
		}
	});
	$("#dropdown ul li a").click(function(){
		var txt = $(this).text();
		$(".input_select").val(txt);
		var value = $(this).attr("rel");
		$("#dropdown ul").hide();
		$("#result").html("您选择了"+txt+"，值为："+value);
	});

	//弹出框
	$('.false').click(function(){
		$('.time').css("display","none");
	});

	$('.sub').click(function(){
		$('.form form').css("display","none");
		$('.form .success').css("display","block");
	});

	//搜索
	$('.nimg').bind('click',function(){
		$('.sous').css("display","block");
	});
	$('.ca').bind('click',function(){
		$('.sous').css('display',"none");
	});

	//综合排序
		
	//信托理财
	$('.zhongjian2btn div').click(function(){
		$(this).addClass('zhongjian2btn1').removeClass('zhongjian2btn2').siblings().removeClass('zhongjian2btn1').addClass('zhongjian2btn2');
		$(this).parent().siblings('.zhongjian2').eq($(this).index()).css('display','block').siblings('.zhongjian2').css('display','none');
	});

	//单选框
	$('.lrem .rleft').click(function(){
		$(this).find('i').toggleClass('icon');
		$('.bigxy').css('display','block');
	});

	$('.bigxy .xieyi i').click(function(){
		$(this).parents('.bigxy').css('display','none');
	})

	//实名认证
	$('.g_next').click(function(){
		$('.l1').removeClass('state').siblings('.l2').addClass('state');
		$(this).parent().css('display','none').next().css('display','block');
	});
	$('.g_tijiao').click(function(){
		$('.l3').addClass('sta').siblings().removeClass('state');
		$(this).parent().css('display','none');
		$(this).parent().prev().css('display','none');
		$(this).parent().next().css('display','block');
	});

	//找回密码
	$('.g_chongzhi').click(function(){
		$(this).parent().css('display','none').next().css('display','block');
	});
	$('.g_tj').click(function(){
		$(this).parent().css('display','none').prev('.g_ren').css('display','none');
		$(this).parent().next().css('display','block');
	});

	//支付
	$('.zf_xz1 li').click(function(){
		$(this).addClass('zf_li').find('.zq').css('display','block');
		$(this).siblings().removeClass('zf_li').find('.zq').css('display','none');
	});

	//订阅
	$('ul.d_red li').click(function(){
		$(this).addClass('rli3').find('img').css('display','block');
		$(this).siblings().removeClass('rli3').find('img').css('display','none');
	});

});