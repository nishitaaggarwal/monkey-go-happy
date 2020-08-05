var monkey, stone, banana, monkeyimg, bananaimg, jungle, jungleimg, stoneimg, ground, score;

function preload() {
  monkeyimg = loadAnimation("Monkey_02.png", "Monkey_01.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaimg = loadImage("banana.png");
  stoneimg = loadImage("stone.png")
  jungleimg = loadImage("jungle.jpg");

}

function setup() {
  createCanvas(600, 300);
  jungle = createSprite(100, 50)

  jungle.addAnimation("jungleim", jungleimg)
  monkey = createSprite(100, 200)
  monkey.addAnimation("monkeyim", monkeyimg)
  monkey.scale = 0.1
  score = 0
  ground = createSprite(400, 300, 800, 10);
  ground.velocityX = -6;
  ground.x = ground.width / 2;
  ground.visible = false;
  bananaGroup = new Group();
  stoneGroup = new Group();

  jungle.velocityX = -6



}


function draw() {
  background(255);

  if (jungle.x < 2) {
    jungle.x = jungle.width / 2

  }
  if (ground.x < 2) {
    ground.x = ground.width / 2

  }
  if (keyDown("space")) {
    monkey.velocityY = -13
  }
  if (bananaGroup.isTouching(monkey)) {
    score = score + 2;
    bananaGroup.destroyEach();
  }
  switch (score) {
    case 10:
      player.scale = 0.12;
      break;
    case 20:
      player.scale = 0.14;
      break;
    case 30:
      player.scale = 0.16;
      break;
    case 40:
      player.scale = 0.18;
      break;
    default:
      break;
  }

  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  if (monkey.isTouching(stoneGroup)) {
    monkey.scale = 0.08
  }
  spawnFood();
  spawnStones();
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);

}

function spawnFood() {

  if (frameCount % 80 === 0) {
    var banana = createSprite(600, 250, 40, 10);
    banana.y = random(120, 200);
    banana.addImage(bananaimg);
    banana.scale = 0.05;
    banana.velocityX = -5;

    banana.lifetime = 300;
    bananaGroup.add(banana);
  }
}

function spawnStones() {
  if (frameCount % 300 === 0) {
    var stone = createSprite(800, 300, 10, 40);
    stone.addImage("stoneim", stoneimg);
    stone.velocityX = -6;
    stone.scale = 0.3;

    stoneGroup.add(stone);

  }
}