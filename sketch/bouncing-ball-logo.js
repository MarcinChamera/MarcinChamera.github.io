/* Marcin Chamera - 14 characters (including whitespace) */

let fontSize = 40,
    gravity = 0.1,
    bounced = false,
    charactersToShow = 0,
    string = ['M', 'a', 'r', 'c', 'i', 'n', ' ', 'C', 'h', 'a', 'm', 'e', 'r', 'a'],
    characterSpace = 30,
    minWidth590 = window.matchMedia('(min-width: 590px)');
    minWidth337 = window.matchMedia('(min-width: 337px)');

let ball = {
  radius: 12,
  x: fontSize / 2,
  y: 5,
  speed: 1,
  leapCoefficient: 0.095
}

function printData(data)
{
   print("counter: " + data); 
}

function setup()
{ 
  var canvas;
  if(minWidth590.matches)
  {
    canvas = createCanvas(string.length * characterSpace + 5, 100);
  }
  else if(minWidth337.matches)
  {
    canvas = createCanvas(7 * characterSpace, 100);
  }
  else
  {
    canvas = createCanvas(100, fontSize);
  }
  canvas.parent('p5js-sketch-container');
}

function windowResized()
{
  if(minWidth590.matches)
  {
    resizeCanvas(string.length * characterSpace + 5, 100);
  }
  else if(minWidth337.matches)
  {
    resizeCanvas(7 * characterSpace, 100);
  }
  else
  {
    resizeCanvas(100, fontSize);
  }
}

function displayBall()
{
  fill(256);
  ellipse(ball.x, ball.y, ball.radius, ball.radius);
}

function moveBallVertically()
{
  ball.y += ball.speed;
  ball.speed += gravity;
}

function bounceBall()
{
  if (ball.y >= height - fontSize) {
    bounced = true;
    charactersToShow++;
    ball.speed *= -0.95;
  }
}

function moveBallHorizontally(coefficient)
{
  if(bounced == true)
  {
    ball.x += coefficient * sqrt(ball.y);
  }
}

function displayAvailableCharacters()
{
  fill(256);
  /* allign text horizontally in the CENTER of "width / 2" (as declared in text() function) and vertically
    so that the BOTTOM of the text sticks to the "height" */
  textAlign(CENTER, BOTTOM);
  textSize(fontSize);
  if(charactersToShow < 6)
  {
    for(let i = 0; i < charactersToShow; i++)
    {
      text(string[i], fontSize / 2 + i * characterSpace, height);
    }
  }
  else
  {
    for(let i = 0; i <= charactersToShow; i++)
    {
      text(string[i], fontSize / 2 + i * characterSpace, height);
    }
  }
}

function runDynamicDisplay()
{
  if(charactersToShow < string.length)
  {
    displayAvailableCharacters();
    displayBall();
    moveBallVertically();
    if(charactersToShow == 6)
    {
      moveBallHorizontally(1.85 * ball.leapCoefficient);
    }
    else
    {
      moveBallHorizontally(ball.leapCoefficient);
    }
    bounceBall();
  }
}

function resetDisplaying()
{
  if(ball.x >= width) {
    ball.x = fontSize / 2;
    ball.y = 5;
    ball.speed = 1;
    bounced = false;
    charactersToShow = 0;
  }
}

function runStaticDisplay()
{
  fill(256);
  textSize(fontSize);
  textAlign(CENTER, TOP);
  text('Marcin', width / 2, 5);
  textAlign(CENTER, BOTTOM);
  text('Chamera', width / 2, height - 5);
}

function runInitialsDisplay()
{
  fill(256);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  text('M.C.', width / 2, height / 2);
}

function draw()
{
  clear();
  if(minWidth590.matches)
  {
    runDynamicDisplay();
    resetDisplaying();
  }
  else if(minWidth337.matches)
  {
    runStaticDisplay();
  }
  else
  {
    runInitialsDisplay();
  }
}
