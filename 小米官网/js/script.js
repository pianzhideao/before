window.onload=function(){

	var lunbotu=document.getElementById("lunbotu");
	var list=document.getElementById("list");
	var buttons=document.getElementById("buttons").getElementsByTagName("span");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	var index=1;
	var len=5;
	var animated=false;
	var interval=3000;
	var timer;

	function showButton(){
		for(var i=0;i<buttons.length;i++){
			if(buttons[i].className=='on'){
				buttons[i].className='';
				break;
			}
		}
		buttons[index-1].className='on';
	}

	function animate(offset){
		animated=true;
		var newLeft=parseInt(list.style.left)+offset;
		var time=300;//位移总时间
		var interval=10;//位移时间间隔
		var speed=offset/(time/interval);//每一次位移量

		var go=function(){
			if ((speed<0&&parseInt(list.style.left)>newLeft)||(speed>0&&parseInt(list.style.left)<newLeft)) {
				list.style.left=parseInt(list.style.left)+speed+'px';
				setTimeout(go,interval);
			}
			else{
				list.style.left=newLeft+'px';

				if (newLeft>-1230) {
					list.style.left=-1230*len+'px';
				}
				if (newLeft<-1230*len) {
					list.style.left=-1230+'px';
				}
				animated=false;
			}
		}
		go();
	}

	function play(){
		timer=setTimeout(function(){
			next.onclick();
			play();
		},interval);
	}

	function stop(){
		clearTimeout(timer);
	}
	next.onclick=function(){
		if(animated){
			return;
		}
		if(index==5){
			index=1;
		}
		else{
			index=index+1;
		}
		showButton();
		if(animated==false){
			animate(-1230);
		}
		
	}
	prev.onclick=function(){
		if(animated){
			return;
		}
		if(index==1){
			index=5;
		}
		else{
			index=index-1;
		}
		showButton();
		if(animated==false){
			animate(1230);
		}
	}

	for (var i =0; i <buttons.length; i++) {
		buttons[i].onclick=function(){
			if(animated){
			return;
			}
			if(this.className=='on'){
				return;
			}

			var myIndex=parseInt(this.getAttribute('index'));
			var offset=-1230*(myIndex-index); 
			
			index=myIndex;
			showButton();
			if(animated==false){
				animate(offset);
			}
		}
	}

	lunbotu.onmouseover=stop;
	lunbotu.onmouseout=play;

	play();	
		


	// var oUl1 = document.getElementById("bxxk");
 //    var aLi = oUl1.getElementsByTagName("li");
 //    var aDiv =document.getElementsByTagName("span");
 //    for(var b = 0; b < aLi.length; b++) 
 //    {
 //        aLi[b].indexthree = b;
 //        aLi[b].onmouseover = function() 
 //        {
 //            for(var b = 0; b < aLi.length;b++)
 //            {
 //                aLi[b].className ="";
 //            }
 //            this.className = "active";
 //            for(var a = 0; a < aDiv.length; a++) 
 //            {
 //                aDiv[a].className = "hide";
 //            }
 //            aDiv[this.indexthree].className ="show";
 //        }        
 //    }


  
    	var f=document.getElementById("xlbt");
		var g=document.getElementById("lbto");
		var h=g.getElementsByTagName("li");
		var k=document.getElementById("xdd");
		var j=k.getElementsByTagName("li");
		indextwo=0;

		for(var m=0;m<j.length;m++)
		{
			j[m].onmousedown=function()
			{
				indextwo=this.innerText-1;
				changeH(indextwo);
			}
		}

		function autoTwo()
		{
			if(++indextwo>=h.length) indextwo=0;
			changeH(indextwo);
		}

		function changeH(curIndex)
		{
			for(var m=0;m<h.length;m++)
			{
				h[m].style.display="none";
				j[m].className="";
			}
			h[curIndex].style.display="block";
			j[curIndex].className="xdds";
		}

		
		
};