function move(ElId){
    var divMove = document.getElementById(ElId);
    if(divMove == null) return;
    divMove.onmousedown  = (e) => { 
        var ev = e || window.event;
        //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离  
        var distanceX = ev.clientX - divMove.offsetLeft;
        var distanceY = ev.clientY - divMove.offsetTop;
        document.onmousemove = (e)=>{
            var ev = e || window.event;
            divMove.style.left = ev.clientX - distanceX + 'px';
            divMove.style.top = ev.clientY - distanceY + 'px'; 
        };
        document.onmouseup = ()=>{
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

function dbClick(divdbClick, ClickEvent){
    if(divdbClick == null) return;
    divdbClick.ondblclick = ClickEvent;
}

function Click(divClick, ClickEvent){
    if(divClick == null) return;
    divClick.onclick=ClickEvent;
}

function Burl(divLeave, LeaveEvent){
    if(divLeave == null) return;
    divLeave.onmouseleave = LeaveEvent;
}
function Clear(div){
    if(div == null) return;
    div.ondblclick = div.onmouseleave = null;
}

export {move, Click, Burl, dbClick, Clear}