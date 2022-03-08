function preload() {
    //load game assets
  }
  
  function setup() {
    createCanvas(1500, 800);
    player = createSprite(100, 650, 30, 30);
    player.shapeColor = "white";
    target = createSprite(650, 100, 30, 30);
    target.shapeColor = "blue";
    obs1 = createSprite(1500, 200, 200, 20);
    obs1.shapeColor = "red";
    obs2 = createSprite(100, 350, 200, 20);
    obs2.shapeColor = "red";
    obs3 = createSprite(500, 500, 200, 20);
    obs3.shapeColor = "red";
    obs1.velocityX = 10;
    obs2.velocityX = -5;
    obs3.velocityX = 15;
    edges = createEdgeSprites();
  }
  
  function draw() {
    background("black");
  
    obs1.bounceOff(edges[1]);
    obs1.bounceOff(edges[0]);
    obs2.bounceOff(edges[1]);
    obs2.bounceOff(edges[0]);
    obs3.bounceOff(edges[1]);
    obs3.bounceOff(edges[0]);
    if (keyDown("up")) {
      player.y = player.y - 3;
    }
    if (keyDown("down")) {
      player.y = player.y + 3;
    }
    if (keyDown("left")) {
      player.x = player.x - 3;
    }
    if (keyDown("right")) {
      player.x = player.x + 3;
    }
    if (player.isTouching(target)) {
      text("YOU WIN", 200, 200);
    }
    if (player.isTouching(obs1)) {
      obs1.velocityX = 0;
      text("YOU LOSE", 200, 200);
    }
    if (player.isTouching(obs2)) {
      obs2.velocityX = 0;
      text("YOU LOSE", 200, 200);
    }
    if (player.isTouching(obs3)) {
      obs3.velocityX = 0;
      text("YOU LOSE", 200, 200);
    }
  
    drawSprites();
  }
  