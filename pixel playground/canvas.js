let object = [];
let color = [[255, 255, 255],[254, 242, 0],[173, 226, 34],[147, 237, 225],[74, 208, 229],[149, 119, 181],[255, 112, 138],[255, 160, 87], 
            [0, 0, 0],[255, 179, 0],[2, 120, 61],[52, 181, 160],[0, 67, 133],[115, 26, 117],[187, 0, 56],[156, 64, 22],];

let bg;
let prevBG;
let preview = false;

var currentObj;
var currentColor;
var currentSize;

let listObj = [];
let previewList = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('my-background');
  //createCanvas(1000, 800);
  loadPattern();

  bg = 0;
  prevBG = 0;

  currentObj = 2;
  currentColor = 8;
  currentSize = 50;
}
  
function draw() {

  if (preview === true) {
    
  } else {

    // translating to the centre
    translate(width/2, height/2);

    // Canvas
    noStroke();
    fill(color[bg][0],color[bg][1],color[bg][2]);
    rect(-300,-335,600,600); // canvas

    onCanvas(listObj);
    hover();

    // Background
    noStroke();
    fill(250, 241, 189);
    rect(-width/2,-height/2,width/2-300,height);
    rect(300,-height/2,width/2-300,height);
    rect(-width/2,-height/2,width,height/2-335);
    rect(-width/2,265,width,height/2-265);

    // Loading Elements
    buttons();
    leftPanel();
    rightPanel();
  }
}

function loadPattern() {
  // Load left images
  object.push(loadImage('Pattern/l1.PNG')); // straight line
  object.push(loadImage('Pattern/l2.PNG')); // background fill
  object.push(loadImage('Pattern/l3.PNG')); // triangle
  object.push(loadImage('Pattern/l4.PNG')); // hexagon
  object.push(loadImage('Pattern/l5.PNG')); // concentric circles
  object.push(loadImage('Pattern/l6.PNG')); // swiggle
  object.push(loadImage('Pattern/l7.PNG')); // rays
  object.push(loadImage('Pattern/l8.PNG')); // checkered
  
  // Load right images
  object.push(loadImage('Pattern/r1.PNG')); // dotted line
  object.push(loadImage('Pattern/r2.PNG')); // square
  object.push(loadImage('Pattern/r3.PNG')); // circle
  object.push(loadImage('Pattern/r4.PNG')); // flower
  object.push(loadImage('Pattern/r5.PNG')); // dotted circle
  object.push(loadImage('Pattern/r6.PNG')); // waves
  object.push(loadImage('Pattern/r7.PNG')); // circle grid
  object.push(loadImage('Pattern/r8.PNG')); // trippy effect
}

function buttons() {

  // Canvas and the Buttons
  noStroke();
  fill(255, 199, 213);
  rect(-275,300,100,30,5); // clear button
  fill(198, 227, 196);
  rect(-125,300,100,30,5); // undo button
  fill(172, 237, 251);
  rect(25,300,100,30,5); // preview button
  fill(219, 197, 236);
  rect(175,300,100,30,5); // download button

  // Text in the Buttons
  fill(0);
  textAlign(CENTER);
  textSize(18);
  text('Clear', -225, 321);
  text('Undo', -75, 321);
  text('Preview', 75, 321);
  text('Download', 225, 321);
}

function leftPanel() {
  
  tint(0);

  // first column 
  for (let i=0; i<8; i++) {
    image(object[i], -450, -230+(i*50), 50, 50);
  }
  // second column
  for (let i=0; i<8; i++) {
    image(object[i+8], -400, -230+(i*50), 50, 50);
  }
}

function rightPanel() {

  noStroke(); // yellow, green, greenishblue, blue, purple, pink/red, orange

  // first column - light 
  for (let i=0; i<8; i++) {
    fill(color[i][0],color[i][1], color[i][2]);
    rect(350,-235+(i*50),50,50);
  }

  // second column - dark
  for (let i=0; i<8; i++) {
    fill(color[i+8][0],color[i+8][1], color[i+8][2]);
    rect(400,-235+(i*50),50,50);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) currentSize += 10;
  if (keyCode === DOWN_ARROW) currentSize -= 10;

  if (currentSize<20) currentSize = 20;
  if (currentSize>200) currentSize = 200;
}

