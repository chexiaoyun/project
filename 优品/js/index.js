$(function(){
    //选项卡
    $('.p_nav ul li').click(function(){
        if( $(this).index() == 0 ){
            $('.hua').animate({left:'0'});
        }else if( $(this).index() == 1 ){
            $('.hua').animate({left:'25%'});
        }else if( $(this).index() == 2 ){
            $('.hua').animate({left:'50%'});
        }else if( $(this).index() == 3 ){
            $('.hua').animate({left:'75%'});
        }
        $(this).addClass('li').siblings().removeClass('li');
        $(this).parent().parent().siblings().find('ul').eq($(this).index()).css('display','block').siblings().css('display','none');
       
    });

    //订单选项卡
    $('.p_dav ul li').unbind();
    $('.p_dav ul li').click(function(){
        if( $(this).index() == 0 ){
            $('.hua').animate({left:'0'});
        }else if( $(this).index() == 1 ){
            $('.hua').animate({left:'33.3%'});
        }else if( $(this).index() == 2 ){
            $('.hua').animate({left:'66.6%'});
        }
        $(this).addClass('li').siblings().removeClass('li');
        $(this).parent().parent().siblings().find('ul').eq($(this).index()).css('display','block').siblings().css('display','none');
    });

    //评论列表选项卡
    $('.l_ping ul li').click(function(){
        $(this).addClass('l_li').siblings().removeClass('l_li');
        $(this).parents('.l_ping').siblings('ul').eq($(this).index()).css('display','block').siblings('ul').css('display','none');
    });

    // 评论消息选项卡
    $('.n_head ul li').click(function(){
        if( $(this).index() == 0 ){
            $('.n_hua').animate({left:'14%'});
        }else if( $(this).index() == 1 ){
            $('.n_hua').animate({left:'64%'});
        }
        $(this).addClass('n_me').siblings().removeClass('n_me');
        $(this).parents('.n_head').siblings('.n_center').eq($(this).index()).css('display','block').siblings('.n_center').css('display','none');
    });

    //消息
    $('.n_center dl').click(function(){
        $(this).find('dt .dian').remove();
    });

    $('.p_hright').click(function(){
        $(this).find('span').remove();
    });

    //详情页
    var t=0;
    t=setInterval(function(){
         $('.x_enjoy').hide();
    },2000);

    //弹出框
    $('.x_size2 ul li').click(function(){
        $(this).addClass('eding').siblings().removeClass('eding');
        $(this).find('img').css('display','block');
        $(this).siblings().find('img').css('display','none');
    });

    //点击事件
    $('.x_shu i').click(function(){
        $('.x_show').css('display','none');
    });

    // console.log($('.p_shop ul li:gt(0)'))
    $('.p_shop ul li:gt(0)').click(function(){
        $('.x_show').css('display','block');
    });

    //取消
    $('.quxiao').click(function(){
        $(this).parents('li').css('display','none');
    });

    //弹出
    $('.s_content ul li:first-child').click(function(){
        $('.tanchu').css('display','block');
        $('.tan').css('display','block');
    });

    $('.tanchu').click(function(){
        $(this).css('display','none');
        $('.tan').css('display','none');
    });
    $('.tan ul li').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
    });

    //搜索
    $('.ss_content .s_left li').click(function(){
        $(this).parent().siblings().eq($(this).index()).css('display','block').siblings('.s_right').css('display','none');
        $(this).addClass('edit').siblings().removeClass('edit');
    });

    //侧滑
    $('.header .p_hleft').click(function(){;
        $(this).parents('.bigbox').css({"transform":"translate(70%,0px) scale(0.8)","height":$(window).height(),"overflow":"hidden"}).siblings('.h_content').css({'display':'block'});
    });

    $('.h_content .h_img').click(function(){
        $(this).parents('.h_content').css('display','none');
        $('.bigbox').css({"transform":"translate(0,0px) scale(1)","height":$(window).height(),"overflow":"auto"});
    })

    $('.h_fen li').click(function(){
        $(this).addClass('list').siblings().removeClass('list');
    })

    //图片放大
    $('.l_limg').click(function(){
        $(this).toggleClass('active');
    });


    //删除
    $('.shanchu').click(function(){
        $(this).parents('li').css('display','none');
    });
    $('.quxiao').click(function(){
        $(this).parents('li').css('display','none');
    });

    //购物车删除
    $('.delete').click(function(){
        $(this).parents('.d_pinfor.d_shop').css('display','none');
    })

    //重新派发
    $('.pf-button .no').click(function(){
        $('.dis-none').css('display','block');
    })

    $('.pf-alert .alert .title span').click(function(){
         $('.dis-none').css('display','none');
    })
    // 派发积分

    $('.xx-xiaoxi ul li.li2').click(function(){
        $('.dis-none').css('display','block');
    })


    $('.xli').click(function(){
        $('.xg_dian').css('display','block');
    });
});




new function () {
    var _self = this;
    _self.width = 750;
    _self.fontSize = 100;
    _self.widthProportion = function () {
        var p = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width;
        return p > 1 ? 1 : p < 0.5 ? 0.5 : p;
    };
    _self.changePage = function () {
        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px");
    }
    _self.changePage();
    window.addEventListener('resize', function () {
        _self.changePage();
    }, false);
};