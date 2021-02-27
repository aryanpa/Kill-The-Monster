class Hero{
    constructor(x,y,r){
     var options = {
         isStatic: false,
         density: 1,
         frictionAir: 0.005    
        }

        this.body = Bodies.rectangle(x,y,r,options);
        this.image1 = loadImage("Superhero-01.png");
        this.image2 = loadImage("Superhero-02.png");
        this.r = r

        World.add(world,this.body);

    }

    display(){

    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image1,0,0,this.r,this.r);
    image(this.image2,0,0,this.r,this.r);
    pop();

    }

}