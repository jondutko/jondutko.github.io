var canvas, ctx, sheet,
	spriteRot = 0,
	flompX = 400,
	flompY = 400,
	flompA = 0,
	flompB = 100,
	flompC = 200,
	flompLeft = 10,
	flompRight = 75,
	flompWidth = 100,
	flompHeight = 65,
	currentSprite = flompA,
	currentFace = flompLeft,
	destinationX = 0,
	isMoving = 0
	flompVelocity = 0
	isJumping = 0
	flompUps = 0;
	
function play(){
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	sheet = document.getElementById('sprites');
	document.onkeydown = keycheck;
	setInterval(singleFrame, 1000/25); //draw a single frame 15fps (1000ms/15)
}

function keycheck(e){
	if(e.keyCode == '32') jump();
}

function jump(){
	if(isJumping == 0){
		isJumping = 1;
		flompUps = 10;
	}
}

function singleFrame(){
	clear();
	draw();
}

function clear() {
	ctx.clearRect(0, 0, 2000, 800);
}

function draw(){
	drawFlomp();
	//ctx.drawImage(sheet, 0, 400, 85, 70, 20, 20, 42, 35); //HP label
}

function checkFire(event){
if(isMoving == 0){
	isMoving = 1;
}
	var rect = canvas.getBoundingClientRect();
	destinationX = event.clientX - rect.left;
	if (destinationX < flompX){
		currentFace = flompLeft;
		flompVelocity = -4;
	}
	else{
		currentFace = flompRight;
		flompVelocity = 4;
	}
}

function cycleFlomp(){
	spriteRot += 1;
	if(spriteRot == 3){
		spriteRot = 0;
		if(currentSprite == flompA){
			currentSprite = flompB;
		}
		else if(currentSprite == flompB){
			currentSprite = flompC;
		}
		else{
			currentSprite = flompA;
		}
	}
}

function drawFlomp(){
	cycleFlomp();
	if(isMoving == 1){
		if(currentFace == flompLeft && flompX < destinationX){
			isMoving = 0;
		}
		else if (currentFace == flompRight && flompX > (destinationX-flompWidth)){
			isMoving = 0;
		}
		else{
			flompX += flompVelocity;
		}
	}
	if(isJumping == 1){
		flompUps -= 1;
		if(flompUps == -9){
			isJumping = 0;
		}
		flompY -= flompUps;
	}
	ctx.drawImage(sheet, currentSprite, currentFace, flompWidth, flompHeight, flompX, flompY, flompWidth, flompHeight);
}
