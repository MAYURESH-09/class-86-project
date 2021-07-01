 canvas = new fabric.Canvas("myCanvas") ;

 player_x = 10 ;
 player_y = 10 ;

 block_height = 30 ;
 block_width = 30 ;

 player_image_object = "" ;
 block_image_object = "" ;

 function player_upload()
 {
     fabric.Image.fromURL("player.png",function(Img)
     {
        player_image_object = Img ;
        player_image_object.scaleToWidth(150) ;
        player_image_object.scaleToHeight(140) ;
        player_image_object.set({
    top:player_y ,
    left:player_x
       });
       
       canvas.add(player_image_object)
     }) ;
 }