let NUM_OF_PARTICLES = 200;
let particles = [];
let seq = 0;

function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0, 30, 70);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    //  p.move();
    //  p.fall(); // ***
     //p.bounce();
    // p.display();
    p.reappear();
    // p.limitPos();
     // p.wind();
    // p.stop();

    switch (seq) {
      case 0:
        p.scalesize = p.origscalesize; // p. replaces this.
       p.r= p.a
        p.g =p.s
        p.b =p.d
         p.move();
          p.wind();
        p.display();
        fill(255);
        textSize(30)
  text("Click SpaceBar to see magic", 200, 400);

        
        // p.stop();
        break;
      case 1:
       
        p.display();
        fill(255);
        textSize(20)
  text("Slow down,Time stop but if you want to see the magic click spacebar", 80, 400);

          
        break;
      case 2:
        push();
        p.zoomIn();
        p.white();
        p.display();
        pop();
        fill(250 );
        textSize(30)
  text("Everymoment of your life is same as snowflakes unique", 30, 400); 

  
  
        
        
        break;
      case 3:
        
      

        // zoomIn();
        break;
      default:
        p.move();
        break;
    }
  }

  fill(255);
  text("Sequence: " + seq, 10, 20);
}

// function mousePressed() {
//   proceedSequence();
// }

function zoomIn() {
   
}

function proceedSequence() {
  seq++;
  if (seq == 4) {
    // if sequence reached the last phase,
    // we reset the sequence.
    seq = 0;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.stop();
    }
    console.log("left");

    // change colors
  }

  if (keyCode == 32) {
    proceedSequence();
  }
}

console.log("left");
class Particle {
  constructor(x, y) {
    // properties
    this.x = x;
    this.y = y;
    this.xSpd = random(-3, 3);
    this.ySpd = random(4, 7);
    this.dia = 5;
    this.rotatespd = random(0.02, 0.03);
    this.scalesize = random(0.08, 0.25);
    this.origscalesize = this.scalesize;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a= this.r;
    this.s =this.g;
    this.d = this.b;
    this.seq = 0;
    
   
  }
  // update(){
  //   switch (this.seq) {
  //   case 0:
  //     this.drawIntro();
  //     break;
  //   // case 1:
  //   //   drawScene1();
  //   //   break;
  //   // case 2:
  //   //   drawScene2();
  //   //   break;
  //   // case 3:
  //   //   drawScene3();
  //   //   break;
  //   default:
  //     this.drawEnding();
  //     break;
  // }
  // }
  // methods
  fall() {
    this.ySpd += 0.1;
  }
  
  limitPos() {
    this.y = constrain(this.y, 0, 800);
  }
  //change color

  bounce() {
    if (this.x < 0) {
      this.x = 0;
      this.xSpd = this.xSpd * -1;
    } else if (this.x > width) {
      this.x = width;
      this.xSpd = this.xSpd * -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.ySpd = this.ySpd * -1;
    } else if (this.y > height) {
      this.y = height;
      this.ySpd = this.ySpd * -1;
    }
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  wind() {
    this.xSpd += 0.2;
    this.ySpd += 0.01;
  }

  stop() {
    // if (keyIsPressed)
    this.xSpd = 0;
    this.ySpd = 0;
    //console.log("mousepressed");
  }

  reappear() {
    if (this.x < 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height;
    } else if (this.y > height) {
      this.y = 0;
    }
  }
  zoomIn(){

    this.scalesize = this.scalesize + 0.05;
    if (this.scalesize >=0.45 ) {
      this.scalesize= 0.45
      
    }
  }
  white(){
   this.r =255;
    this.g =255;
    this.b =255
  }
  display() {
    noFill();

    stroke(this.r, this.g, this.b); //fill color 
    strokeWeight(1);

    push();
    translate(this.x, this.y);
    rotate(frameCount * this.rotatespd);

    scale(this.scalesize);
    rotate(PI / 4);
    ellipse(0, 0, 200, 10);
    ellipse(0, 0, 10, 200);
    ellipse(0, 0, 10, 200);
    ellipse(0, 0, 200, 10);

    rotate(PI / 10);
    ellipse(0, 0, 200, 10);
    ellipse(0, 0, 10, 200);

    rotate(PI / 5);
    ellipse(0, 0, 10, 200);
    ellipse(0, 0, 10, 200);
    circle(0, 0, 50);

    ellipse(0, 0, 100, 100);
    ellipse(0, 0, 110, 110);
    ellipse(0, 0, 50, 50);

    rotate(PI / 2);
    ellipse(0, 0, 10, 200);
    ellipse(0, 0, 10, 200);

    pop();
  }
  // drawIntro(){
  //   //
  //   push()
  //   fill(255)
  //   ellipse(width/2, height/2, 50, 50)
  //   pop()
  // }
  // drawEnding(){
  //   //
  //   push()
  //   fill(0)
  //   ellipse(width/2, height/2, 50, 50)
  //   pop()
  // }
}
