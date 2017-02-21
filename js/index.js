	var oBanner=document.getElementById('header');
	var oContentContainer=document.getElementById('contentContainer');
	var aWorkItemTable=document.getElementsByClassName('workItemTable');
	
	var clientH=document.documentElement.clientHeight;
	oBanner.style.height=clientH+'px';
	oContentContainer.style.marginTop=clientH+'px';

	window.onresize=window.onscroll=function(){
		var scrollT=document.body.scrollTop || document.documentElement.scrollTop;

		for (var i = 0; i < aWorkItemTable.length; i++) {
			var Height=aWorkItemTable[i].offsetHeight;
			var offsetT=aWorkItemTable[i].offsetTop;
			if(scrollT>=offsetT){
				per=(scrollT-offsetT)/Height;
				if(per>=1){
					per=1;
				}
				aWorkItemTable[i].style.transform=`scale(${per})`;	
			}						
		}
	};

	for (var i = 0; i < aWorkItemTable.length; i++) {
		aWorkItemTable[i].onmouseenter=function(){
			move(this.children[0],{'opacity':0.9},{duration:500,easing:'linear'});
			move(this.children[1],{'opacity':1},{duration:500,easing:'linear'});
		}
		aWorkItemTable[i].onmouseleave=function(){
			move(this.children[0],{'opacity':0},{duration:500,easing:'linear'});
			move(this.children[1],{'opacity':0},{duration:500,easing:'linear'});
		}
	}