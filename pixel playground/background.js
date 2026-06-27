let object = [];

// extreme pastel for a muted background - yellow, green, greenishblue, blue, purple, pink/red, orange
let colorFade = [[255, 247, 156],[198, 227, 196],[182, 239, 221],[172, 237, 251],[219, 197, 236],[255, 199, 213],[252, 207, 164]];

let x = 15;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('my-background');
    background(255, 251, 242)
    loadPattern();
  }
    
  function draw() {
    //if (frameCount === 1) startImg();
    let one = getRandomInt(0,6);
    let two = getRandomInt(0,6);
    let three = getRandomInt(0,6);
    let four = getRandomInt(0,6);

    let a = getRandomInt(0,12);
    let b = getRandomInt(0,12);
    let c = getRandomInt(0,12);
    let d = getRandomInt(0,12);
    let e = getRandomInt(0,12);
    let f = getRandomInt(0,12);
    let g = getRandomInt(0,12);
    let h = getRandomInt(0,12);
    let k = getRandomInt(0,12);
    let l = getRandomInt(0,12);
    let m = getRandomInt(0,12);

    if (frameCount%(12*x) === 0) background(255, 251, 242);

    tint(colorFade[one][0],colorFade[one][1],colorFade[one][2]); // purple
    if (frameCount%(12*x) === 1*x) for(let i=0; i<=10; i++) for(let j=0; j<=5; j++) image(object[a],110+(i*200),20+(j*200),75,75);
    if (frameCount%(12*x) === 2*x) for(let i=0; i<=10; i++) for(let j=0; j<=5; j++) image(object[b],10+(i*200),50+(j*200),75,75);
    if (frameCount%(12*x) === 3*x) for(let i=0; i<=10; i++) for(let j=0; j<=5; j++) image(object[c],85+(i*200),120+(j*200),75,75);
    if (frameCount%(12*x) === 4*x) for(let i=0; i<=10; i++) for(let j=0; j<=5; j++) image(object[d],-20+(i*200),160+(j*200),75,75);
    
    tint(colorFade[two][0],colorFade[two][1],colorFade[two][2]); // green
    if (frameCount%(12*x) === 5*x) for(let i=0; i<=10; i++) for(let j=0; j<=5; j++) image(object[e],140+(i*200),90+(j*200),75,75);
    if (frameCount%(12*x) === 6*x) for(let i=0; i<=10; i++) for(let j=0; j<=5; j++) image(object[f],40+(i*200),180+(j*200),75,75);

    tint(colorFade[three][0],colorFade[three][1],colorFade[three][2]); // blue
    if (frameCount%(12*x) === 7*x) for(let i=0; i<=10; i++) for(let j=0; j<=5; j++) image(object[g],60+(i*200),80+(j*200),25,25);
    if (frameCount%(12*x) === 7*x) for(let i=0; i<=10; i++) for(let j=0; j<=5; j++) image(object[h],180+(i*200),10+(j*200),25,25);

    tint(colorFade[four][0],colorFade[four][1],colorFade[four][2]); // yellow
    if (frameCount%(12*x) === 8*x) for(let i=0; i<=10; i++) for(let j=0; j<=5; j++) image(object[k],130+(i*200),150+(j*200),25,25);
    if (frameCount%(12*x) === 8*x) for(let i=0; i<=10; i++) for(let j=0; j<=5; j++) image(object[l],10+(i*200),110+(j*200),25,25);
    if (frameCount%(12*x) === 8*x) for(let i=0; i<=10; i++) for(let j=0; j<=5; j++) image(object[m],60+(i*200),10+(j*200),25,25);
  }

  function loadPattern() {
    object.push(loadImage('Pattern/l3.PNG')); // triangle
    object.push(loadImage('Pattern/l4.PNG')); // hexagon
    object.push(loadImage('Pattern/l5.PNG')); // concentric circles
    object.push(loadImage('Pattern/l6.PNG')); // swiggle
    object.push(loadImage('Pattern/l7.PNG')); // rays
    object.push(loadImage('Pattern/l8.PNG')); // checkered

    object.push(loadImage('Pattern/r2.PNG')); // square
    object.push(loadImage('Pattern/r3.PNG')); // circle
    object.push(loadImage('Pattern/r4.PNG')); // flower
    object.push(loadImage('Pattern/r5.PNG')); // dotted circle
    object.push(loadImage('Pattern/r6.PNG')); // waves
    object.push(loadImage('Pattern/r7.PNG')); // circle grid
    object.push(loadImage('Pattern/r8.PNG')); // trippy effect
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // if (frameCount%40 === 0) {
  //   for(let i=0; i<=10; i++) {
  //     for(let j=0; j<=5; j++) {
  //       tint(colorFade[one][0],colorFade[one][1],colorFade[one][2]); // purple
  //       image(object[a],110+(i*200),20+(j*200),75,75);
  //       image(object[b],10+(i*200),50+(j*200),75,75);
  //       image(object[c],85+(i*200),120+(j*200),75,75);
  //       image(object[d],-20+(i*200),160+(j*200),75,75);
  //       tint(colorFade[two][0],colorFade[two][1],colorFade[two][2]); // green
  //       image(object[e],140+(i*200),90+(j*200),75,75);
  //       image(object[f],40+(i*200),180+(j*200),75,75);
  //       tint(colorFade[three][0],colorFade[three][1],colorFade[three][2]); // blue
  //       image(object[g],60+(i*200),80+(j*200),25,25);
  //       image(object[h],180+(i*200),10+(j*200),25,25);
  //       tint(colorFade[four][0],colorFade[four][1],colorFade[four][2]); // yellow
  //       image(object[k],130+(i*200),150+(j*200),25,25);
  //       image(object[l],10+(i*200),110+(j*200),25,25);
  //       image(object[m],60+(i*200),10+(j*200),25,25);
  //     }
  //   }
  // }

  function startImg() {
    for(let i=0; i<=10; i++) {
      for(let j=0; j<=5; j++) {
        tint(colorFade[4][0],colorFade[4][1],colorFade[4][2]); // purple
        image(object[2],110+(i*200),20+(j*200),75,75);
        image(object[5],10+(i*200),50+(j*200),75,75);
        image(object[6],85+(i*200),120+(j*200),75,75);
        image(object[4],-20+(i*200),160+(j*200),75,75);
        tint(colorFade[1][0],colorFade[1][1],colorFade[1][2]); // green
        image(object[9],140+(i*200),90+(j*200),75,75);
        image(object[7],40+(i*200),180+(j*200),75,75);
        tint(colorFade[3][0],colorFade[3][1],colorFade[3][2]); // blue
        image(object[3],60+(i*200),80+(j*200),25,25);
        image(object[8],180+(i*200),10+(j*200),25,25);
        tint(colorFade[0][0],colorFade[0][1],colorFade[0][2]); // yellow
        image(object[0],130+(i*200),150+(j*200),25,25);
        image(object[10],10+(i*200),110+(j*200),25,25);
        image(object[11],60+(i*200),10+(j*200),25,25);
      }
    }
  }