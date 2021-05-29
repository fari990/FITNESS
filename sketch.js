var canvas, backgroundImage;
var gameState=0;
var playerCount;
var database;
var login,game,player;


function setup() {
   canvas =createCanvas(1200,600);
   database=firebase.database();

   game=new Game();
   game.start();
  
}

function draw() {
  
}