function mousePressed() {

  // selecting color
  for (let i=0; i<8; i++) if ((mouseX-width/2>350 && mouseX-width/2<400) && (mouseY-height/2>-235+(i*50) && mouseY-height/2<-185+(i*50))) currentColor = i;
  for (let i=0; i<8; i++) if ((mouseX-width/2>400 && mouseX-width/2<450) && (mouseY-height/2>-235+(i*50) && mouseY-height/2<-185+(i*50))) currentColor = i+8;

  // selecting shape
  for (let i=0; i<8; i++) if ((mouseX-width/2>-450 && mouseX-width/2<-400) && (mouseY-height/2>-235+(i*50) && mouseY-height/2<-185+(i*50))) currentObj = i+1;
  for (let i=0; i<8; i++) if ((mouseX-width/2>-400 && mouseX-width/2<-350) && (mouseY-height/2>-235+(i*50) && mouseY-height/2<-185+(i*50))) currentObj = i+9;

  // placing on canvas
  if (mouseX-width/2 <= +300 && mouseX-width/2 >= -300 && mouseY-height/2 <= +265 && mouseY-height/2 >= -335) {
    if (currentObj === 2) {
      prevBG = bg;
      bg = currentColor;
      if (currentColor === 8) currentColor = 0;
      else currentColor = 8;
    } else {
      listObj.push([currentObj, (mouseX-(width/2)-(currentSize/2)), (mouseY-(height/2)-(currentSize/2)), currentSize, currentColor]);
    }
  }

  // Mouse Press for Buttons
  if (mouseX-width/2 <= -175 && mouseX-width/2 >= -275 && mouseY-height/2 <= +330 && mouseY-height/2 >= 300) clearButton();
  if (mouseX-width/2 <= -25 && mouseX-width/2 >= -125 && mouseY-height/2 <= +330 && mouseY-height/2 >= 300) undoButton();
  if (mouseX-width/2 <= 125 && mouseX-width/2 >= 25 && mouseY-height/2 <= +330 && mouseY-height/2 >= 300) previewButton();
  if (mouseX-width/2 <= 275 && mouseX-width/2 >= 175 && mouseY-height/2 <= +330 && mouseY-height/2 >= 300) downloadButton();
}

function hover() {
  if (mouseX-width/2 <= +300 && mouseX-width/2 >= -300 && mouseY-height/2 <= +265 && mouseY-height/2 >= -335) {
    
    tint(color[currentColor][0],color[currentColor][1], color[currentColor][2]);

    // main mouse pointer
    image(object[currentObj-1], mouseX-width/2-currentSize/2, mouseY-height/2-currentSize/2, currentSize, currentSize);

    // top bottom right left
    if (mouseX-width/2 <= -300+currentSize/2) image(object[currentObj-1],mouseX-width/2+600-currentSize/2,mouseY-height/2-currentSize/2,currentSize,currentSize); // right
    if (mouseX-width/2 >= 300-currentSize/2) image(object[currentObj-1],mouseX-width/2-600-currentSize/2,mouseY-height/2-currentSize/2,currentSize,currentSize); // left
    if (mouseY-height/2 <= -335+currentSize/2) image(object[currentObj-1],mouseX-width/2-currentSize/2,mouseY-height/2+600-currentSize/2,currentSize,currentSize); // bottom
    if (mouseY-height/2 >= 265-currentSize/2) image(object[currentObj-1],mouseX-width/2-currentSize/2,mouseY-height/2-600-currentSize/2,currentSize,currentSize); // top

    // four corners
    if ((mouseX-width/2 <= -300+currentSize/2) && (mouseY-height/2 <= -335+currentSize/2)) image(object[currentObj-1],mouseX-width/2+600-currentSize/2,mouseY-height/2+600-currentSize/2,currentSize,currentSize); // right bottom
    if ((mouseX-width/2 <= -300+currentSize/2) && (mouseY-height/2 >= 265-currentSize/2)) image(object[currentObj-1],mouseX-width/2+600-currentSize/2,mouseY-height/2-600-currentSize/2,currentSize,currentSize); // right top
    if ((mouseX-width/2 >= 300-currentSize/2) && (mouseY-height/2 <= -335+currentSize/2)) image(object[currentObj-1],mouseX-width/2-600-currentSize/2,mouseY-height/2+600-currentSize/2,currentSize,currentSize); // left bottom
    if ((mouseX-width/2 >= 300-currentSize/2) && (mouseY-height/2 >= 265-currentSize/2)) image(object[currentObj-1],mouseX-width/2-600-currentSize/2,mouseY-height/2-600-currentSize/2,currentSize,currentSize); // left top
  }
}

