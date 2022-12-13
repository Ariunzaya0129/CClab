let img;
let mode = 0;
let img2;
let factor = 0.4;
let transforming = false;
let counter = 0;
let xpos = 0;
let ypos = 0;
let img3;
let smallPoint, largePoint;
let transforming2 = false;
let pointillize;
let counter2=0
let xpos1=0;
let ypos1=0;
let factor1=0.4;
let transforming3 =false
let counter3=0
let xpos3=0
let ypos3=0
let factor3=0.4
let transforming4 =false
let counter4=0
let xpos4=0
let ypos4=0
let factor4=0.4

    let x;
    let y;
    let pix
// function draw() {
//   image(img, 0, 0); // Display at full opacity
//   let dx = mouseX - img.width / 2 - offset;
//   offset += dx * easing;
//   tint(255, 127); // Display at half opacity
//   image(img, offset, 0);
// }

function preload() {
  // preload() runs once
  img = loadImage("assets/eye.png");
  img2 = loadImage("assets/mongol.jpeg");
  img3 = loadImage("assets/nature3.jpg");
  img4 = loadImage("assets/anza.jpg")
  img5 = loadImage("assets/nogoonn1.jpeg");
  
}

function setup() {
  createCanvas(800, 800);

  smallPoint = 4;
  largePoint = 10;
  //
  noStroke();
  background(255);
  img.loadPixels();
}

function clicksRightPlace() {
  let r = dist(385, 274, 419, 278);
  let d = dist(385, 274, mouseX, mouseY);
  if (r <= d) {
    return false;
  } else {
    return true;
  }
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  // image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  // background(255, 255, 255);

  switch (mode) {
    case 0:
      //image(img, 0, 0, img.width / 4, img.height / 4);
      fill(255);
      rect(0, 0, width, height);
      if (clicksRightPlace()) {
        if (mouseIsPressed && !transforming) {
          transforming = true;
        }
      }

      if (transforming) {
        factor = factor + 0.02;
        counter = counter + 1.8;
        xpos = xpos - 19.5;
        ypos = ypos - 13.5;
      }
      // console.log(counter)
      image(img, xpos, ypos, img.width * factor, img.height * factor);
      if (counter > 600) {
        transforming = false;
        mode = 1;
      }
      break;
    case 1:
      scene2();
if (mouseIsPressed&&!transforming2){
  if (mouseX>300 && mouseX < 600 && mouseY <650  && mouseY >80){
    transforming2 = true 
    console.log(transforming2)
      }
}
  if (transforming2) {
    image(img3, 0+xpos1, 0+ypos1, img3.width*2.5 * factor1, img3.height*2.5 * factor1);
        factor1 = factor1 + 0.002;
        counter2 = counter2 + 2;
        xpos1 = xpos1 - 2.8;
        ypos1 = ypos1 - 1;
    
    // console.log("done")
      }
      // console.log(counter)
      
  // console.log(xpos1, ypos1)
       if (counter2 > 600) {
      transforming2 = false;
       mode = 2;
      }

      
      break;
    case 2:
      //image(img2, 0, 0, img2.width / 2, img2.height / 4);
      for (let i = 0; i < 200; i++) {
    pointillize = map(mouseX, 0, width, smallPoint, largePoint);
    x = floor(random(img5.width*2));
    y = floor(random(img5.height*1.5));
    pix = img5.get(x, y);
    fill(pix, 128);
    ellipse(x, y, pointillize, pointillize);
        
  }      if (mouseIsPressed&&!transforming3){
  if (mouseX>310 && mouseX < 600 && mouseY >300  && mouseY <670){
    transforming3 = true 
    console.log(transforming3)
      }
}
  if (transforming3) {
    // scale(1.3)
    image(img5, 0+xpos3, 0+ypos3, img5.width*3 * factor3, img5.height*3 * factor3);
        factor3 = factor3 + 0.001;
        counter3 = counter3 + 2;
        xpos3 = xpos3 - 2;
        ypos3 = ypos3 - 1.3;
  
    // console.log("done")
      }
      // console.log(counter)
      
  // console.log(xpos1, ypos1)
       if (counter3 > 1000) {
      transforming3 = false;
       mode = 3;
      }
      
      break;
    case 3:
      for (let i = 0; i < 200; i++) {
    pointillize = map(mouseX, 0, width, smallPoint, largePoint);
    x = floor(random(img5.width*2));
    y = floor(random(img5.height*1.5));
    pix = img2.get(x, y);
    fill(pix, 128);
    ellipse(x, y, pointillize, pointillize);}
        if (mouseIsPressed&&!transforming4){
  if (mouseX>400 && mouseX < 600 && mouseY >300  && mouseY <670){
    transforming4 = true 
    console.log(transforming4)
      }
}
  if (transforming4) {
    // scale(1.3)
    image(img2, 0+xpos4, 0+ypos4, img2.width*3 * factor4, img2.height*3 * factor4);
        factor4 = factor4 + 0.0006;
        counter4 = counter4 + 3;
        xpos4 = xpos4 - 2;
        ypos4 = ypos4 - 1.3;
  
    // console.log("done")
      }
      // console.log(counter)
      
  // console.log(xpos1, ypos1)
       if (counter4 > 1800) {
      transforming4 = false;
       mode = 4;
      }
      //image(img, xpos, ypos, img.width/factor3, img.height/factor3)
      break;
      case 4:
      background(255)
      image(img, 0, 0, img.width / 4, img.height / 4);
       
      break;
      //
    default:
    //
  }
}

function mousePressed() {
  console.log(mouseX, mouseY);
}
function scene2() {
  // image(img3, 0, 0, img3.width / 2, img3.height / 2);
  for (let i = 0; i < 200; i++) {
    pointillize = map(mouseX, 0, width, smallPoint, largePoint);
    x = floor(random(img3.width/1));
    y = floor(random(img3.height/1));
    pix = img3.get(x, y);
    fill(pix, 128);
    ellipse(x, y, pointillize, pointillize);
  }
}
