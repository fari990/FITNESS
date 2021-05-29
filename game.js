class Game{
constructor(){}

start(){
    if(gameState===0){
        player=new Player();
        
        login=new Login();
        login.display();
    }
}
}