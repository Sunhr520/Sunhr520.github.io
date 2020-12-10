var oClock = document.querySelector("#clock");
var oDate = document.querySelector("#oDate");

var w_array = new Array("星期天","星期一","星期二","星期三","星期四","星期五","星期六");
var m_array = new Array("正月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","腊月");


/* 界面初始化 */
function oClockInit(){
	var w = window.innerWidth;
    var h = window.innerHeight;
	oClock.style.width = w+'px';
	oClock.style.lineHeight = h+'px';
	oClock.style.height =  h+'px';
    oClock.style.fontSize = Math.floor(h/300*20) + 'px';

    oDate.style.top = Math.floor(h/300*13)+ 'px';
	oDate.style.width = w+'px';
	oDate.style.lineHeight = h+'px';
	oDate.style.height =  h+'px';
	oDate.style.fontSize = Math.floor(h/300*20) + 'px';
}

function add0(n){
    return n<10 ? "0"+n: ""+n;
}

function getTime(){
    var t = new Date();
    var h = t.getHours();
    var  str = h<12 ? "上午" : "下午";

    oClock.innerHTML = "<span id='time'>"+add0(h)+" : "+add0(t.getMinutes())+" <span class='sec'>"+add0(t.getSeconds())+"</span><span class='st'>"+str+"</span></span>";
    oDate.innerHTML="<span class='sec'>" + t.getFullYear() +"年"+(t.getMonth()+1) + "月" + t.getDate() + "日 "+ w_array[t.getDay()] + "</span>";

    setTimeout(getTime, 1000);
}

export function StartTime(){
    oClockInit();
    getTime();
}