function onCanvas(list) {
  for (let i = 0; i < list.length; i++) {
  
    tint(color[list[i][4]][0],color[list[i][4]][1],color[list[i][4]][2]);

    // main mouse pointer
    image(object[list[i][0]-1], list[i][1], list[i][2], list[i][3], list[i][3]);

    // top bottom right left
    if (list[i][1]+list[i][3]/2 <= -300+list[i][3]/2) image(object[list[i][0]-1], list[i][1]+600, list[i][2], list[i][3], list[i][3]); // right
    if (list[i][1]+list[i][3]/2 >= 300-list[i][3]/2) image(object[list[i][0]-1], list[i][1]-600, list[i][2], list[i][3], list[i][3]); // left
    if (list[i][2]+list[i][3]/2 <= -335+list[i][3]/2) image(object[list[i][0]-1], list[i][1], list[i][2]+600, list[i][3], list[i][3]); // bottom
    if (list[i][2]+list[i][3]/2 >= 265-list[i][3]/2) image(object[list[i][0]-1], list[i][1], list[i][2]-600, list[i][3], list[i][3]); // top

    // four corners
    if ((list[i][1]+list[i][3]/2 <= -300+list[i][3]/2) && (list[i][2]+list[i][3]/2 <= -335+list[i][3]/2)) image(object[list[i][0]-1], list[i][1]+600, list[i][2]+600, list[i][3], list[i][3]); // right bottom
    if ((list[i][1]+list[i][3]/2 <= -300+list[i][3]/2) && (list[i][2]+list[i][3]/2 >= 265-list[i][3]/2)) image(object[list[i][0]-1], list[i][1]+600, list[i][2]-600, list[i][3], list[i][3]); // right top
    if ((list[i][1]+list[i][3]/2 >= 300-list[i][3]/2) && (list[i][2]+list[i][3]/2 <= -335+list[i][3]/2)) image(object[list[i][0]-1], list[i][1]-600, list[i][2]+600, list[i][3], list[i][3]); // left bottom
    if ((list[i][1]+list[i][3]/2 >= 300-list[i][3]/2) && (list[i][2]+list[i][3]/2 >= 265-list[i][3]/2)) image(object[list[i][0]-1], list[i][1]-600, list[i][2]-600, list[i][3], list[i][3]); // left top
  }
}

function clearButton() {
  listObj = [];
  bg = 0;
  prevBG = 0;
  currentObj = 2;
  currentColor = 8;
  currentSize = 50;
}

function undoButton() {
  if (listObj.length === 0) {
    bg = 0;
    prevBG = 0;
    currentObj = 2;
    currentColor = 8;
    currentSize = 50;
  } else if (currentObj === 2 && bg !== prevBG) bg = prevBG;
  else listObj.pop();
}

function previewButton() {
  preview = true;
  previewList = listObj;
  for (let i=0; i<previewList.length; i++) {
    previewList[i][1] = ((previewList[i][1]+300)/3) - width/2;
    previewList[i][2] = ((previewList[i][2]+300)/3) - height/2;
    previewList[i][3] = previewList[i][3]/3;
    console.log(previewList[i][0],previewList[i][1],previewList[i][2],previewList[i][3],previewList[i][4]);
  }
  fill(color[bg][0],color[bg][1],color[bg][2]);
    rect(-width/2,-height/2,width,height);
    onCanvas(previewList);
    for (let n=0; n<=10; n++) {
      for (let m=0; m<=7; m++) {
        onCanvas(listObj);
        updateW(0);
      }
      updateW(1800);
      updateH(0);
    }
}

function updateW(w) {
  for (let i=0; i<previewList.length; i++) {
    previewList[i][1] = previewList[i][1]+200 - w;
  }
}

function updateH(h) {
  for (let i=0; i<previewList.length; i++) {
    previewList[i][2] = previewList[i][2]+200;
  }
}

function downloadButton() {
  save('image.png');
}