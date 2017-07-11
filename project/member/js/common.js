

//适配
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
    }
    _self.changePage();
    window.addEventListener('resize', function () {
        _self.changePage();
    }, false);
};


$(function(){
    //商品收藏
    $('.yd-Setup-tit ul li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).parents('.yd-Setup-tit').siblings('.yd-collect-list').find('ul').eq($(this).index()).show().siblings('ul').hide();
    });

    //取消收藏
    $('.yd-collect-list ul li .yd-li-right .yd-li-price strong').click(function(){
        if( confirm("是否取消收藏?") ){
            $(this).parents('li').remove();
        }
    });

    //商品评价
    $('.yd-com-evaluate ul li').click(function(){
       $(this).addClass('active').siblings('li').removeClass('active');
    });

    //商品评价上传图片
    $('.yd-com-photo img').click(function(){
        $(this).next('input').click();
    });

    // 图片选择

    $(".yd-menu-first").on("change",function(){
        var objUrl = getObjectURL(this.files[0]) ;
        if (objUrl) {
            $(this).parent("div").prev("dl").append("<dd><img src='" + objUrl + "' /></dd>");
        }
    });

    //匿名
    $('.yd-name-circle').click(function(){
       $(this).toggleClass('active');
    });

    //发票申请 取消申请
    $('.yd-apply-platform li').click(function(){
       $(this).addClass('active').siblings('li').removeClass('active');
        $(this).parent().siblings('.yd-apply-order').eq($(this).index()).show().siblings('.yd-apply-order').hide();
    });

    $('.yd-apply-order .yd-apply-btn .yd-del').click(function(){
       if( confirm('是否取消该申请？') ){
           $(this).parents('li').fadeOut();
       }
    });


    //店铺
    $('.yd-store-filter li').click(function(){
       $(this).addClass('active').siblings('li').removeClass('active');
        $(this).parents('ul').siblings('.yd-store-ban').eq($(this).index()).show().siblings('.yd-store-ban').hide();
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

