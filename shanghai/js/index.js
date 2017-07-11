$(function(){
	//contact
	$('.ending').click(function(){
		$(this).toggleClass('active');
	});

	//HOME

	$('.circle span').click(function(){
		$(this).addClass('cir').siblings().removeClass('cir');
		$('.service-left').find('.service-wrap').eq($(this).index()).show().siblings('.service-wrap').hide();
	});

	$('.contact-id i').mouseenter(function(){
		$(this).next().slideDown();
		$(this).find('img').attr('src','images/x3.png');
		$(this).parent().siblings().find('p').hide();
		$(this).parent().siblings().find('i img').attr('src','images/x2.png');
	});
    $('.contact-id i').mouseout(function(){
        $(this).next().slideUp();
        $(this).find('img').attr('src','images/x2.png');
        $(this).parent().siblings().find('i img').attr('src','images/x2.png');
    });

    $('.child-id8').hover(function(){
        $(this).find('p').slideToggle();
        $('.contact-id .child p').hide();
        $('.contact-id .child i img').attr('src','images/x2.png');
    });
	//页码
	$('.new-page ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});


	//轮播
	var ban = $('.container-wrap'),
        img = ban.find('img'),
        dian = $('.bcircle li'),
        flag = true,
        n = 0;
        img.eq(0).css("zIndex","3");
	    img.eq(1).css("zIndex","2");
        var t =setInterval(move,3000);
        function move(){
            img.eq(n).animate({opacity:0},1000);
            img.eq(n+1).animate({opacity:1},1000);
            dian.eq(n).css('background','#9a9b9b'); 
            dian.eq(n+1).css('background','#fb4d65'); 
            n+=1;
            if(n===img.length){
                n=0
                img.eq(n).animate({opacity:1},1000);
                dian.eq(n).css('background','#fb4d65');
            }
        }

        //小圆点点击
        $('.bcircle li').click(function(){
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
            $('.bcircle li').eq(n).css('background','#9a9b9b'); 
            $('.bcircle li').eq(index).css('background','#fb4d65');
            img.eq(index).animate({opacity:1},function(){flag=true
            });
            n=index;
        })

});