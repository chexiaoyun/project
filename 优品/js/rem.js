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
    $('.xx-xiaoxi ul').click(function(){
        $(this).find('.span1 i').css('display','none');
    });
    
  
    $(".dl-xinxi .ul .lii button").click(function(){
        $(this).hide();
        $(".send_code .repeat").css("display","block");

        /*倒计时*/
        obt=function(){
            var time=60;
            var time_f;
            time_f=setInterval(function(){
                if(time==1){
                    clearInterval(time_f);
                    $(" .send_code .repeat").hide();
                    $(".send_code .obtain").show().html("重新获取");
                    $(" .send_code .repeat .count_down").html(60);
                }else{
                    time--;
                    $(" .send_code .repeat .count_down").html(time);
                }
            },1000);
            }
            obt();
    });
      $(".send_code .obtain").click(function(){
        $(this).hide();
        $(".send_code .repeat").css("display","block");
        obt();
    });



});


