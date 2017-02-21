function rnd(m,n) {
	return parseInt(Math.random()*(n-m)+m);
}
function rndSyb(){
	return Math.random() < 0.5 ? -1 : 1;
}
function getDis(dot1,dot2){
	return Math.sqrt(Math.pow(dot1.x-dot2.x,2)+Math.pow(dot1.y-dot2.y,2));
}
function findInArr(arr,str){
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i]==str)return true;
	}
	return false;
}	
function getByClass(oParent,className){
	if(oParent.getElementsByClassName){		
		return oParent.getElementsByClassName(className);
	}else{
		var aEle=oParent.getElementsByTagName('*');
		var arr=[];
		
		for(var i=0;i<aEle.length;i++){
			var aClass=aEle[i].className.split(' ');
			
			if(findInArr(aClass,className)){
				arr.push(aEle[i]);
			}			
		}
		return arr;
	}
}
function setStyle3(obj, name, value)
{
	obj.style['Webkit'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
	obj.style['Moz'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
	obj.style['ms'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
	obj.style['O'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
	obj.style[name]=value;
}