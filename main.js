var noseX=0;
var noseY=0;
function preload(){
    clownNose=loadImage("https://i.postimg.cc/8PLWXQnk/red-nose.png");
}
function setup(){
    canvas=createCanvas(350,300);
    canvas.position(590,200);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function take_snapshot(){
    save('Red_Nose_Selfie');
}
function gotPoses(results){
    if(results.length>0){
        noseX=results[0].pose.nose.x - 170;
        noseY=results[0].pose.nose.y-110;
        console.log("Nose X = "+results[0].pose.nose.x);
        console.log("Nose Y = "+results[0].pose.nose.y);
        /*console.log("Left Shoulder X = "+results[0].pose.leftShoulder.x);
        console.log("Left Shoulder Y = "+results[0].pose.leftShoulder.y);
        console.log("Right Shoulder X  = "+results[0].pose.rightShoulder.x);
        console.log("Right Shoulder Y = "+results[0].pose.rightShoulder.y);*/
    }
}
function draw(){
    image(video,0,0,350,300);
    image(clownNose,noseX,noseY,30,30);
}
function modelLoaded(){
    console.log("Model has been loaded");
}
