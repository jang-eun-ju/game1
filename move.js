var image=document.getElementById("image");
var enemy=document.getElementById("enemy");
var enemy2=document.getElementById("enemy2");
var enemy3=document.getElementById("enemy3");
var enemy4=document.getElementById("enemy4");
var enemy5=document.getElementById("enemy5");
var enemySecond=document.getElementById("enemySecond");
var gun=document.getElementById("gun");
var imgSize1=300
var imgSize2=0
var gunSize1=350
var gunSize2=100
var army=[enemy, enemy2, enemy3, enemy4, enemy5];
var guns=[1700,1700,1700,1700,1700];
var gunIsDead=0;
var space = setInterval(function(){},100)
var armyFunction=new Array;
 



document.addEventListener('keydown', function(e){
    const keyCode = e.keyCode;
    if(keyCode==38){
        imgSize1-=10;
        gunSize1-=10;
        if(imgSize1<-50){
            imgSize1=-50;
            gunSize1=0;
        }
        gun.top=gunSize1;
        gun.style.top=gunSize1+'px';
        image.top=imgSize1;
        image.style.top=imgSize1+'px';
    }
    else if(keyCode==37){
        imgSize2-=10;
        gunSize2-=10;
        if(imgSize2<-50){
            imgSize2=-50;
            gunSize2=50;
        }
        gun.left=gunSize2;
        gun.style.left=gunSize2+'px';
        image.left=imgSize2;
        image.style.left=imgSize2+'px';
    }
    else if(keyCode==39){
        imgSize2+=10;
        gunSize2+=10;
        if(imgSize2<-50){
            imgSize2=-50;
            gunSize2=50;
        }
        gun.left=gunSize2;
        gun.style.left=gunSize2+'px';
        image.left=imgSize2;
        image.style.left=imgSize2+'px';
    }
    else if(keyCode==40){
        imgSize1+=10;
        gunSize1+=10;
        if(imgSize1<-50){
            imgSize1=-50;
            gunSize1=0;
        }
        gun.top=gunSize1;
        gun.style.top=gunSize1+'px';
        image.top=imgSize1;
        image.style.top=imgSize1+'px';
    } 
    if(keyCode==32){
        
        gunIsDead=0
        gun.style.opacity="100%"
        
        gunSize2=imgSize2+100
        gun.left=gunSize2
        gun.style.left=gunSize2+'px'
        clearInterval(space)
        space=setInterval(function(){
            if(gunIsDead==0){
                gunSize2+=2;
                gun.style.left=gunSize2+'px'
            }
        },1)
    }   
})

var i=0;

setInterval(function(){
    var enemyTop=Math.random()*700-20
    if(i<5){
        army[i].top=enemyTop
        army[i].style.top=enemyTop+'px';
        army[i].style.opacity='100%'
        i+=1;
    }
}, 3000);


armyFunction[0]=setInterval(function(){
    if(army[0].top!=null){
        guns[0]-=100;
        army[0].left=guns[0];
        army[0].style.left=guns[0]+'px';
    }
},1600)

armyFunction[1]=setInterval(function(){
    if(army[1].top!=null){
        guns[1]-=100;
        army[1].left=guns[1];
        army[1].style.left=guns[1]+'px';
    }
},1700)

armyFunction[2]=setInterval(function(){
    if(army[2].top!=null){
        guns[2]-=100;
        army[2].left=guns[2];
        army[2].style.left=guns[2]+'px';
    }
},1800)

armyFunction[3]=setInterval(function(){
    if(army[3].top!=null){
        guns[3]-=100;
        army[3].left=guns[3];
        army[3].style.left=guns[3]+'px';
    }
},1900)

armyFunction[4]=setInterval(function(){
    if(army[4].top!=null){
        guns[4]-=100;
        army[4].left=guns[4];
        army[4].style.left=guns[4]+'px';
    }
},2000)

//총 맞았을 때
setInterval(function(){
    for(var j=0; j<army.length; j++){
        if(parseFloat(gun.style.left)>=parseFloat(army[j].style.left)&&parseFloat(gun.style.top)>=parseFloat(army[j].style.top)-65&&parseFloat(gun.style.top)<=parseFloat(army[j].style.top)+65){
            army[j].style.left='2200px'
            guns[j]=2200
            var newArmy=Math.random()*700-20
            army[j].top=newArmy
            army[j].style.top=newArmy+'px'
            
            gunIsDead=1
            gun.style.opacity='0%'
            gunSize2=imgSize2+100
            gun.left=gunSize2
            gun.style.left=gunSize2+'px'
            clearInterval(space)
        }
    }
}, 1);  



