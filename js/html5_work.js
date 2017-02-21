/*html5+css页面*/
var oPxsContainer=document.getElementById('pxs_containter');

//各种背景
var oBg1=getByClass(oPxsContainer,'pxs_bg1')[0];
var oBg2=getByClass(oPxsContainer,'pxs_bg2')[0];
var oBg3=getByClass(oPxsContainer,'pxs_bg3')[0];

//大图片
var oSlider=getByClass(oPxsContainer,'pxs_slider')[0];
var aLi_l=oSlider.getElementsByTagName('li');
var aImg_l=oSlider.getElementsByTagName('img');

//小图片
var oSlider_sm=getByClass(oPxsContainer,'pxs_thumbnails')[0];
var aLi_sm=oSlider_sm.getElementsByTagName('li');
var aImg_sm=oSlider_sm.getElementsByTagName('img');

//左右翻页按钮
var oPrev=getByClass(oPxsContainer,'pxs_prev')[0];
var oNext=getByClass(oPxsContainer,'pxs_next')[0];

var slideTimer=null;

window.onload=window.onresize=function(){
	var iNowMoveOn=0;
	var iNow=0;
	var clientW=document.documentElement.clientWidth;
	var clientH=document.documentElement.clientHeight;
	//设置oSlider的宽度
	oSlider.style.width=aLi_l.length * clientW + 'px';

	//设置每个li的宽度
	for (var i = 0; i < aLi_l.length; i++) {
		aLi_l[i].style.width=clientW + 'px';
	}

	//设置按钮位置
	oPrev.style.left=clientW/2-aImg_l[0].offsetWidth/2+oNext.offsetWidth-14+'px';
	oNext.style.left=clientW/2+aImg_l[0].offsetWidth/2-oNext.offsetWidth-15+'px';

	//设置小导航宽度位置
	oSlider_sm.style.width = aImg_l[0].offsetWidth + 'px';
	oSlider_sm.style.marginLeft = - aImg_l[0].offsetWidth/2 + 'px';
	

	for (var i = 0; i < aImg_sm.length; i++) {
		aLi_sm[i].index=i;
		var ran=Math.random()*40-20;
		var gap=(oSlider_sm.offsetWidth - aLi_sm[0].offsetWidth*aLi_sm.length)/(aLi_sm.length+1);
		aLi_sm[i].style.left= gap + i*(gap+aLi_sm[i].offsetWidth) + 'px';

		setStyle3(aLi_sm[i],'transform','rotate(' + ran + 'deg)');

		//鼠标移入导航小图片改变
		aLi_sm[i].onmouseover=function(){
			iNowMoveOn=this.index;
			move(aImg_sm[iNowMoveOn],{opacity:1,marginTop:-20})
		};
		aLi_sm[i].onmouseout=function(){
			move(aImg_sm[iNowMoveOn],{opacity:0.7,marginTop:0})
		};

		//鼠标点击，视差滚动切换图片
		aLi_sm[i].onclick=function(){
			iNow=this.index;
			setMove();		
		}
	}
	oNext.onclick=next;
	function next(){
		iNow++;
		console.log(iNow);
		iNow%=aLi_sm.length;
		setMove();
		setOpacity()
	}

	oPrev.onclick=function(){
		iNow--;
		if (iNow==-1) {
			iNow=aLi_sm.length-1;
			oBg3.style.left = -oBg3.offsetWidth + clientW + 'px';
			oBg2.style.left = -oBg2.offsetWidth + clientW + 'px';
			oBg1.style.left = -oBg1.offsetWidth + clientW + 'px';
		}
		move(oSlider,{left:-(iNow) * clientW});
		move(oBg1,{left:parseInt(oBg1.offsetLeft+clientW/8)});
		move(oBg2,{left:parseInt(oBg2.offsetLeft+clientW/4)});
		move(oBg3,{left:parseInt(oBg3.offsetLeft+clientW/2)});
		setOpacity()
	}

	// slideTimer=setInterval(next,2000);
	// oSlider.onmouseover=function(){
	// 	clearInterval(slideTimer);
	// }
	// oSlider.onmouseout=function(){
	// 	slideTimer=setInterval(next,2000);
	// }
	function setMove(){
		if(iNow == 0)
		{
			oBg1.style.left = 0;
			oBg2.style.left = 0;
			oBg3.style.left = 0;
		}
		move(oSlider,{left:-(iNow) * clientW});
		move(oBg1,{left:parseInt(oBg1.offsetLeft-clientW/8)});
		move(oBg2,{left:parseInt(oBg2.offsetLeft-clientW/4)});
		move(oBg3,{left:parseInt(oBg3.offsetLeft-clientW/2)});
	}
	function setOpacity(){
		for (var i = 0; i < aImg_sm.length; i++) {
			move(aImg_sm[i],{opacity:0.7,marginTop:0});
		}
		move(aImg_sm[iNow],{opacity:1,marginTop:-20})
	}
};