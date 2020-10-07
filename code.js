var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var Ball = createSprite(80, 379, 20,20); 
var Target = createSprite(340, 370, 10, 10);
Target.shapeColor = "red";


var ObstaclesGroup = createGroup();
var Border1 = createSprite(200, 10, 400, 30);
var Border2 = createSprite(10, 200, 30, 400);
var Border3 = createSprite(390, 200, 30, 400);
var Obstacle1 = createSprite(28, 330, 150, 5);
var Obstacle2 = createSprite(150, 330, 5, 320);
var Obstacle3 = createSprite(80, 200, 5, 160);
var Obstacle4 = createSprite(80, 200, 5, 160);
var Obstacle5 = createSprite(80, 120, 120, 5);
var Obstacle6 = createSprite(140, 50, 5, 40);
var Obstacle7 = createSprite(210, 200, 5, 250);
var Obstacle8 = createSprite(270, 120, 120, 5);
var Obstacle9 = createSprite(270, 300, 5, 250);
var Obstacle10 = createSprite(355, 230, 50, 5);

ObstaclesGroup.add(Border1);
ObstaclesGroup.add(Border2);
ObstaclesGroup.add(Border3);
ObstaclesGroup.add(Obstacle1);
ObstaclesGroup.add(Obstacle2);
ObstaclesGroup.add(Obstacle3);
ObstaclesGroup.add(Obstacle4);
ObstaclesGroup.add(Obstacle5);
ObstaclesGroup.add(Obstacle6);
ObstaclesGroup.add(Obstacle7);
ObstaclesGroup.add(Obstacle8);
ObstaclesGroup.add(Obstacle9);
ObstaclesGroup.add(Obstacle10);
var Win = 1;
var Lose = 0;
var gameState = Win;



function draw() {
  
  background("white");
  if (gameState === Win){
    
if (keyDown("up")){
  Ball.velocityX = 0;
  Ball.velocityY = -5;
}

if (keyDown("down")){
  Ball.velocityX = 0;
  Ball.velocityY = +5;
}

if (keyDown("right")){
  Ball.velocityY = 0;
  Ball.velocityX = +5;
}

if (keyDown("left")){
  Ball.velocityY = 0;
  Ball.velocityX = -5;
}
if (Ball.isTouching(Target)){
  text("You Win", 200, 200);
  Ball.velocityX = 0;
  Ball.velocityY = 0;
}
if (ObstaclesGroup.isTouching(Ball)){
  gameState = Lose;
}
}
 if (gameState === Lose) {
     Ball.velocityX = 0;
  Ball.velocityY = 0;
  text("You Lose", 200, 200);
 }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
