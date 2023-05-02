function setup()
{
    canvas = createCanvas(340, 340);
    canvas.position(800, 175);
    canvas.background("rgb(215, 89, 16)");

    video = createCapture(VIDEO);
    video.size(420, 440);
    video.position(200, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function draw()
{

}




function modelLoaded()
{
    console.log("PoseNet is Initialized!");
}




function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
    }
}