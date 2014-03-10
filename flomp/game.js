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
	currentFace = flompLeft;
	
function play(){
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	sheet = document.getElementById('sprites');
	setInterval(singleFrame, 1000/25); //draw a single frame 15fps (1000ms/15)
}

function singleFrame(){
	clear();
	draw();
}

function clear() {
	ctx.clearRect(0, 0, 800, 800);
}

function draw(){
	drawFlomp();
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
	ctx.drawImage(sheet, currentSprite, currentFace, flompWidth, flompHeight, flompX, flompY, flompWidth, flompHeight);
}