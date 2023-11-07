var nosex=0;
var nosey=0;

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
    }
    function modelloaded(){
        console.log("modelloaded");
    }
    function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(nosex,nosey);
    }
    }
    function draw(){
    image(video,0,0,300,300);
    image(mustache,nosex-30,nosey,70,30);
    }
    function preload(){
        mustache=loadImage("mustache-removebg-preview.png");
    }
    function takesnapshot(){
        save("webpage.png");
    }
