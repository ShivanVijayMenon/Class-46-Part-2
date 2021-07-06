class Game {
    constructor(){
        


    }
    
    getState(){

      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         
        gameState = data.val();

      })
     
    }
  
    update(state){

      database.ref('/').update({
        
        gameState : state

      });

    }
  
    start(){

      if(page === 2){

        button2.destroy();
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
        
      }

    }

    play(){
      
      game.getState();

      if(gameState === 1){

        Player.getPlayerInfo();

        var index = 0;
        var othluck = 0;
        var plrluck = 0;
        if(allPlayers !== undefined){

          for(var plr in allPlayers){

            index = index + 1;

            if(index === player.index){

              plrluck = allPlayers[plr].luck;

            }

            othluck = allPlayers[plr-1].luck;

          }

        }

      }

    }
    
  }
  
