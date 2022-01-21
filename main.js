var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_img="mars.jpg";
var roverheight=100;
var roverwidth=100;
rover_x=10;
rover_y=10;
roverhold="rover.png";
function add(){
    mars_img=new Image();
    mars_img.src=background_img;
    mars_img.onload=uploadbackground;

    rover_img=new Image();
    rover_img.src=roverhold;
    rover_img.onload=uploadrover;
}
function uploadbackground(){
    ctx.drawImage(mars_img,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,roverwidth,roverheight);
}

