class Box{
    constructor(x, y, width, height){
      var options = {
        'isStatic' : false, 
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.radius = width/2;
      this.image = loadImage("box.png");
      this.visibility = 255;
      World.add(world, this.body);
    }

    score(){
      if(this.visibility < 0 && this.visibility >- 105){
        score++;
      }
   };
    
    display(){
      var pos =this.body.position;
      imageMode(CENTER);

      if(this.body.speed > 3){
        push();
        World.remove(world, this.body) 
        this.visibility = this.visibility - 10;
        tint(255, this.visibility);
        image(this.image, pos.x, pos.y, this.width, this.height)

         pop();
     }
     else{
       push();
       image(this.image, pos.x, pos.y, this.width, this.height)
       pop();
      }

     }
    }
  