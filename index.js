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
    var width = this.width;
    var height = this.height; 
    console.log(width)
    var playerPosition = 0;  //position of the user movable weight
    var playerWeight = 0;
    var leftHandScore = 0;  //keep track of total weight on the left side of the seesaw
    var rightHandScore = 0; //keep track of the total weight on the right side of the seesaw
    var triangleHeight = 0;
    var lineStart_x = 0;
    var lineStart_y = 450;
    var lineEnd_x = 500;
    var lineEnd_y=450;

    

//Draws Ball
function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var seesaw = canvas.getContext("2d");

    ctx.clearRect(0,0,500,500); // clear canvas
    ctx.save();   
    ctx.beginPath(); 
    ctx.arc(ballPositionX, ballPositionY++, 10, 0, 2 *Math.PI);
    ctx.fill();

    seesaw.beginPath();
    seesaw.moveTo(lineStart_x, lineStart_y);
    seesaw.lineTo(lineEnd_x, lineEnd_y);
    seesaw.strokeStyle = '#ff0000';
    seesaw.stroke();


    ctx.restore();
    window.requestAnimationFrame(draw);
}

setTimeout(draw(), 100000);

        
     
        
