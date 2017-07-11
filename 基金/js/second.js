$(function(){
	var a=$('.fenye a');
	a.eq(1).css("background","#FF0000")
	a.eq(1).css("color","#fff")
	a.click(function(){
		a.css("background","#fff").eq($(this).index()).css("background","#FF0000")
		a.css("color","#666").eq($(this).index()).css("color","#fff")
	})
	var zhongjian3=$('.zhongjian3');
	var zhongjian2=$('.zhongjian2');
	var zhongjian3p=$('.zhongjian3p');
	var yll=$('.yll')
	$(window).scroll(move);
        function move() {
            if ($(window).scrollTop() > 1050) {
                zhongjian3p.css({'position':'fixed','top':'0','left':'0','right':'0','margin':'auto','z-index':'999','border-bottom':'2px solid #E8E8E8','opacity':'0.9','width':'100%'})
                yll.css("height","106px");
                
            } else {
                zhongjian3p.css({'position':'relative','margin':'16px auto','border-bottom':'1px solid #E8E8E8','opacity':'1','width':'1180px'});
                 yll.css("height","0")
                 
            }
        }
    var jhstops=$('.jhstops');
    jhstops.eq(0).css("background","#FF4933").css("color","#fff");
    jhstops.click(function(){
    	jhstops.css("background","#fff").eq($(this).index()).css("background","#FF4933");
    	jhstops.css("color","#494949").eq($(this).index()).css("color","#fff");
    })
    var sshowleftbs1=$('.sshowleftbs1 span');
    sshowleftbs1.eq(0).css("color","#FF4933");
    sshowleftbs1.click(function(){
    	
    	sshowleftbs1.css("color","#494949").eq($(this).index()).css("color","#FF4933");
    })
    //canvas
		whe(80,one);
		// whe(60,two);
		function whe(b,obj){

			
			var o=obj.getContext('2d');
			var a=0;
			
			obj.width="80";
			obj.height="80";
			o.strokeStyle="#08C276";
			o.lineWidth="5";
			o.font="18px Arial";
			o.textBaseline ="middle"
			o.textAlign ="center";
			o.fillStyle="#494949"
			o.translate(40,40);//将画布移动至中间；
			o.lineCap="round";//线条末端设置；
			o.lineJoin="round";//线条拐角设置
			
			var deg=b/100*360;
			var t=setInterval(function(){
				a++;
				if(a>=deg){
					clearInterval(t);
				}
				//a/360*100
				o.clearRect(-40,-40,80,80);
				o.save();
				o.rotate(-0.5*Math.PI);
				o.beginPath();
				o.arc(0,0,32,0,a/180*Math.PI,false);
				o.stroke();
				o.restore();

				o.fillText(Math.ceil(a/360*100)+"%",0,0);
			})
			o.stroke();
		}


})


function email(){
    	var zhezhao=$('.zhezhao');
    	var eemail=$('.email');
    	var cha=$('.cha');
    	zhezhao.css("display",'block');
    	eemail.css("display",'block');
    	cha.click(function(){
    		zhezhao.css("display",'none');
    		eemail.css("display",'none');
    	})
    }