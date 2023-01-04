music_1=""
music_2=""
leftWrist_x=0
leftWrist_y=0
rightWrist_x=0
rightWrist_y=0
scoreLeftWrist=0;
scoreRightWrist=0;
function preload(){
    music_1=loadSound("music.mp3")
    music_2=loadSound("music2.mp3")
}
function setup(){
    canvas=createCanvas(480,380)
    canvas.center()
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modalloaded);
    poseNet.on('pose',gotposes);
}
function modalloaded(){
    console.log("modal is loaded")
}
function draw(){
    image(video,0,0,480,380)
    fill("red");
    stroke("black")
    if(scoreLeftWrist>0.2){
        music_1_variable.isPlaying()
        circle(leftWrist_x,leftWristy,20)
        
    }
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        rightWrist_x=results[0].pose.rightWrist.x
        rightWrist_y=results[0].pose.rightWrist.y
        console.log("rightWristX= "+rightWrist_x+" and rightWristY= "+rightWrist_y)
        leftWrist_x=results[0].pose.leftWrist.x
        leftWrist_y=results[0].pose.leftWrist.y
        console.log("left wrist x= "+leftWrist_x+"and left wrist Y= "+leftWrist_y)
        scoreLeftWrist=results[0].pose.keypoints[9].score;
    scoreRightWrist=results[0].pose.keypoints[10].score;
    console.log("score of left wrist= "+scoreLeftWrist+"and score of right wrist= "+scoreRightWrist);
    }
}