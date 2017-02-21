	function getStyle(obj,name){
		return (obj.currentStyle||getComputedStyle(obj,false))[name];
	}
	function move(obj,json,options){
		var options=options||{};
		options.duration=options.duration||500;
		options.easing=options.easing||'linear';
		
		var start={};
		var dis={};
		for(var name in json){
			start[name]=parseFloat(getStyle(obj,name));//去掉px!!
			dis[name]=json[name]-start[name];
		}
		var count=Math.floor(options.duration/30);
		var n=0;
		
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			n++;
			for(var name in json){
				switch(options.easing){
					case 'linear':
						var a=n/count
						var cur=start[name]+a*dis[name];
						break;
					case 'ease-in':
						var a=n/count
						var cur=start[name]+(a*a*a)*dis[name];
						break;
					case 'ease-out':
						var a=1-n/count
						var cur=start[name]+(1-a*a*a)*dis[name];
						break;
				}
				if(name=='opacity'){//兼容opacity					
					//console.log(cur);
					obj.style.opacity=cur;
					obj.style.filter='alpha(opacity:'+cur*100+')';				
				}else{					
					obj.style[name]=cur+'px';
				}
			}
			if(n==count){
				clearInterval(obj.timer);
				options.complete&&options.complete();//回调函数
			}
		},30);
	}