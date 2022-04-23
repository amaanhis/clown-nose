noseX=0;
noseY=0;
function preload()
{
clown_nose=loadImage("https://i.postimg.cc/kXJGt0FS/455-4557163-icon-clown-nose-circle-hd-png-download.png");
}
function setup()
{
 canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes)
}

function gotposes(result)
{
    if (results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.Y;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}
function modelloaded()
{
    console.log("posenet is initialized");
}

function draw()
{
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
circle(noseX,noseY,20);
image(clown_nose,noseX,noseY,60,30);
}
function take_snapshot()
{
    save('myfilterimage.png');
}