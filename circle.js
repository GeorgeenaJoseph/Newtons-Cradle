class Circle{

    constructor(x,y){

        var ball_options = {
            restitution:1.0,
            friction:0.5,
            density:0.8
          }
        this.r=40;
        this.body= Bodies.circle(x,y,this.r,ball_options);

        World.add(world,this.body);


    }

    display(){

        var pos = this.body.position;

        push()
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        stroke("#98d42b")
        fill("black")
        ellipse(0,0,this.r*2,this.r*2);
        pop()

    }
}