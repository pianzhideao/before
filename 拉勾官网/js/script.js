window.onload=function(){
	var index=0;
	var timer=null;
	var lis=document.getElementById('tab_list').getElementsByTagName('li');
	var divs=document.getElementById('notice_con').getElementsByTagName('div');
	if (lis.length!=divs.length) {
		return ;
	}
	for(var i=0;i<lis.length;i++){
		lis[i].id=i;
		lis[i].onmousedown=function(){
			var that=this;

			if(timer){
				clearInterval(timer);
				timer=null;
			}
			timer=setTimeout(function(){
				for(var j=0;j<lis.length;j++)
				{
					lis[j].className='';
					divs[j].style.display='none';
				}
				lis[that.id].className="on";
				divs[that.id].style.display='block';
			},200)
		}
	}

	var sheet = document.getElementById('sheet');
	var sheet_bimg = document.getElementById('sheet_bimg');
	var sheet_bimg_div = document.getElementById('sheet_bimg_div');
	var sheet_con = document.getElementById('sheet_simg').getElementsByTagName('div');
	var index_sheet;
	var timertwo;

	function theindex_sheet()
	{
		if(parseInt(sheet_bimg_div.style.top) == 0)
		{ index_sheet = 1;}
		if(parseInt(sheet_bimg_div.style.top) == -160)
		{ index_sheet = 2;}
		if(parseInt(sheet_bimg_div.style.top) == -320)
		{ index_sheet = 3;}
	}
	function showButtons_sheet()
	{
		for(j=0;j<sheet_con.length;j++)
		{
			if(sheet_con[j].className == 'on_sheet')
			sheet_con[j].className = '';
		}
		sheet_con[index_sheet-1].className = 'on_sheet';
	}

	for(var i=0;i<sheet_con.length;i++)
	{
		
		theindex_sheet();
		sheet_con[i].onmouseover = function()
		{
			var myindex = parseInt(this.getAttribute('index'));
			var offset = -160*(myindex - index_sheet);
			var newtop = parseInt(sheet_bimg_div.style.top) + offset;
			var time = 300;
			var interval = 20;
			var speed = offset/(time/interval);
			function go()
			{	

				if( speed < 0 && parseInt( sheet_bimg_div.style.top ) > newtop|| speed > 0 && parseInt( sheet_bimg_div.style.top) < newtop)
				{
					sheet_bimg_div.style.top = parseInt(sheet_bimg_div.style.top) + speed + 'px';
					setTimeout(go, interval);
				}
				else
				{
					sheet_bimg_div.style.top = newtop + 'px';
				}
			}
			go();
			index_sheet = myindex;
			showButtons_sheet();
		}
	}
	

};