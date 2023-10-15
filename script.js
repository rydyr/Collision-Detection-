const screen = document.getElementById('playArea'); 

const ball = document.getElementById('ball');

  const ballPosition = {
    x: 2,
    y: 2
  }

  const ballLogic = {
    x: 2,
    y: 2,
    width: 25,
    height: 25
  }

  const obstacleLogic = {
    x: 100,
    y: 100,
    width: 50,
    height: 50
  }

const coord = document.getElementById('coord');

const detect = document.getElementById('detect');

let signal = false;

const obstacle = document.getElementById('sqObject');

const left = document.getElementById('leftBtn');

const up = document.getElementById('upBtn');

const right = document.getElementById('rightBtn');

const down = document.getElementById('downBtn');

left.addEventListener('touchstart',(e)=> {
  e.preventDefault();
  moveInterval = setInterval(function() {
  move('left')
},10);
  left.style.color = "aqua";
});

left.addEventListener('touchend',()=> {
  clearInterval(moveInterval);
  left.style.color = "black";
});

left.addEventListener('touchmove',(e)=> {
  const touch = e.touches[0];
  const rect = left.getBoundingClientRect();
  if (touch.clientX < rect.left || touch.clientX > rect.right || touch.clientY < rect.top || touch.clientY > rect.bottom) {
     clearInterval(moveInterval);
     left.style.color = "black"
  }
});

up.addEventListener('touchstart',(e)=> {
  e.preventDefault();
  moveInterval = setInterval(function() {
    move('up');
  },10);
  up.style.color = "aqua";
});

up.addEventListener('touchend',()=> {
  clearInterval(moveInterval);
  up.style.color = "black";
});

up.addEventListener('touchmove',(e)=> {
  const touch = e.touches[0];
  const rect = up.getBoundingClientRect();
  if (touch.clientX < rect.left || touch.clientX > rect.right || touch.clientY < rect.top || touch.clientY > rect.bottom) {
     clearInterval(moveInterval);
    up.style.color = "black";
  }
});
  right.addEventListener('touchstart', (e)=> {
    e.preventDefault();
  moveInterval = setInterval(function() {
    move('right');
  },10);
    right.style.color = "aqua";
});

right.addEventListener('touchend',()=> {
  clearInterval(moveInterval);
  right.style.color = "black";
});

right.addEventListener('touchmove',(e)=> {
  const touch = e.touches[0];
  const rect = right.getBoundingClientRect();
  if (touch.clientX < rect.left || touch.clientX > rect.right || touch.clientY < rect.top || touch.clientY > rect.bottom) {
     clearInterval(moveInterval);
     right.style.color = "black";
  }
});

down.addEventListener('touchstart',(e)=> {
  e.preventDefault();
  moveInterval = setInterval(function() {
    move('down');
  },10);
  down.style.color = "aqua";
});

down.addEventListener('touchend',()=> {
  clearInterval(moveInterval);
  down.style.color = "black";
});

down.addEventListener('touchmove',(e)=> {
  const touch = e.touches[0];
  const rect = down. getBoundingClientRect();
  if (touch.clientX < rect.left || touch.clientX > rect.right || touch.clientY < rect.top || touch.clientY > rect.bottom) {
     clearInterval(moveInterval);
     down.style.color = "black";
  }
});

  function move(direction) {
     let predictedX = ballLogic.x;
     let predictedY = ballLogic.y;
    
     if (direction === 'right' && ballPosition.x < 272){
       predictedX += 2;
     }
     if (direction === 'left' && ballPosition.x > 0){
       predictedX -= 2;
     }
     if (direction === 'up' && ballPosition.y > 0){
       predictedY -= 2;
     }
     if (direction === 'down' && ballPosition.y < 272){
       predictedY += 2;
     }
    if (!(predictedX < obstacleLogic.x + obstacleLogic.width + ballLogic.width - 2 && predictedX > obstacleLogic.x + 2 && predictedY < obstacleLogic.y + obstacleLogic.height + ballLogic.height - 2 && predictedY > obstacleLogic.y + 2)) {
        ballPosition.x = predictedX;
        ballPosition.y = predictedY;
        ballLogic.x = predictedX;
        ballLogic.y = predictedY;
     }
     ball.style.left = ballPosition.x + 'px';
     ball.style.top = ballPosition.y + 'px';
  coord.innerHTML = `x: ${ballPosition.x} y: ${ballPosition.y}`;
    ballLogic.x = ballPosition.x;
    ballLogic.y = ballPosition.y;
    checkCollide();
    objColide();
    sign()
  }

function checkCollide() {
  // screen border
  if (ballLogic.x === 0 || ballLogic.x === 272 || ballLogic.y === 0 || ballLogic.y === 272) {
     ball.classList.add('flash');
    signal = true;
  } else {
    ball.classList.remove('flash');
    signal = false;
  }
}


  function objColide(){
    if (ballLogic.x < obstacleLogic.x + obstacleLogic.width + (ballLogic.width) && ballLogic.x > obstacleLogic.x && ballLogic.y < obstacleLogic.y + obstacleLogic.height + (ballLogic.height) && ballLogic.y > obstacleLogic.y) {
     ball.classList.add('collide');
     signal = true;
  } else {
     ball.classList.remove('collide');
  }
} 



function sign() {
if (signal) {
   detect.style.display = 'block';
  setTimeout(() => {
    detect.style.display = 'none'},1000)
}

}

