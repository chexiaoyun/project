$(function(){
    // 顶部搜索部分
    $(".xq-input input").focus(function () {
        $(this).val("");
    })
    $(".xq-input input").blur(function () {
        $(this).val("输入地点名称");
    })
    // 点击选择村庄
    $(".xq-cunzhuang .fenlei .city").click(function () {
        $(".xq-citysearch .title .span2").html($(this).html());
        $(".xq-citysearch").removeClass("dis-none");
        $(".xq-citysearch .li").click(function () {
            var index=$(this).index(".xq-citysearch .li");
            $(".xq-citysearch .title .span2").html($(".xq-citysearch .li:eq("+index+") .span1").html());
        })
    })
    // 再次点击确认是否删除地址
    $(".xq-cunzhuang .choose li").click(function () {
        $(".xq-delcity").removeClass("dis-none");
        var that=this;
        $(".xq-delcity li").eq(0).click(function () {
            $(".xq-delcity").addClass("dis-none");
            $(that).remove();
            that=null;
        })
        $(".xq-delcity li").eq(1).click(function () {
            $(".xq-delcity").addClass("dis-none");
            that=null;
        })
    })

})