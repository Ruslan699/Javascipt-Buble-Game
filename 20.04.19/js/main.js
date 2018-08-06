$(function () {

    $("#sol").click(function(){
      var x = $(".oyunBox").position()
      if(0+$(".oyunBox").innerWidth<x.left){
        $(".oyunBox").css("left", x.left -50 );
      }


    });
    $("#sag").click(function(){
      var x = $(".oyunBox").position();
      if(x.left+100<(window.innerWidth - $(".oyunBox").innerWidth)){

        $(".oyunBox").css("left", x.left +50 );
      }


    });
    $("#yuxari").click(function(){
      var x = $(".oyunBox").position()
      if(0<x.top){
        $(".oyunBox").css("top", x.top -50 );
      }


    });
    $("#asagi").click(function(){
      var x = $(".oyunBox").position()
      if(x.top+150<window.innerHeight){
        $(".oyunBox").css("top", x.top +50 );
      }


    });

     $(document).on('keydown',function(e){
      if(e.keyCode == 37){ 
          var x = $(".oyunBox").position()
          if(0<x.left){
          $(".oyunBox").css("left", x.left -50 );
      }

       }

       if(e.keyCode == 39){
        var x = $(".oyunBox").position()
        if(x.left+100<window.innerWidth){

        $(".oyunBox").css("left", x.left +50 );
      }
       }

       if(e.keyCode == 38){
         var x = $(".oyunBox").position()
       if(0<x.top){
        $(".oyunBox").css("top", x.top -50 );
      }
       }

       if(e.keyCode == 40){
           var x = $(".oyunBox").position()
        if(x.top+150<window.innerHeight){
        $(".oyunBox").css("top", x.top +50 );
      }
       }
        
      
    });

});


