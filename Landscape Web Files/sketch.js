var brushColor
var brushWeight

function setup() {
    createCanvas(640, 480);
    background(235);
    brushColor = color(0);
    brushWeight = strokeWeight(4);
}

function draw() {
  with(multitouch1.context) {
    if(mouseIsPressed) {
        if(mouseX < 25 && mouseY < 350) {
            if(mouseY < 25) {
                brushColor = color(255, 0, 0);
            } else if(mouseY < 50) {
                brushColor = color(255, 128, 0);
            } else if(mouseY < 75) {
                brushColor = color(255, 255, 0);
            } else if(mouseY < 100) {
                brushColor = color(0, 255, 0);
            } else if(mouseY < 125) {
                brushColor = color(0, 255, 255);
            } else if(mouseY < 150) {
                brushColor = color(0, 0, 255);
            } else if(mouseY < 175) {
                brushColor = color(255, 0, 255);
            } else if(mouseY < 200) {
                brushColor = color(150, 75, 0);
            } else if(mouseY < 225) {
                brushColor = color(0);
            } else if(mouseY < 250) {
                brushColor = color(255);
            } else if(mouseY < 275) {
                brushWeight = strokeWeight(2);
            } else if(mouseY < 300) {
                brushWeight = strokeWeight(4);
            } else if(mouseY < 325) {
                brushWeight = strokeWeight(8);
            }
        }

    this.stroke(brushColor);
    this.line(pmouseX, pmouseY, mouseX, mouseY);

    }

    //brushColors
    noStroke();
    this.fill(255, 0, 0);
    this.rect(0, 0, 25, 25);
    this.fill(255, 128, 0);
    this.rect(0, 25, 25, 25);
    this.fill(255, 255, 0);
    this.rect(0, 50, 25, 25);
    this.fill(0, 255, 0);
    this.rect(0, 75, 25, 25);
    this.fill(0, 255, 255);
    this.rect(0, 100, 25, 25);
    this.fill(0, 0, 255);
    this.rect(0, 125, 25, 25);
    this.fill(255, 0, 255);
    this.rect(0, 150, 25, 25);
    this.fill(150, 75, 0);
    this.rect(0, 175, 25, 25);
    this.fill(0);
    this.rect(0, 200, 25, 25);
    this.fill(255);
    this.rect(0, 225, 25, 25);

    //brushWeights
    this.fill(235);
    this.rect(0, 250, 25, 25);
    this.fill(0);
    this.ellipse(13, 263, 3, 3);
    this.fill(235);
    this.rect(0, 275, 25, 25);
    this.fill(0);
    this.ellipse(13, 288, 6, 6);
    this.fill(235);
    this.rect(0, 300, 25, 25);
    this.fill(0);
    this.ellipse(13, 313, 9, 9);

  }
}
