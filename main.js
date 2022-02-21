function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
  
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
   
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
fill(0,3,253)
stroke(0,3,253)
noFill();
    rect(0, 0, 640, 480);
    
}

function take_snapshot(){
    save('student_name.png')
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}