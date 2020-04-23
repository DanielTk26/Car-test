var  h1, h2, h3, h4;

var  b1, b2, b3, b4;



function setup() {

  createCanvas(1200,800);


      h1 = createSprite(395, 46, 20, 70);
      h1.shapeColor = "grey";


      h2 = createSprite(395, 145,20,70);
      h2.shapeColor = "grey";
   
   
      h3 = createSprite(395,264 ,20,70);
      h3.shapeColor = "grey";


      h4 = createSprite(395, 374,20,70);
      h4.shapeColor = "grey";
    

       b1 = createSprite(46,36,30,10);
       b2 = createSprite(46,145,30,10);
       b3 = createSprite(46,264,30,10);
       b4 = createSprite(46,374,30,10);


       b1.shapeColor = "white" ;
       b2.shapeColor = "white" ;
       b3.shapeColor = "white" ;
       b4.shapeColor = "white" ;

       b1.velocityX = 8;     
       b2.velocityX = 12; 
       b3.velocityX = 56; 
       b4.velocityX = 19; 
     
     
      

  }


   function draw () {
     
     background ("black") ;

      
     if (b1.collide(h1)) {
       h1.shapeColor = "lightgreen";
     } 
    
     
         if (b2.collide(h2)) {
       h2.shapeColor = "yellow";
       
     } 
     
    

     if (b3.collide(h3)) {
       h3.shapeColor = "red";
       
     } 
     
    

     if (b4.collide(h4)) {
       h4.shapeColor = "orange" ;
          
     }  
 
    
 
     // if (  movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2            
      //   &&  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 ) {
                

    //  movingRect.VelocityX = movingRect.VelocityX * (-1);     
       
      //fixedRect.VelocityX = fixedRect.VelocityX * (-1);     
    

   //}