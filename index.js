



/*
function isMobile()
{
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  return isAndroid || isiOS;
}

const mobile = isMobile();
*/



var cnt=0;
var PassSec;
var PassageID;

var icon_arr=["./img/gu.png","./img/cho.png","./img/pa.png"]
var comment_arr=["&nbsp;&nbsp;&nbsp;勝って！","&nbsp;&nbsp;&nbsp;負けて！","&nbsp;&nbsp;引き分けて！"]

var gu=document.getElementById("gu");
var cho=document.getElementById("cho");
var pa=document.getElementById("pa");

var random1=Math.floor(Math.random()*3)
var random2=Math.floor(Math.random()*3)

// プログレスバーの進捗値
var val;
// 一定間隔で処理を行うintervalのIDを保持
var intervalID;




export {cnt, PassSec, PassageID,icon_arr,comment_arr,gu,cho,pa,random1,random2,val,intervalID};


export function click()
{
  var flg=0;
  if(flg == 0)
    {
      startShowing();
      document.getElementById("stt").disabled=true;
      flg=1;

      document.getElementById("order_icon").style.visibility="visible";
      document.getElementById("order_comment").innerHTML=comment_arr[random2];
      gu.style.pointerEvents="auto"
      cho.style.pointerEvents="auto"
      pa.style.pointerEvents="auto"
    }else
    {

    }
    val = 0;
    // 300msおきにプログレスバーを更新する
    intervalID = setInterval(updateProgress, 300);
}
　　　　　


　　　　  export function showPassage()
　　　　　{
         var msg;
   　　　 PassSec++;
   　　　 //msg = 29 - (Math.floor(PassSec/100)) + ":" +  ( '00' + (100 - PassSec%100)).slice( -2 );   // 表示文作成
         msg = (Math.floor(PassSec/100)) + ":" +  ( '00' + (PassSec%100)).slice( -2 );
         document.getElementById("time").innerHTML = msg;
         endChk();
　　　　　}

　　　　  export function startShowing()
　　　　　{
   　　　　PassSec = 0;
   　　　　PassageID = setInterval(showPassage,10);
　　　　　}

         export function stopShowing()
         {
         clearInterval(PassageID);
         }




export function endChk()
{
 if( (PassSec/100) >= 30 || cnt == 10 )
  {
   stopShowing();
   //document.getElementById("time").innerHTML="0:00";
   document.getElementById("score").style.color="red";
   gu.style.pointerEvents="none"
   cho.style.pointerEvents="none"
   pa.style.pointerEvents="none"
   clearInterval(intervalID);
  }
}



export function next()
{
   cnt++
   document.getElementById("score").innerHTML=cnt;
   random1=Math.floor(Math.random()*3)
   random2=Math.floor(Math.random()*3)
   document.getElementById("order_icon").src=icon_arr[random1]
   document.getElementById("order_comment").innerHTML=comment_arr[random2]
   color();
}


export function NGnext()
{
   cnt--
   document.getElementById("score").innerHTML=cnt;
   random1=Math.floor(Math.random()*3)
   random2=Math.floor(Math.random()*3)
   document.getElementById("order_icon").src=icon_arr[random1]
   document.getElementById("order_comment").innerHTML=comment_arr[random2]
   color();
}


export function color()
{
  if((random2 == 0 && random1 == 1) || (random2 == 1 && random1 == 2) || (random2 == 2 && random1 == 0))
  {
   gu.className = 'jyanken green';cho.className = 'jyanken red';pa.className = 'jyanken red';
  }

  if((random2 == 0 && random1 == 2) || (random2 == 1 && random1 == 0) || (random2 == 2 && random1 == 1))
  {
   cho.className = 'jyanken green';gu.className = 'jyanken red';pa.className = 'jyanken red';
  }

   if((random2 == 0 && random1 == 0) || (random2 == 1 && random1 == 1) || (random2 == 2 && random1 == 2))
  {
   pa.className = 'jyanken green';gu.className = 'jyanken red';cho.className = 'jyanken red';
  }
}



export function result(a,b,c)
{
//gu出し：勝って cho, 負けて pa, 引き分けて gu  random1: 1 2 0
//cho出し：勝って pa, 負けて gu, 引き分けて cho random1: 2 0 1
//pa出し：勝って gu, 負けて cho, 引き分けて pa  random1: 0 1 2
  if((random2 == 0 && random1 == a) || (random2 == 1 && random1 == b) || (random2 == 2 && random1 == c))
  {
   next();
  }else{NGnext();}
}







  // プログレスバーを更新する
 export function updateProgress()
  {
    // プログレスバーの進捗値を更新し、プログレスバーに反映させる
    val += 1;
    document.getElementById("myProgress").value = val;
    document.getElementById("myProgress").innerText = val + "%";
    //console.log("progress:", val, "%");

    // 最大値まで達したら終了
    if (val == 100)
    {
      clearInterval(intervalID);
    }
  }




