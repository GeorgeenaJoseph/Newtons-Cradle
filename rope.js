class Rope {

    //body A is the ball and bodyB is the bar
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        //Creating Constraint
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x: this.offsetX, y: this.offsetY}
        }

        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);

    }
    display() {


        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var pointAX = pointA.x;
        var pointAY = pointA.y;
        var pointBX = pointB.x + this.offsetX;
        var pointBY = pointB.y + this.offsetY;

       strokeWeight(3);
       stroke("#98d42b");

       line(pointAX,pointAY,pointBX,pointBY);
    }
}  