/**
 * Created by Administrator on 2017/2/9.
 */
$(function(){
    //�ײ������л�
    //�����б�
    $('#yd-demand-list .yd-demand-need ul li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        //$(this).parents('.yd-demand-need').siblings('.yd-demand-all').find('ul').eq($(this).index()).show().siblings('ul').hide();
    });
    //ɸѡ
    $('.yd-filter-time .value ul li:gt(4)').css('margin-top','0.2rem');
    $('.yd-filter-time .value ul li:eq(5)').css('margin-left','0');
    $('.yd-fliter-location.yd-filter-project .value ul li:gt(6)').css('margin-top','0.2rem');
    //$('.yd-fliter-location.yd-filter-project .value ul li:eq(8)').css('margin-left','0');

    //ɸѡ���
    $('.yd-filter-project .value ul li').click(function(){
       $(this).addClass('active').siblings('li').removeClass('active');
    });

    //�����б���Ʒ�б�
    $('.yd-service-title ul li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        //$(this).parents('.yd-service-title').siblings('.yd-service-list').eq($(this).index()).show().siblings('.yd-service-list').hide();
    });

    //��ҵ�б�
    $('.yd-company-title ul li').click(function(){
       $(this).addClass('active').siblings('li').removeClass('active');
        //$(this).parents('.yd-company-title').siblings('.yd-company-list').eq($(this).index()).show().siblings('.yd-company-list').hide();
    });

    $('.yd-company-filter ul li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).parents('.yd-company-filter').siblings('.yd-company-skill').eq($(this).index()).show().siblings('.yd-company-skill').hide();
        if( $(this).index() == 0 ){
            $(this).parent('ul').siblings('img').css('left','14%');
        }else if( $(this).index() == 1 ){
            $(this).parent('ul').siblings('img').css('left','48%');
        }else if( $(this).index() == 2 ){
            $(this).parent('ul').siblings('img').css('left','82%');
        }
    });

    //ȷ�϶��� ѡ��֧����ʽ
    $('.yd-way3 .yd-way-img').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //���ﳵ ȫѡ
    $('.yd-all-color .yd-circle').click(function(){
        //$(this).toggleClass('active');
        //$(this).parents('.yd-shop-all').siblings('.yd-shop-wrapper').find('li .true').toggle();
        if( $(this).toggleClass('active') ){
            $(this).parents('.yd-shop-all').siblings('.yd-shop-wrapper').find('li').toggleClass('active');
        }
    });

    //���ﳵ ɾ��
    $('.yd-shop-wrapper ul li .yd-shop-title .yd-title-right').click(function(){
        if( confirm("�Ƿ�ɾ������Ʒ?") ){
           $(this).parents('li').remove();
        }
    });


});




new function () {
    var _self = this;
    _self.width = 640;
    _self.fontSize = 100;
    _self.widthProportion = function () {
        var p = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width;
        return p > 1 ? 1 : p < 0.5 ? 0.5 : p;
    };
    _self.changePage = function () {
        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px");
    };
    _self.changePage();
    window.addEventListener('resize', function () {
        _self.changePage();
    }, false);
};



