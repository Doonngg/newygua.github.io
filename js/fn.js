window.addEventListener("load",function(){
	/* let oBg = document.querySelector(".bg");
	
	//获取图片盒子的总高度/3
	let oHight = parseInt(-oBg.offsetHeight / 3);
	
	oBg.addEventListener("click",function(){
		let pos = 0;
		let myMove = setInterval(move,5);
		function move(){
			if(pos == oHight){
				clearInterval(myMove);
			}else{
				pos= pos - 5;
				oBg.style.top = pos + "px";
			}
			
		}
	}) */
	
	//打开个人中心
	document.querySelector(".home_page_login").addEventListener("click",function(){
		opener = null;
		window.open("https://doonngg.github.io/yguaWeb/","newwindow","height=812,width=375,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no,left=1200,top=100")   
	})
	document.querySelector(".home_page_signin").addEventListener("click",function(){
		opener = null;
		window.open("https://doonngg.github.io/yguaWeb/signin.html","newwindow","height=812,width=375,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no,left=1200,top=100")   
	})
	/* document.addEventListener("mousewheel",function(e){
		e = e || window.event;
		if (e.wheelDelta > 0){
			alert("上")
		}
		if (e.wheelDelta < 0){
			alert("下")
		}
	}); */
	
})