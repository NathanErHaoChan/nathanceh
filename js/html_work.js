//作品展示
var aLi=document.querySelectorAll('.page_wrapper li');
var oUl=document.querySelector('.page_wrapper ul');
var oText=document.querySelector('.pages_text h3');
var oLeftBtn=document.getElementById('btn_left');
var oRightBtn=document.getElementById('btn_right');

var classArray=['left3','left2','left1','cur','right1','right2','right3'];
var arr=['爱奇艺','小米','大通汽车','爱奇艺','美丽说','灵魂回响','响应式智享学院'];
var bReady = true;
var timer=null;

document.onkeyup=function(ev){
	if(!bReady) return;
	if( ev.keyCode != 37 &&  ev.keyCode != 39) return;
	bReady = false;
	if( ev.keyCode == 37 ){ 
		classArray.unshift(classArray.pop());
	} else if( ev.keyCode == 39 ){ 
		classArray.push(classArray.shift());
	}
	setClass();
}
function setClass(){
	var cur=0;
	for (var i = aLi.length - 1; i >= 0; i--) {
		aLi[i].className = classArray[i];
		if(classArray[i] == 'cur'){
			cur=i;
		}
	}
	oText.innerHTML=arr[cur];
}
setClass();
aLi[2].addEventListener('transitionend',function(){
	bReady = true;
},false);
function next(){
	if( !bReady ) return;
	bReady = false;
	classArray.push(classArray.shift());
	setClass();
}
timer=setInterval(next,2000);
oUl.onmouseout=function(){
	clearInterval(timer);
	timer=setInterval(next,2000);
};
oUl.onmouseover=function(){
	clearInterval(timer);
};
oRightBtn.onclick=next;
oLeftBtn.onclick=function(){
	clearInterval(timer);
	if( !bReady ) return;
	bReady = false;
	classArray.unshift(classArray.pop());
	setClass();
};