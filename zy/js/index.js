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

$(function(){
	$('#header .head-left').click(function(){
		$('.ul').slideToggle();
		$(this).find('i').toggleClass('fail');
		$('.guip').toggle();
	});
	
	//动态
	$('.trends-head li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	//立即预约
	$('.btn span:first-child').click(function(){
		$('.order').show();
	});
	$('.order-head i').click(function(){
		$('.order').hide();
	});
	//展开
	$('.pm-survey span').click(function(){
		$(this).parents('.pm-head').siblings('.min-act').find('p').css('height','auto');
	});
	
	//取消
	$('.activity .min-btn span:first-child').click(function(){
		if(confirm('是否取消预约')){
			$('.order').hide();
		}
	})
});
