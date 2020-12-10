import {Click, move, Burl, dbClick} from './move.js'
import {MusicList} from "../config/music.js"

var omusic = document.querySelector("#music");
var oback, oplay, opause, oforward ,oaudio;

var MusicLists = MusicList();
var index = 0;
var flag = true, Mflag = true;
var obs = "none";

function musicInit(){
    var w = window.innerWidth;
    var h = window.innerHeight;

    omusic.style.width = Math.floor(w/300*10)+'px';
    omusic.style.height = Math.floor(w/300*10)+'px';
    omusic.style.right = Math.floor(w/100*20)+'px';
    omusic.style.top = Math.floor(h/100*20)+'px';

    omusic.innerHTML="<audio id='mymusic'></audio><div id='back'></div><div id='play'></div><div id='pause'></div><div id='forward'></div>";

    oback = document.querySelector("#back");
    oplay = document.querySelector("#play");
    opause = document.querySelector("#pause");
    oforward = document.querySelector("#forward");
    oaudio = document.querySelector("#mymusic");
    //oback.style.width = oback.style.height = Math.floor(w/300*10)+'px';
    oaudio.src=MusicLists[index];

}

function Show(){
    if(flag) obs = omusic.style.background;
    omusic.style.background = "none";
    oback.style.display = "block";
    if(Mflag) oplay.style.display = "block";
    else  opause.style.display="block";
    oforward.style.display = "block";
    flag = false;
}
function NoShow(){
    if(flag) return;
    omusic.style.background = obs;
    oback.style.display = "none";
    oplay.style.display = "none";
    opause.style.display = "none";
    oforward.style.display = "none";
}


function MusicPlay(){
    if(!Mflag) return;
    oplay.style.display="none";
    opause.style.display="block";
    oaudio.play();
    Mflag = false;
}
function MusicPause(){
    if(Mflag) return;
    oplay.style.display="block";
    opause.style.display="none";
    oaudio.pause();
    Mflag = true;
}

function MusicBack(){
    if(index == 0) index = MusicLists.length - 1;
    else index -= 1;
    oaudio.src=MusicLists[index];
}
function MusicForward(){
    if(index + 1 == MusicLists.length) index = 0;
    else index += 1;
    oaudio.src = MusicLists[index];
}

export function StartMusic(){
    omusic.style.display = "block";
    move("music");
    musicInit();

    dbClick(omusic, Show); Burl(omusic, NoShow);
    Click(oplay, MusicPlay); Click(opause, MusicPause);
    Click(oback, MusicBack); Click(oforward, MusicForward);
}