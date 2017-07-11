$(function(){
    //轮播
    var ban = $('.yd-login-banner'),
        img = ban.find('.yd-login-img'),
        span = ban.find('span'),
        dian = $('.yd-login-circle li'),
        flag = true,
        n = 0;
    img.eq(0).css("zIndex","100");
    img.eq(1).css("zIndex","2");
    var t =setInterval(move,3000);
    function move(){
        img.eq(n).animate({opacity:0},1000);
        img.eq(n+1).animate({opacity:1},1000);
        span.eq(n).animate({opacity:0},1000);
        span.eq(n+1).animate({opacity:1},1000);
        dian.eq(n).css('background','#ddd');
        dian.eq(n+1).css('background','#35c3ec');
        n+=1;
        if(n===img.length){
            n=0
            img.eq(n).animate({opacity:1},1000);
            span.eq(n).animate({opacity:1},1000);
            dian.eq(n).css('background','#35c3ec');
        }
    }

    //小圆点点击
    $('.yd-login-circle li').click(function(){
        var index=$(this).index();  //下一张
        if(!flag||index==n){return}
        flag=false;
        if(index<n){
            img.eq(index).fadeIn(200);
            img.eq(n).fadeOut(200);
            span.eq(index).fadeIn(200);
            span.eq(n).fadeOut(200);
        }
        if(index>n){
            img.eq(index).animate({opacity:1});
            img.eq(n).animate({opacity:0});
            span.eq(index).animate({opacity:1});
            span.eq(n).animate({opacity:0});
        }
        $('.yd-login-circle li').eq(n).css('background','#ddd');
        $('.yd-login-circle li').eq(index).css('background','#35c3ec');
        img.eq(index).animate({opacity:1},function(){flag=true
        });
        span.eq(index).animate({opacity:1},function(){flag=true
        });
        n=index;
    });

//    获取验证码
    $(".yd-login-number .yd-number-right").click(function(){
        $(this).hide();
        $('.yd-send_code').show();
        $(".yd-send_code .yd-repeat").css("display","block");

        /*倒计时*/
        obt=function(){
            var time=60;
            var time_f;
            time_f=setInterval(function(){
                if(time==1){
                    clearInterval(time_f);
                    $(" .yd-send_code .yd-repeat").hide();
                    $(".yd-send_code .yd-obtain").show().html("重新获取");
                    $(" .yd-send_code .yd-repeat .yd-count_down").html(60);
                }else{
                    time--;
                    $(" .yd-send_code .yd-repeat .yd-count_down").html(time);
                }
            },1000);
        }
        obt();
    });
    $(".yd-send_code .yd-obtain").click(function(){
        $(this).hide();
        $(".yd-send_code .yd-repeat").css("display","block");
        obt();
    });
});