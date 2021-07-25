class Plinko{
    constructor(x,y){
        var options={
            'friction':0.4,
            'density':2,
            'isStatic':true
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body); 
    }

    display(){
        var pos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}