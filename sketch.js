//creating the variables
var myImage;
var mySong;


function preload() {
  //loading the files
  myImage = loadImage("./assets/mario.png");
  mySong = loadSound("./assets/race.mp3");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  background(0);

}

function draw() {

  interference();
  testo();
  //image(img,x,y,[width],[height])
  image(myImage, windowWidth / 3, windowHeight / 6, myImage.width / 8, myImage.height / 8);
  //playing the song and changing the volume
  mySong.play();
  mySong.amp(0.8);

}

function interference() {
  //creating the background
  for (var x = 0; x < width; x += width / 50) {
    for (var y = 0; y < height; y += width / 50) {
      rect(x, y, 50, 50);
      fill(210 * random());
      noStroke();
    }
  }
}
//creating the rectangle with the text
function testo() {
  fill(255);
  stroke(0);
  //rect(x,y,w,h,[tl],[tr],[br],[bl])
  rect(100, windowHeight / 1.3, 300, 100);

  var myText = "Click To Start!";
  fill(0);
  textFont("Roboto Mono");
  textAlign(RIGHT);
  textSize(30);
  //text(str,x,y,[x2],[y2])
  text(myText, 387, windowHeight / 1.3 + 60);
}
