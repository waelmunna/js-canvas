var c=document.getElementById("myCanvas");


var ctx= c.getContext("2d");


ctx.lineWidth=3;
ctx.fillStyle='black';
ctx.strokeRect(10,10,380,280);

ctx.fillStyle='green';
ctx.fillRect(12,12,378,278);

//canvas ar center bhir korar jnno 

var CenterX= c.width/2;
var CenterY=c.height/2;

// draw korar jnno
ctx.beginPath();  // ai line ta drawing path line
ctx.arc(CenterX, CenterY, 50, 0, 2*Math.PI,false); // ai line ta diya drawing instruction kore
ctx.fillStyle='red';
ctx.fill(); // fill kore hobe 
