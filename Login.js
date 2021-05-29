class Login {

    constructor() {
      
    }
    display(){
        var title=createElement('h2');
       title.html("FITNESS APP");

       var input = createInput("Name");
       var button = createButton('Play');
       
       input.position(500, 300);
       button.position(650, 300);
   title.position(500,0)
       button.mousePressed(function(){
         input.hide();
         button.hide();
   
         var name = input.value();
         
         playerCount+=1;
         player.update(name)
        
         var greeting = createElement('h3');
         greeting.html("Hello " + name )
         greeting.position(130, 160)
       });
   

      
    
       
    
      }
    }
