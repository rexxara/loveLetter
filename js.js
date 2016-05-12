
//禁止窗口的默认滑动
document.ontouchmove = function(e){
	e.preventDefault();
}

//框架
var runPage,
    interval,
    autoPlay;
var index=0;
autoPlay = function(to) {
    clearTimeout(interval);
    interval = setTimeout(function() {
        runPage.go(to);
    }, 500);
}

runPage = new FullPage({

	id : 'pageContain',                            // id of contain
	slideTime : 800,                               // time of slide
	continuous : false,                             // create an infinite feel with no endpoints
    effect : {                                     // slide effect
        transform : {
        	translate : 'Y',					   // 'X'|'Y'|'XY'|'none'
        	scale : [1, 1],					   // [scalefrom, scaleto]
        	rotate : [0, 0]					   // [rotatefrom, rotateto]
        },
        opacity : [0, 1]                           // [opacityfrom, opacityto]
    },                           
	mode : 'wheel,touch',               // mode of fullpage
	easing : 'ease',                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1] )
});
window.onload=function handle(params) {
    setTimeout(function() {
        autoPlay(index+1);
    }, 5000);
    document.getElementById("start").addEventListener("click",function starta(params) {
       autoPlay(index+2);
    });
}