object=[];
status1="";
function setup(){
    canvas=createCanvas(700,500);
    canvas.position(400,180);
    modal=ml5.objectDetector("cocossd",modelloaded);
}
function modelloaded(){
console.log("Model is loaded");
status1=true;
modal.detect(img,gotResults);
}
function gotResults(error,results){
if(error){
    conole.log(error);
}
else{
console.log(results);
object=results;
}
}
function preload(){
    img=loadImage("Tv.jpg");
}
function draw(){
image(img,0,0,700,500);

if(status1==true)
{
for(i=0;i<object.length;i++){
    document.getElementById("status").innerHTML="Status: Object Detected";
    fill("red");
    confidence=floor(object[i].confidence*100);
    text(object[i].label+""+confidence+"%",object[i].x,object[i].y);
    textSize(20);
    noFill();
    stroke(150,0,0);
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
    }
}