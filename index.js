// function init()
// {
//     window.requestAnimationFrame(draw);

// }

	//Function for ball to start 
    var rand_position_x = function (width){
      return Math.floor(Math.random() * (width + 1));
    };
            
    var ballPositionY = 0; //position of the ball in y axis
    var ballPositionX = rand_position_x(500); //position of ball in x axis
    var ballWeight = 0;      //weight of the ball
    var slope = 0;
    var width = 500;        //width of the canvas
    var height = 500;       //height of canvas
    var playerPosition = 0;  //position of the user movable weight
    var playerWeight = 0;
    var leftHandScore = 100;  //keep track of total weight on the left side of the seesaw
    var rightHandScore = 101; //keep track of the total weight on the right side of the seesaw
    var triangleHeight = 50;
    var contactBall = false;
    var contactPlank = false;
    var x1 = 0; // x parameter for starting point for line
    var x2 = width; // x parameter for ending point for line
    var y1 = (height - triangleHeight); // y parameter for starting point for line
    var y2 = (height - triangleHeight); // y parameter for ending point for line

    

function scoreLogic(){
    if ((ballPositionX - (width/2)) < 0) {
        leftHandScore += (abs(ballPositionX - width/2)*ballWeight);
    };
    if((ballPositionX - (width/2)) > 0) {
        rightHandScore += ((ballPositionX - width/2)*ballWeight);
    };
    totalScore = rightHandScore + leftHandScore;
}

function lineDrawingParameters () {
    slope = (rightHandScore - leftHandScore + (playerWeight * (playerPosition- (width/2))))/50;
    y1 = (height - triangleHeight) + (slope * (width/2));
    y2 = (height - triangleHeight) - (slope * (width/2));
}

function Contacts () {
    contactBall = (abs(((ballPositionX-(width/2))*slope) - (-ballPositionY + height - triangleHeight)) < 1);
    contactPlank = ((abs(y1 - height) < 1) || (abs(y2 - height) < 1))
}

//Draws Ball
function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var seesaw = canvas.getContext("2d");

    var debugText = canvas.getContext("2d");
    debugText.font = "20px serif";
    debugText.fillText(x1, 100, 100);

    ctx.clearRect(0,0,500,500); // clear canvas
    ctx.save();   
    ctx.beginPath(); 
    ctx.arc(ballPositionX, ballPositionY++, 10, 0, 2 *Math.PI);
    ctx.fill();
    
    if (ballPositionY == 500){
    	ballPositionY = 0;
    	ballPositionX = rand_position_x(500);
    }

    lineDrawingParameters();
    seesaw.beginPath();
    seesaw.moveTo(x1, y1);  //line start
    seesaw.lineTo(x2, y2);  //line end
    seesaw.strokeStyle = '#ff0000';
    seesaw.stroke();

    // var debugText = canvas.getContext("2d");
    // debugText.font = "48px serif";
    // debugText.fillText(x1, 400, 400);
    document.addEventListener("keydown",keyDownHandler,false);

    var debugText = canvas.getContext("2d");
    debugText.font = "48px serif";
    debugText.fillText(y1, 400, 425);

    // var debugText = canvas.getContext("2d");
    // debugText.font = "48px serif";
    // debugText.fillText(x2, 400, 450);

    var debugText = canvas.getContext("2d");
    debugText.font = "48px serif";
    debugText.fillText(y2, 400, 450);

    ctx.restore();
    window.requestAnimationFrame(draw);
}

function keyDownHandler(keyPressed)
{   
    var code = keyPressed.keyCode;

    if (code == "37") //left key
    {      
        x2+=2;
        
    }
    if (code == "39")   //right key
    {       
        x2-=2;
        
    }
}

setTimeout(draw(), 100000);

   