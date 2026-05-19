const canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let player = {
    x:200,
    y:430,
    yspeed:0,
    xspeed:5,
    w:80,
    h:100,
}


let square={
    x:1700,
    y:362,
    w:80,
    h:350,
}
let square2={
    x:1900,
    y:-900,
    w:50,
    h:1100,
}
let squarepos2 = 1300
let gravity = 0.8

let playerimage = new Image
playerimage.src = 'assets/image.png'
let predio = new Image

predio.src = 'assets/predio.png'

function drawn(){
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(playerimage,player.x,player.y,player.w,player.h)

    ctx.fillStyle = 'gray'
    ctx.fillRect(0,662,canvas.width,canvas.height)
    ctx.drawImage(predio,square.x,square.y,square.w,square.h)
    ctx.fillRect(square2.x,square2.y,square2.w,square2.h)


    square2.x-=player.xspeed
    square.x-=player.xspeed
    if(square.x < -100){
        square.x=1900
    }

    if(square2.x < -100){
        square2.x=Math.floor(Math.random() * 1000)+1000;
    }

    

     player.y-=player.yspeed
    if(player.yspeed > 0){
        player.yspeed-=0.001
    }

   if(player.y < 560){
    player.yspeed-=gravity
   }
   if(player.y > 560){
    player.y = 560
   }
   if(checkCollision(player,square)){
    alert('perdeu')
   }
   if(checkCollision(player,square2)){
    alert('perdeu')
   }
    requestAnimationFrame(drawn)
}


drawn()

window.addEventListener('click',function(){
console.log(`Key pressed: ${event.key}`);
   
      player.yspeed+=20  
    
    
})

function checkCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.w&&  
    rect1.x + rect1.w > rect2.x &&  
    rect1.y < rect2.y + rect2.h &&
    rect1.y + rect1.h > rect2.y    
  );
}