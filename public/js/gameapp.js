console.log($);
$(() => {
  //onload
 const $gamebutton = $("<button>"+"Click Me To Score"+"</button>")
 const $game = $("#game")
 $game.css({
   width:'800px',
   height:'600px',
   "background-color":"gray"
 })
 $game.append($gamebutton);
 $gamebutton.on("click",() => {
   socket.emit('myClick', {id: event.target});
   $gamebutton.hide();
   let buttonsize = ((Math.random()*100) + 50).toFixed();
   let color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
   let posx = (Math.random() * ($("#game").width())+$game.position().left);
   let posy = (Math.random() * ($('#game').height())+$game.position().top);
   console.log("PosX: "+posx+"   PosY: "+posy);
   $gamebutton.css({
        'border-color': "rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186)",
        'border-style': "solid",
        'border-width': "1px",
        'color' : "white",
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'background-color': color
    }).show().fadeIn(100).delay(1000);
    $gamebutton.show();

 });





  //end onload
})
